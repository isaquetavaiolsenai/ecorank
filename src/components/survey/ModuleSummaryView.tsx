import { motion } from "motion/react";
import { Award, ChevronRight, Trophy, Lightbulb, CheckCircle2, TrendingUp, RefreshCcw, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/AppButton.tsx";
import Markdown from "react-markdown";
import { Category } from "../../types";
import { useState } from "react";

interface ModuleSummaryProps {
  category: Category;
  moduleFeedback: string;
  isLoadingFeedback: boolean;
  onContinue: () => void;
  onRestart: () => void;
}

export const ModuleSummaryView = ({ category, moduleFeedback, isLoadingFeedback, onContinue, onRestart }: ModuleSummaryProps) => {
  const [copied, setCopied] = useState(false);
  const categoryColors: Record<string, string> = {
    clima: "bg-pastel-yellow",
    comunicacao: "bg-pastel-blue",
    diversidade: "bg-pastel-pink",
    igualdade: "bg-pastel-purple",
    assedio: "bg-stone-100"
  };

  const currentBg = categoryColors[category.id] || "bg-white";

  const handleShare = () => {
    const text = `EcoRank Insight [${category.title}]:\n\n${moduleFeedback}\n\nAnalise seu perfil em: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({
        title: 'EcoRank Insight',
        text: text,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
                   {isLoadingFeedback || !moduleFeedback ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Sparkles className="text-emerald-400 animate-spin" size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Sintonizando Frequência...</span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-white/10 rounded-full w-3/4 animate-pulse" />
                        <div className="h-4 bg-white/10 rounded-full w-full animate-pulse" />
                        <div className="h-4 bg-white/10 rounded-full w-2/3 animate-pulse" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Sparkles className="text-emerald-400" size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">EcoRank AI Online</span>
                         </div>
                         <button 
                          onClick={handleShare}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-[9px] font-black uppercase tracking-widest text-white"
                         >
                          {copied ? 'Copiado!' : <><Share2 size={12} /> Partilhar</>}
                         </button>
                      </div>
                      <div className="markdown-body">
                        <div className="text-xl sm:text-2xl font-bold leading-tight tracking-tight italic text-white/90">
                          <Markdown>{moduleFeedback}</Markdown>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="bg-white/95 backdrop-blur-xl p-6 rounded-[40px] border border-black/[0.03] shadow-[0_15px_45px_rgb(0,0,0,0.1)] overflow-hidden relative group transition-all hover:shadow-[0_25px_60px_rgb(0,0,0,0.15)] hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-emerald-500/40 transition-colors" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600/70 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Status
                  </p>
                  <div className="flex flex-col gap-5">
                    <div className="w-16 h-16 rounded-[28px] bg-emerald-500/10 flex items-center justify-center shadow-inner group-hover:bg-emerald-500/20 transition-all duration-500 group-hover:rotate-6">
                      <CheckCircle2 size={32} className="text-emerald-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-1">Mandou</span>
                      <span className="text-3xl font-black text-black uppercase tracking-tighter leading-[0.8] text-emerald-600">Bem</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="bg-white/95 backdrop-blur-xl p-6 rounded-[40px] border border-black/[0.03] shadow-[0_15px_45px_rgb(0,0,0,0.1)] overflow-hidden relative group transition-all hover:shadow-[0_25px_60px_rgb(0,0,0,0.15)] hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-blue-500/40 transition-colors" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600/70 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Evolução
                  </p>
                  <div className="flex flex-col gap-5">
                    <div className="w-16 h-16 rounded-[28px] bg-blue-500/10 flex items-center justify-center shadow-inner group-hover:bg-blue-500/20 transition-all duration-500 group-hover:-rotate-6">
                      <TrendingUp size={32} className="text-blue-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-black uppercase tracking-tighter leading-[0.8] mb-1">Perfil</span>
                      <span className="text-3xl font-black text-black uppercase tracking-tighter leading-[0.8] text-blue-600">Ativo</span>
                    </div>
                  </div>
                </motion.div>
              </div>
           </div>
        </main>

        {!isLoadingFeedback && (
           <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-8 z-50 flex items-stretch gap-4">
              <Button 
                onClick={onRestart}
                variant="outline"
                className="h-20 w-20 rounded-[30px] border-2 border-black/5 bg-white/80 backdrop-blur-md text-black hover:bg-black hover:text-white transition-all active:scale-90 flex items-center justify-center p-0 shrink-0 shadow-xl"
                title="Refazer este módulo"
              >
                <RefreshCcw size={28} />
              </Button>
              <Button 
                onClick={onContinue}
                className="flex-1 h-20 rounded-[30px] text-xs font-black uppercase tracking-[0.25em] shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all active:scale-95 bg-black text-white hover:bg-stone-900 border-none flex items-center justify-center gap-3"
              >
                Continuar <ChevronRight size={20} />
              </Button>
           </div>
        )}
      </div>
    </motion.div>
  );
};
