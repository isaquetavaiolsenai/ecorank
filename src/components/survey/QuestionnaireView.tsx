import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, BarChart3, MessageCircle, Users, Scale, ShieldAlert, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/AppButton.tsx";
import { Textarea } from "@/components/ui/AppTextarea.tsx";
import { Progress, ProgressIndicator, ProgressTrack } from "@/components/ui/AppProgress.tsx";
import { CATEGORIES, SCALE_OPTIONS } from "../../constants";
import { Category, Question } from "../../types";

interface QuestionnaireViewProps {
  currentCategoryIndex: number;
  currentQuestionIndex: number;
  isModuleStart: boolean;
  setIsModuleStart: (v: boolean) => void;
  handleAnswer: (val: any) => void;
  tempOpenText: string;
  setTempOpenText: (v: string) => void;
  progress: number;
  totalQuestions: number;
  answeredCount: number;
}

export const QuestionnaireView = ({
  currentCategoryIndex,
  currentQuestionIndex,
  isModuleStart,
  setIsModuleStart,
  handleAnswer,
  tempOpenText,
  setTempOpenText,
  progress,
  totalQuestions,
  answeredCount
}: QuestionnaireViewProps) => {
  const navigate = useNavigate();
  const category = CATEGORIES[currentCategoryIndex];
  if (!category) return null;
  const question = category.questions[currentQuestionIndex];
  if (!question) return null;

  const categoryColors: Record<string, string> = {
    clima: "bg-pastel-yellow",
    comunicacao: "bg-pastel-blue",
    diversidade: "bg-pastel-pink",
    igualdade: "bg-pastel-purple",
    assedio: "bg-stone-100"
  };

  const currentBg = categoryColors[category.id] || "bg-white";

  if (isModuleStart) {
    return (
      <motion.div 
      key={`module-intro-${category.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-background"
    >
      <div className="app-container flex flex-col bg-background relative">
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-stone-accent/[0.03] to-transparent pointer-events-none" />
          
          <header className="px-8 pt-safe flex justify-between items-center relative z-10">
             <div className="pt-6 flex justify-between items-center w-full">
               <button onClick={() => navigate("/")} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ArrowLeft size={18} className="text-foreground" />
               </button>
               <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-foreground/40">
                 Missão {currentCategoryIndex + 1}
               </span>
             </div>
          </header>

          <main className="flex-1 px-8 md:px-16 flex flex-col justify-center space-y-8 max-w-4xl mx-auto relative z-10">
             <div className="space-y-4">
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="w-20 h-20 rounded-[32px] flex items-center justify-center shadow-2xl bg-white/5 border border-white/10 text-stone-accent"
                >
                   {category.id === 'clima' && <BarChart3 size={32} />}
                   {category.id === 'comunicacao' && <MessageCircle size={32} />}
                   {category.id === 'diversidade' && <Users size={32} />}
                   {category.id === 'igualdade' && <Scale size={32} />}
                   {category.id === 'assedio' && <ShieldAlert size={32} />}
                </motion.div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-none text-foreground">
                   {category.title}
                </h2>
             </div>

             <p className="text-base md:text-xl font-medium leading-relaxed text-foreground/60">
                Uma análise de como suas ações e atitudes profissionais em relação a {category.title.toLowerCase()} 
                ajudam a reconstruir o equilíbrio do nosso universo corporativo.
             </p>

             <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5">
                   <TrendingUp size={14} className="text-stone-accent" />
                   <span className="text-[10px] font-extrabold uppercase tracking-widest text-foreground/60">{category.questions.length} questões</span>
                </div>
             </div>

             <Button 
                onClick={() => setIsModuleStart(false)}
                className="w-full h-20 rounded-full text-sm font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 bg-stone-accent text-white"
             >
                Iniciar Missão <ChevronRight size={18} className="ml-2" />
             </Button>
          </main>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      key={`question-${category.id}-${currentQuestionIndex}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-background"
    >
      <div className="app-container flex flex-col bg-background">
        <header className="px-8 pt-safe space-y-6">
           <div className="pt-6 flex items-center justify-between">
              <button onClick={() => navigate("/modulos")} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                 <ArrowLeft size={18} className="text-foreground" />
              </button>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Progresso Universal</span>
                <span className="text-xs font-black text-foreground">{answeredCount}/{totalQuestions}</span>
              </div>
           </div>
           <Progress value={progress} className="h-1.5 bg-white/5 overflow-hidden rounded-full">
             <ProgressTrack>
               <ProgressIndicator className="bg-stone-accent" />
             </ProgressTrack>
           </Progress>
        </header>

        <main className="px-8 md:px-16 flex flex-col justify-start py-8 max-w-4xl mx-auto w-full">
           <div className="space-y-8">
              <motion.h2 
                key={question.text}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug text-foreground"
              >
                {question.text}
              </motion.h2>

              <div className="space-y-3 pb-12">
                {question.type === "SCALE" && SCALE_OPTIONS.map((opt) => (
                  <motion.button
                    key={opt.label}
                    onClick={() => handleAnswer(opt.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center p-5 sm:p-6 rounded-[32px] border transition-all text-left bg-white/5 border-white/10 hover:bg-white/10 hover:border-stone-accent/30"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl sm:text-2xl mr-4 sm:mr-5 shrink-0 border border-white/5">
                      {opt.emoji}
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-foreground">{opt.label}</span>
                  </motion.button>
                ))}

                {(question.type === "MULTIPLE" || question.type === "BOOLEAN") && question.options?.map((opt) => (
                  <motion.button
                    key={opt.label}
                    onClick={() => handleAnswer(opt.value)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center p-5 sm:p-6 rounded-[32px] border transition-all text-left bg-white/5 border-white/10 hover:bg-white/10 hover:border-stone-accent/30"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl sm:text-2xl mr-4 sm:mr-5 shrink-0 border border-white/5">
                      {opt.emoji}
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide text-foreground">{opt.label}</span>
                  </motion.button>
                ))}

               {question.type === "OPEN" && (
                 <div className="space-y-6">
                   <Textarea 
                     placeholder="Sua voz é essencial. Como você descreveria seu impacto..."
                     value={tempOpenText}
                     onChange={(e) => setTempOpenText(e.target.value)}
                     className="resize-none h-48 rounded-[40px] p-8 text-lg font-medium shadow-inner bg-white/5 border-white/10 text-foreground placeholder:text-foreground/20 focus:border-stone-accent/30 transition-all"
                   />
                   <Button 
                     className="w-full h-20 rounded-full text-sm font-black uppercase tracking-widest shadow-2xl bg-stone-accent text-white hover:bg-stone-accent/90"
                     onClick={() => handleAnswer(tempOpenText)}
                     disabled={!tempOpenText.trim()}
                   >
                     PRÓXIMO <ChevronRight size={18} className="ml-2" />
                   </Button>
                 </div>
               )}

               {question.type === "SCALE" && (
                   <div className="flex justify-between items-center text-[10px] md:text-xs font-black uppercase tracking-widest mt-12 px-4 opacity-40 text-foreground">
                    <span>Discordo Totalmente</span>
                    <span>Concordo Totalmente</span>
                  </div>
               )}
              </div>
           </div>
        </main>
        
        <footer className="p-8 text-center text-[10px] font-black uppercase tracking-[0.4em] opacity-20 text-foreground">
           Protocolo de Preservação Universal • EcoRank
        </footer>
      </div>
    </motion.div>
  );
};
