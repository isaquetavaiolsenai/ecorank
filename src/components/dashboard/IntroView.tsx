import { motion } from "motion/react";
import { Award, CheckCircle2, LogOut, User, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return (
    <motion.div 
      key="view-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-[#000000]"
    >
      <div className="app-container overflow-hidden flex flex-col bg-[#000000]">
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
        
        <main className="flex-1 overflow-y-auto scroller-hide px-6 space-y-8 pb-48">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Module - Spans 2 cols on md+ */}
            <section className="md:col-span-2">
              {modules.slice(0, 1).map((m, i) => {
                const done = isCategoryDone(m.id);
                return (
                  <motion.button 
                    key={m.id}
                    onClick={() => !done && startModule(i)}
                    className="w-full h-full text-left bg-pastel-yellow rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden group"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="space-y-3 relative z-10">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-black leading-tight tracking-[calc(-0.02em)] pr-8">
                        {m.label}: Minhas Atitudes
                      </h2>
                      <p className="text-black/60 text-sm sm:text-base font-medium">
                        Analise como suas escolhas diárias impactam o equilíbrio e a sustentabilidade humana no ambiente de trabalho. Suas ações reconstroem ou desgastam a cultura profissional?
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative z-10 pt-4 gap-4">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                             <User size={18} className="text-black" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Guardião</p>
                            <p className="text-xs font-bold text-black">@{user?.nick}</p>
                          </div>
                       </div>
                       <div className="w-full sm:w-auto bg-black text-white rounded-full px-8 py-4 text-[11px] font-extrabold uppercase tracking-widest text-center hover:scale-105 transition-transform">
                          {done ? 'Módulo Completo' : 'Iniciar Análise'}
                       </div>
                    </div>
                  </motion.button>
                );
              })}
            </section>

            {/* Other Modules */}
            {modules.slice(1).map((m, i) => {
              const bgColors = [
                'bg-pastel-pink',
                'bg-pastel-blue',
                'bg-pastel-purple',
                'bg-stone-900 text-white'
              ];
              const done = isCategoryDone(m.id);
              return (
                <motion.button 
                  key={m.id}
                  onClick={() => !done && startModule(i + 1)}
                  className={`w-full text-left p-6 sm:p-8 rounded-[32px] flex flex-col justify-between shadow-xl transition-all min-h-[180px] sm:min-h-[220px] ${bgColors[i % bgColors.length]}`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-2">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-inner ${m.id === 'assedio' ? 'bg-white/10' : 'bg-black/5'}`}>
                      <m.icon size={20} />
                    </div>
                    <h3 className={`text-xl font-extrabold leading-tight tracking-tight mt-4 ${m.id === 'assedio' ? 'text-white' : 'text-black'}`}>
                      {m.label}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                     <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${m.id === 'assedio' ? 'text-white/40' : 'text-black/40'}`}>
                        {done ? 'CONCLUÍDO' : 'DISPONÍVEL'}
                     </span>
                     {done && <CheckCircle2 size={20} className="text-emerald-500" />}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </main>

        {allDone && (
          <div className="fixed bottom-32 left-1/2 -translate-x-1/2 w-full max-w-md px-8 z-[40]">
             <Button 
                onClick={() => submitSurvey(answers)}
                className="w-full h-16 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all border-none"
              >
                Gerar Diagnóstico <Award size={18} className="ml-3" />
              </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
