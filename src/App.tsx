import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { 
  Users, 
  MessageCircle, 
  UserPlus, 
  Scale, 
  ShieldAlert,
  BarChart3,
  MessageSquare,
  User,
  Award,
  AlertCircle
} from "lucide-react";
import { CATEGORIES, SCALE_OPTIONS } from "./constants";
import { GoogleGenAI } from "@google/genai";
import { supabase } from "./lib/supabase";
import { ViewState, UserData, RankingEntry } from "./types";

// Component Imports
import { ProfileView } from "./components/profile/ProfileView";
import { AuthView } from "./components/auth/AuthView";
import { IntroView } from "./components/dashboard/IntroView";
import { QuestionnaireView } from "./components/survey/QuestionnaireView";
import { ModuleSummaryView } from "./components/survey/ModuleSummaryView";
import { RankingView } from "./components/ranking/RankingView";
import { BottomNav } from "./components/layout/BottomNav";
import { PublicProfileView } from "./components/profile/PublicProfileView";

// AI Initialization
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = useState<ViewState>("AUTH");
  const [authStep, setAuthStep] = useState<"NICK" | "LOGIN" | "SIGNUP">("NICK");
  const [user, setUser] = useState<UserData | null>(null);
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isCheckingNick, setIsCheckingNick] = useState(false);
  
  // Questionnaire state
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isModuleStart, setIsModuleStart] = useState(true);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});
  const [tempOpenText, setTempOpenText] = useState("");
  const [moduleFeedback, setModuleFeedback] = useState("");
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [ranking, setRanking] = useState<RankingEntry[]>([]);
  const [publicProfileData, setPublicProfileData] = useState<UserData | null>(null);

  // Derived state
  const totalQuestions = CATEGORIES.reduce((acc, cat) => acc + cat.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const isCategoryDone = (id: string) => {
    const category = CATEGORIES.find(c => c.id === id);
    if (!category) return false;
    return category.questions.every(q => answers[q.id] !== undefined);
  };

  const allDone = CATEGORIES.every(c => isCategoryDone(c.id));

  const modules = [
    { id: "clima", icon: BarChart3, label: "Clima Organizacional" },
    { id: "comunicacao", icon: MessageCircle, label: "Comunicação" },
    { id: "diversidade", icon: Users, label: "Diversidade" },
    { id: "igualdade", icon: Scale, label: "Igualdade" },
    { id: "assedio", icon: ShieldAlert, label: "Assédio" }
  ];

  useEffect(() => {
    // Check for saved session
    const savedUser = localStorage.getItem("ecorank_user_session");
    if (savedUser && !user) {
      try {
        const parsed = JSON.parse(savedUser);
        if (parsed.nick) {
          fetchUserData(parsed.nick);
        }
      } catch (e) {
        localStorage.removeItem("ecorank_user_session");
      }
    }

    // Check for public share link (via query or path)
    const params = new URLSearchParams(window.location.search);
    const shareNick = params.get('share');

    if (shareNick) {
      supabase.from('ecorank_users')
        .select('*')
        .eq('nick', shareNick)
        .single()
        .then(({ data, error }) => {
          if (data && !error) {
            setPublicProfileData({
              nick: data.nick,
              score: data.score,
              completed: data.completed,
              lastFeedback: data.last_feedback,
              codigoVirtual: data.codigo_virtual,
              currentPhase: data.current_phase,
              currentTask: data.current_task
            });
            setView("PUBLIC_PROFILE");
          }
        });
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/ranking") {
      fetchRanking();
    }
  }, [location.pathname]);

  // Actions
  const fetchRanking = async () => {
    try {
      const { data, error } = await supabase
        .from('ecorank_users')
        .select('nick, score')
        .order('score', { ascending: false });
        
      if (error) throw error;
      if (data) setRanking(data as RankingEntry[]);
    } catch (err) {
      console.error("Error fetching ranking:", err);
    }
  };

  const resetSurveyState = () => {
    setCurrentCategoryIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsModuleStart(true);
    setTempOpenText("");
    setModuleFeedback("");
  };

  const handleLogout = () => {
    localStorage.removeItem("ecorank_user_session");
    setUser(null);
    setNick("");
    setPassword("");
    setAuthStep("NICK");
    setView("AUTH");
    resetSurveyState();
  };

  const fetchUserData = async (nick: string) => {
    try {
      const { data, error } = await supabase
        .from('ecorank_users')
        .select('*')
        .eq('nick', nick)
        .maybeSingle();

      if (error || !data) {
        localStorage.removeItem("ecorank_user_session");
        return;
      }

      loginUser(data);
    } catch (err) {
      console.error("Error recovering session:", err);
    }
  };

  const handleCheckNick = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setIsCheckingNick(true);
    try {
      const { data, error } = await supabase
        .from('ecorank_users')
        .select('nick')
        .eq('nick', nick)
        .maybeSingle();

      if (error) throw error;
      setAuthStep(data ? "LOGIN" : "SIGNUP");
    } catch (err) {
      setAuthError("Erro na conexão com o banco de dados.");
    } finally {
      setIsCheckingNick(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      if (authStep === "LOGIN") {
        const { data, error } = await supabase
          .from('ecorank_users')
          .select('*')
          .eq('nick', nick)
          .eq('password', password)
          .maybeSingle();

        if (error) throw error;
        if (!data) {
          setAuthError("Senha incorreta.");
        } else {
          loginUser(data);
        }
      } else {
        const defaultCode = `#${Math.floor(Math.random() * 900000) + 100000}`;
        const { data, error } = await supabase
          .from('ecorank_users')
          .insert([{ nick, password, score: 0, completed: false, codigo_virtual: defaultCode }])
          .select()
          .single();

        if (error) throw error;
        loginUser(data);
      }
    } catch (err) {
      setAuthError("Erro na autenticação.");
    }
  };

  const loginUser = (data: any) => {
    localStorage.setItem("ecorank_user_session", JSON.stringify({ nick: data.nick }));
    const localDataRaw = localStorage.getItem(`ecorank_user_${data.nick}`);
    const defaultCode = `#${Math.floor(Math.random() * 900000) + 100000}`;
    
    let localData = localDataRaw ? JSON.parse(localDataRaw) : { tips: {} };
    
    // Ensure codigoVirtual is present, prioritizing DB > Local > Default
    const finalCode = data.codigo_virtual || localData.codigoVirtual || defaultCode;
    
    // Cache it locally
    localData.codigoVirtual = finalCode;
    localStorage.setItem(`ecorank_user_${data.nick}`, JSON.stringify(localData));

    // Update DB if it was missing there but we found it/generated it
    if (!data.codigo_virtual) {
      supabase.from('ecorank_users')
        .update({ codigo_virtual: finalCode })
        .eq('nick', data.nick)
        .select()
        .then(({ error, data: updatedData }) => {
          if (error) console.error("Erro ao sincronizar código virtual:", error);
          if (updatedData) console.log("Código virtual sincronizado com sucesso.");
        });
    }

    setUser({
      nick: data.nick,
      score: data.score,
      completed: data.completed,
      lastFeedback: data.last_feedback,
      tips: localData.tips,
      codigoVirtual: finalCode,
      currentPhase: data.current_phase || 1,
      currentTask: data.current_task || 1
    });
    setView("INTRO");
    navigate("/modulos");
  };

  const startModule = (index: number) => {
    setCurrentCategoryIndex(index);
    setCurrentQuestionIndex(0);
    setIsModuleStart(true);
    setView("QUESTIONNAIRE");
    navigate("/questionario");
  };

  const handleAnswer = (val: number | string) => {
    const category = CATEGORIES[currentCategoryIndex];
    const question = category.questions[currentQuestionIndex];
    const newAnswers = { ...answers, [question.id]: val };
    setAnswers(newAnswers);
    setTempOpenText("");

    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      processModuleAIFeedback(category.id, newAnswers);
    }
  };

  const processModuleAIFeedback = async (catId: string, currentAnswers: Record<string, any>) => {
    setView("MODULE_SUMMARY");
    navigate("/resumo");
    setIsLoadingFeedback(true);
    try {
      const cat = CATEGORIES.find(c => c.id === catId);
      const catAnswers = cat?.questions.map(q => `${q.text}: ${currentAnswers[q.id]}`).join("\n");
      
      const prompt = `
        Aja como um mentor prático. Analise as respostas do usuário no módulo "${cat?.title}":
        ${catAnswers}

        Dê um feedback rápido e amigável (máx 250 caracteres):
        1. O que ele fez bem.
        2. Qual resposta foi "irregular" ou automática demais (a que mais precisa de atenção).
        3. Como agir melhor na próxima vez de forma simples.

        Use linguagem direta e clara. Sem palavras difíceis ou muita formalidade.
      `;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const feedbackText = response.text || "Ótimo trabalho!";
      setModuleFeedback(feedbackText);

      setUser(prev => {
        if (!prev) return prev;
        const updatedTips = { ...(prev.tips || {}), [catId]: feedbackText };
        const localData = { tips: updatedTips, codigoVirtual: prev.codigoVirtual };
        localStorage.setItem(`ecorank_user_${prev.nick}`, JSON.stringify(localData));
        return { ...prev, tips: updatedTips };
      });
    } catch (err) {
      const fallbackFeedback = "Feedback salvo localmente. Continue para o próximo módulo.";
      setModuleFeedback(fallbackFeedback);
      
      setUser(prev => {
        if (!prev) return prev;
        const updatedTips = { ...(prev.tips || {}), [catId]: fallbackFeedback };
        const localData = { tips: updatedTips, codigoVirtual: prev.codigoVirtual };
        localStorage.setItem(`ecorank_user_${prev.nick}`, JSON.stringify(localData));
        return { ...prev, tips: updatedTips };
      });
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  const nextModule = () => {
    if (currentCategoryIndex < CATEGORIES.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
      setIsModuleStart(true);
      setView("QUESTIONNAIRE");
      navigate("/questionario");
    } else {
      setView("INTRO");
      navigate("/modulos");
    }
  };

  const restartModule = () => {
    // Clear answers for the current category questions
    const category = CATEGORIES[currentCategoryIndex];
    const newAnswers = { ...answers };
    category.questions.forEach(q => {
      delete newAnswers[q.id];
    });
    setAnswers(newAnswers);
    
    // Reset indices
    setCurrentQuestionIndex(0);
    setIsModuleStart(true);
    setModuleFeedback("");
    setView("QUESTIONNAIRE");
    navigate("/questionario");
  };

  const submitSurvey = async (finalAnswers: Record<string, number | string>) => {
    const score = Object.values(finalAnswers).reduce((acc: number, v) => typeof v === 'number' ? acc + v : acc, 0) as number;
    setIsLoadingFeedback(true);
    setView("INTRO");
    navigate("/modulos");
    
    try {
      const feedback = "Diagnóstico concluído com sucesso!";

      await supabase.from('ecorank_users').update({ 
        score, completed: true, last_feedback: feedback, codigo_virtual: user?.codigoVirtual 
      }).eq('nick', user?.nick);

      setUser(prev => {
        if (!prev) return null;
        return { 
          ...prev, 
          score: score, 
          completed: true, 
          lastFeedback: feedback 
        } as UserData;
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingFeedback(false);
    }
  };

  const isAuthPage = location.pathname === "/";
  const isPublicProfile = location.pathname.startsWith("/share") || location.search.includes("share");

  return (
    <div className="w-full bg-[#000000] h-[100dvh] overflow-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            user ? <Navigate to="/modulos" /> : (
              <AuthView 
                authStep={authStep} nick={nick} setNick={setNick}
                password={password} setPassword={setPassword}
                authError={authError} isCheckingNick={isCheckingNick}
                handleCheckNick={handleCheckNick} handleAuth={handleAuth}
                setAuthStep={setAuthStep}
              />
            )
          } />
          
          <Route path="/modulos" element={
            !user ? <Navigate to="/" /> : (
              <IntroView 
                user={user} handleLogout={handleLogout} modules={modules}
                isCategoryDone={isCategoryDone} startModule={startModule}
                allDone={allDone} submitSurvey={submitSurvey} answers={answers}
              />
            )
          } />

          <Route path="/questionario" element={
            !user ? <Navigate to="/" /> : (
              <QuestionnaireView 
                currentCategoryIndex={currentCategoryIndex}
                currentQuestionIndex={currentQuestionIndex}
                isModuleStart={isModuleStart}
                setIsModuleStart={setIsModuleStart}
                handleAnswer={handleAnswer}
                tempOpenText={tempOpenText}
                setTempOpenText={setTempOpenText}
                progress={progress}
                totalQuestions={totalQuestions}
                answeredCount={answeredCount}
              />
            )
          } />

          <Route path="/resumo" element={
            !user ? <Navigate to="/" /> : (
              <ModuleSummaryView 
                category={CATEGORIES[currentCategoryIndex]}
                moduleFeedback={moduleFeedback}
                isLoadingFeedback={isLoadingFeedback}
                onContinue={nextModule}
                onRestart={restartModule}
              />
            )
          } />

          <Route path="/ranking" element={
            !user ? <Navigate to="/" /> : (
              <RankingView user={user} ranking={ranking} handleLogout={handleLogout} />
            )
          } />

          <Route path="/perfil" element={
            !user ? <Navigate to="/" /> : (
              <ProfileView user={user} handleLogout={handleLogout} modules={modules} answers={answers} isCategoryDone={isCategoryDone} />
            )
          } />

          <Route path="/share" element={
            publicProfileData ? (
              <PublicProfileView data={publicProfileData} onClose={() => {
                setPublicProfileData(null);
                navigate("/");
              }} />
            ) : <Navigate to="/" />
          } />
        </Routes>
      </AnimatePresence>
      {(location.pathname === "/modulos" || location.pathname === "/ranking" || location.pathname === "/perfil") && (
        <BottomNav user={user} />
      )}
    </div>
  );
}
