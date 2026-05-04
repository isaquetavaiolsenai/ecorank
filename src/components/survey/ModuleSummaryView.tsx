import { motion } from "motion/react";
import { Award, ChevronRight, Trophy, Lightbulb, CheckCircle2, TrendingUp, RefreshCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/AppButton.tsx";
import Markdown from "react-markdown";
import { Category } from "../../types";
import { useState } from "react";

interface ModuleSummaryProps {
  category: Category;
  nextCategory?: Category;
  moduleFeedback: string;
  isLoadingFeedback: boolean;
  onContinue: () => void;
  onRestart: () => void;
}

export const ModuleSummaryView = ({ category, nextCategory, moduleFeedback, isLoadingFeedback, onContinue, onRestart }: ModuleSummaryProps) => {
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
      className="w-full min-h-screen bg-background"
    >
      <div className="app-container flex flex-col bg-background relative">
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-stone-accent/[0.03] to-transparent pointer-events-none" />
        
        <header className="px-8 pt-safe pb-4 flex justify-between items-center relative z-10 border-b border-white/5">
           <div className="pt-6 flex justify-between items-center w-full">
             <div className="space-y-1">
                <h1 className="text-2xl font-black tracking-tight text-foreground">Impacto Detetado</h1>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-accent">{category.title}</p>
             </div>
             <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                <Trophy size={20} className="text-stone-accent" />
             </div>
           </div>
        </header>

        <main className="px-8 pb-12 max-w-4xl mx-auto w-full relative z-10">
           <div className="space-y-12 mt-12 pb-48">
              <div className="flex items-center gap-4">
                 <div className="p-4 rounded-3xl bg-stone-accent text-white shadow-[0_0_20px_rgba(3,85,63,0.3)]">
                    <Award size={24} />
                 </div>
                 <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground">Visão Universal</h3>
                    <p className="text-xs font-medium text-foreground/40">Sintonizado pelo EcoRank AI</p>
                 </div>
              </div>

              <div className="bg-card-bg border border-white/10 text-foreground p-6 sm:p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-stone-accent/[0.03] rounded-full -mr-32 -mt-32 blur-[80px]" />
                <div className="relative z-10 space-y-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Lightbulb size={20} className="text-stone-accent" />
                  </div>
                   {isLoadingFeedback || !moduleFeedback ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Sparkles className="text-stone-accent animate-pulse" size={16} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Sintonizando Frequência...</span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-white/5 rounded-full w-3/4 animate-pulse" />
                        <div className="h-4 bg-white/5 rounded-full w-full animate-pulse" />
                        <div className="h-4 bg-white/5 rounded-full w-2/3 animate-pulse" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="markdown-body">
                        <Markdown>{moduleFeedback}</Markdown>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
         </main>

        {!isLoadingFeedback && (
           <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[500px] px-8 z-50 flex items-stretch gap-4">
              <Button 
                onClick={onContinue}
                className="flex-1 h-20 rounded-[30px] text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_15px_35px_rgba(3,85,63,0.2)] transition-all active:scale-95 bg-stone-accent text-white hover:bg-stone-accent/90 border-none flex items-center justify-center gap-3 whitespace-normal leading-tight px-6 text-center"
              >
                <div className="flex items-center gap-2">
                  <span>{nextCategory ? 'PRÓXIMO' : 'FINALIZAR JORNADA'}</span>
                  <ChevronRight size={20} className="shrink-0" />
                </div>
              </Button>
           </div>
        )}

      </div>
    </motion.div>
  );
};
