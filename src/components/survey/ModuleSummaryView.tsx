import { motion } from "motion/react";
import { Award, ChevronRight, Trophy, Lightbulb, CheckCircle2, TrendingUp, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import { Category } from "../../types";

interface ModuleSummaryProps {
  category: Category;
  moduleFeedback: string;
  isLoadingFeedback: boolean;
  onContinue: () => void;
  onRestart: () => void;
}

export const ModuleSummaryView = ({ category, moduleFeedback, isLoadingFeedback, onContinue, onRestart }: ModuleSummaryProps) => {
  const categoryColors: Record<string, string> = {
    clima: "bg-pastel-yellow",
    comunicacao: "bg-pastel-blue",
    diversidade: "bg-pastel-pink",
    igualdade: "bg-pastel-purple",
    assedio: "bg-stone-100"
  };

  const currentBg = categoryColors[category.id] || "bg-white";

  return (
    <motion.div 
      key="view-module-summary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-[#000000]"
    >
      <div className={`app-container overflow-hidden flex flex-col ${currentBg}`}>
        <header className="px-8 pt-safe pb-4 flex justify-between items-center">
           <div className="pt-6 flex justify-between items-center w-full">
             <div className="space-y-1">
                <h1 className="text-2xl font-black tracking-tight text-black">Impacto Detetado</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">{category.title}</p>
             </div>
             <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/5">
                <Trophy size={20} className="text-black" />
             </div>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto scroller-hide px-8 pb-32 max-w-4xl mx-auto w-full">
           <div className="space-y-12 mt-12">
              <div className="flex items-center gap-4">
                 <div className="p-4 rounded-3xl bg-black text-white">
                    <Award size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-black">Visão Universal</h3>
                    <p className="text-xs font-medium text-black/40">Sintonizado pelo EcoRank AI</p>
                 </div>
              </div>

              <div className="bg-black text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="relative z-10 space-y-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Lightbulb size={20} className="text-white/60" />
                  </div>
                  {isLoadingFeedback ? (
                    <div className="space-y-3">
                      <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse" />
                      <div className="h-4 bg-white/10 rounded-full w-full animate-pulse" />
                      <div className="h-4 bg-white/10 rounded-full w-2/3 animate-pulse" />
                    </div>
                  ) : (
                    <div className="markdown-body">
                      <div className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight italic">
                        <Markdown>{moduleFeedback}</Markdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/90 backdrop-blur-xl p-6 rounded-[40px] border border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-green-500/20 transition-colors" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 mb-4">Seu Momento</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[20px] bg-green-500/5 flex items-center justify-center shadow-inner">
                      <CheckCircle2 size={24} className="text-green-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black text-black uppercase tracking-tight leading-none mb-0.5">Mandou</span>
                      <span className="text-[13px] font-black text-black uppercase tracking-tight leading-none">Bem</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/90 backdrop-blur-xl p-6 rounded-[40px] border border-black/[0.03] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative group transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 mb-4">Seu Perfil</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[20px] bg-blue-500/5 flex items-center justify-center shadow-inner">
                      <TrendingUp size={24} className="text-blue-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black text-black uppercase tracking-tight leading-none mb-0.5">Perfil</span>
                      <span className="text-[13px] font-black text-black uppercase tracking-tight leading-none">Engajado</span>
                    </div>
                  </div>
                </motion.div>
              </div>
           </div>
        </main>

        {!isLoadingFeedback && (
           <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-8 z-50 flex gap-3">
              <Button 
                onClick={onRestart}
                variant="outline"
                className="h-20 w-20 rounded-full border-2 border-black/10 bg-white/50 backdrop-blur-md text-black hover:bg-black hover:text-white transition-all active:scale-90 flex items-center justify-center p-0"
                title="Regenerar resposta"
              >
                <RefreshCcw size={24} />
              </Button>
              <Button 
                onClick={onContinue}
                className="flex-1 h-20 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-black/20 transition-all active:scale-95 bg-black text-white hover:bg-stone-900 border-none flex items-center justify-center gap-2"
              >
                Confirmar Leitura <ChevronRight size={18} />
              </Button>
           </div>
        )}
      </div>
    </motion.div>
  );
};
