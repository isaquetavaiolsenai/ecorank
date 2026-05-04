import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, LogOut, Award, Key, Lightbulb, CheckCircle2, QrCode as QrIcon, Sparkles } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { UserData } from "../../types";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";

interface ProfileViewProps {
  user: UserData | null;
  handleLogout: () => void;
  modules: any[];
  answers: any;
  isCategoryDone: (id: string) => boolean;
}

export const ProfileView = ({
  user,
  handleLogout,
  modules,
  isCategoryDone
}: ProfileViewProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showQR, setShowQR] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("new_diagnosis") === "true") {
      setShowSuccessToast(true);
      // Limpa a URL sem reload
      window.history.replaceState({}, '', location.pathname);
      const timer = setTimeout(() => setShowSuccessToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  if (!user) return null;

  const shareUrl = `${window.location.origin}/p/${user.nick}`;

  return (
    <motion.div 
      key="view-profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-background relative"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <div className="app-container overflow-hidden flex flex-col bg-background relative z-10">
        <header className="px-6 pt-safe pb-2 space-y-6">
          <div className="flex items-center justify-between pt-6">
            <button onClick={() => navigate("/")} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
               <ArrowLeft size={18} className="text-foreground" />
            </button>
            <h1 className="text-xl font-extrabold tracking-tight text-foreground">Perfil EcoRank</h1>
            <button 
              onClick={handleLogout}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-foreground"
            >
              <LogOut size={18} />
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center justify-between bg-card-bg/40 border border-white/5 rounded-3xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-stone-accent flex items-center justify-center shadow-[0_0_20px_rgba(3,85,63,0.3)]">
                <span className="text-xl font-black text-white">{user.nick.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <p className="text-base font-bold text-foreground">@{user.nick}</p>
                <p className="text-[9px] font-bold text-stone-accent uppercase tracking-widest">{user.codigoVirtual}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scroller-hide px-6 space-y-8 pb-32 pt-4">
          {/* Diagnóstico Global - Agora como visualização única */}
          <section className="space-y-6">
            {user.lastFeedback ? (
              <div className="space-y-8">


                {/* Sumário Card */}
                <div className="bg-card-bg/60 border border-white/5 rounded-[40px] p-10 relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-stone-accent/[0.05] rounded-full -mr-32 -mt-32 blur-[100px]" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                    <div className="w-28 h-28 rounded-full border-2 border-stone-accent flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(3,85,63,0.3)]">
                      <div className="w-full h-full rounded-full bg-stone-accent/10 flex items-center justify-center text-5xl font-black text-stone-accent">
                        {user.nick.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <h2 className="text-3xl font-black text-white tracking-tighter leading-[0.8] mb-1 italic">@{user.nick}</h2>
                      <div className="flex items-center justify-center gap-2 text-stone-accent/60">
                         <span className="w-1 h-1 rounded-full bg-stone-accent" />
                         <p className="text-[10px] font-black uppercase tracking-[0.25em]">Protocolo Brasil-ESG</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full pt-4">
                      <div className="bg-black/50 rounded-[32px] p-5 border border-white/5 flex flex-col gap-1 items-center justify-center backdrop-blur-sm">
                        <span className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">EcoScore Total</span>
                        <span className="text-4xl font-black text-stone-accent tracking-tighter">{user.score || 0}</span>
                      </div>
                      <div className="bg-black/50 rounded-[32px] p-5 border border-white/5 flex flex-col gap-1 items-center justify-center backdrop-blur-sm">
                        <span className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">Status Global</span>
                        <span className="text-xl font-black text-white uppercase tracking-tighter leading-none">Guardião</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 rounded-full bg-stone-accent/10 border border-stone-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="text-stone-accent" size={16} />
                    </div>
                    <h2 className="text-[10px] font-black tracking-[0.25em] text-foreground/40 uppercase">Relatório de Diagnóstico AI</h2>
                  </div>

                  <div className="bg-card-bg border border-white/10 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-stone-accent" />
                    <div className="markdown-body">
                      <Markdown>{user.lastFeedback}</Markdown>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowQR(true)}
                    className="w-full h-14 rounded-2xl bg-stone-accent text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-stone-accent/90"
                  >
                    <QrIcon size={16} /> Gerar QR Code
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center p-12 border border-dashed border-white/10 rounded-[40px] bg-white/5 text-foreground/40 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto opacity-50">
                   <Lightbulb size={24} />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em]">Caminho Incompleto</p>
                  <p className="text-[10px] font-medium leading-relaxed max-w-[200px] mx-auto opacity-60 uppercase tracking-widest">Complete todos os módulos para desbloquear seu Diagnóstico AI Global.</p>
                </div>
                <button 
                  onClick={() => navigate("/")}
                  className="px-6 h-10 rounded-full border border-stone-accent/30 text-stone-accent text-[9px] font-black uppercase tracking-[0.2em] hover:bg-stone-accent hover:text-white transition-all mt-4"
                >
                  Continuar Jornada
                </button>
              </div>
            )}
          </section>
        </main>

        {/* Success Toast */}
        <AnimatePresence>
          {showSuccessToast && (
            <motion.div 
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 20, x: "-50%" }}
              className="fixed bottom-24 left-1/2 z-[110] bg-stone-accent text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl border border-white/20 whitespace-nowrap"
            >
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Diagnóstico Armazenado com Sucesso!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QR Code Overlay */}
        <AnimatePresence>
          {showQR && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setShowQR(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white p-6 rounded-[40px] shadow-2xl flex flex-col items-center gap-6 max-w-[320px] w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-1 bg-black/10 rounded-full" />
                
                <div className="text-center space-y-1 pt-4">
                  <h3 className="text-xl font-black text-black tracking-tighter">@{user.nick}</h3>
                  <p className="text-[9px] font-black text-stone-accent uppercase tracking-[0.2em]">Identidade EcoRank Verificada</p>
                </div>

                <div className="p-4 bg-stone-accent/5 rounded-[30px] border border-stone-accent/10">
                  <QRCodeSVG value={shareUrl} size={160} fgColor="#03553f" />
                </div>

                <div className="space-y-3 w-full text-center">
                  <div className="py-3 px-4 bg-black rounded-xl">
                    <p className="text-[7px] font-black text-white/40 uppercase tracking-widest mb-1">Link de Acesso</p>
                    <p className="text-[10px] font-mono font-bold text-white truncate">{shareUrl.replace(/^https?:\/\//, '')}</p>
                  </div>
                  
                  <p className="text-[9px] font-medium text-black/60 italic leading-relaxed px-2">
                    "Acesso para validação de competências."
                  </p>
                </div>

                <button 
                  onClick={() => setShowQR(false)}
                  className="w-full h-12 rounded-2xl bg-stone-accent text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all font-mono"
                >
                  Fechar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
