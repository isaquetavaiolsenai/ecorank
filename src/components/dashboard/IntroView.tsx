import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Award, CheckCircle2, LogOut, User, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/AppButton.tsx";
import { UserData } from "../../types";

interface IntroViewProps {
  user: UserData | null;
  handleLogout: () => void;
  modules: any[];
  isCategoryDone: (id: string) => boolean;
  startModule: (index: number) => void;
  allDone: boolean;
  submitSurvey: (answers: any) => void;
  answers: any;
}

export const IntroView = ({
  user,
  handleLogout,
  modules,
  isCategoryDone,
  startModule,
  allDone,
  submitSurvey,
  answers
}: IntroViewProps) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      key="view-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-background relative"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none" />
      <div className="app-container flex flex-col bg-background relative z-10 text-foreground">
        {/* Top Bar */}
        <header className="px-6 pt-safe pb-4 space-y-6">
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transform -rotate-12">
                 <TrendingUp size={16} className="text-black" />
              </div>
              <h1 className="text-xl font-extrabold tracking-tight">EcoRank</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-tight">Guardião</p>
                <p className="text-xs font-bold text-white">@{user?.nick}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </header>
        
        <main className="px-6 space-y-12 pb-48">
          {/* Main Journey Header */}
          <div className="relative z-10 space-y-2 mt-4">
            <h2 className="text-3xl font-black tracking-tighter text-foreground">Sua Jornada EcoRank</h2>
            <p className="text-sm font-medium text-foreground/40 max-w-xs">Complete a trilha universal para desbloquear seu EcoScore completo.</p>
          </div>

          {/* Linear Journey Flow */}
          <div className="relative space-y-6">
            {/* Vertical Path Line */}
            <div className="absolute left-[39px] top-8 bottom-8 w-[2px] bg-white/[0.05] z-0 overflow-hidden">
               <motion.div 
                 className="w-full bg-stone-accent origin-top"
                 initial={{ scaleY: 0 }}
                 animate={{ scaleY: modules.filter(m => isCategoryDone(m.id)).length / modules.length }}
                 transition={{ duration: 1.5, ease: "circOut" }}
               />
            </div>

            {modules.map((m, i) => {
              const done = isCategoryDone(m.id);
              const isNext = !done && (i === 0 || isCategoryDone(modules[i-1]?.id));
              const isLocked = !done && !isNext;

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex items-start gap-6"
                >
                  {/* Step Indicator */}
                  <div className="relative shrink-0">
                    <div className={`w-20 h-20 rounded-[28px] border flex items-center justify-center transition-all duration-500 ${
                      done ? 'bg-stone-accent border-stone-accent shadow-[0_0_20px_rgba(3,85,63,0.3)]' : 
                      isNext ? 'bg-white/5 border-stone-accent/50 animate-pulse' : 
                      'bg-white/[0.02] border-white/[0.05] opacity-40'
                    }`}>
                      {done ? (
                        <CheckCircle2 size={32} className="text-white" />
                      ) : (
                        <m.icon size={28} className={isNext ? 'text-stone-accent' : 'text-foreground/20'} />
                      )}
                    </div>
                    {isNext && (
                       <div className="absolute -inset-1 rounded-[32px] border border-stone-accent/20 animate-[ping_2s_infinite]" />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.button
                    onClick={() => !isLocked && startModule(i)}
                    disabled={isLocked}
                    className={`flex-1 text-left p-6 rounded-[32px] border transition-all relative overflow-hidden group min-h-[120px] ${
                      done ? 'bg-card-bg/60 border-white/[0.05] grayscale opacity-60' :
                      isNext ? 'bg-gradient-to-br from-card-muted to-card-bg border-white/[0.1] shadow-2xl scale-[1.02]' :
                      'bg-white/[0.02] border-transparent opacity-30 shadow-none'
                    }`}
                    whileHover={!isLocked && !done ? { x: 5, borderColor: '#03553f' } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                    
                    <div className="space-y-1 relative z-10">
                      <div className="flex items-center justify-between">
                        {isNext && (
                          <span className="bg-stone-accent/10 border border-stone-accent/20 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest text-stone-accent leading-none">Inicia Agora</span>
                        )}
                      </div>
                      <h3 className="text-xl font-extrabold tracking-tight text-foreground">{m.label}</h3>
                      {!isLocked && (
                        <p className="text-[10px] sm:text-xs font-medium text-foreground/50 line-clamp-2 mt-2 leading-relaxed">
                          {i === 0 ? "Analise como suas escolhas diárias impactam o equilíbrio humano." : "Protocolos de conduta e impacto no ecossistema corporativo."}
                        </p>
                      )}
                    </div>

                    {isNext && (
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/[0.05]">
                         <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">5 Questões • Diagnóstico AI</span>
                         <ChevronRight size={16} className="text-stone-accent" />
                      </div>
                    )}
                    {isLocked && (
                       <div className="absolute top-4 right-6 text-foreground/20 font-black italic text-lg tracking-tighter opacity-10">BLOQUEADO</div>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </main>

        {allDone && (
          <div className="fixed bottom-32 left-1/2 -translate-x-1/2 w-full max-w-[500px] px-8 z-[40]">
             {user?.completed ? (
               <Button 
                  onClick={() => navigate("/perfil?new_diagnosis=true")}
                  className="w-full h-16 bg-stone-accent text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(3,85,63,0.3)] hover:scale-105 active:scale-95 transition-all border-none flex items-center justify-center gap-3"
                >
                  Ver Diagnóstico no Perfil <User size={18} />
                </Button>
             ) : (
               <Button 
                  onClick={() => submitSurvey(answers)}
                  className="w-full h-16 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all border-none flex items-center justify-center gap-3"
                >
                  Gerar Diagnóstico <Award size={18} />
                </Button>
             )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
