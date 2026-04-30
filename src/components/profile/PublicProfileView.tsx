import { motion } from "motion/react";
import { Trophy, Leaf, Star, ArrowLeft } from "lucide-react";
import { UserData } from "../../types";
import Markdown from "react-markdown";

interface PublicProfileViewProps {
  data: UserData;
  onClose: () => void;
}

export function PublicProfileView({ data, onClose }: PublicProfileViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col p-6 overflow-y-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />

      <button 
        onClick={onClose}
        className="relative z-10 self-start p-3 mb-8 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-colors"
      >
        <ArrowLeft size={20} />
      </button>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div 
          className="w-24 h-24 rounded-3xl mb-4 flex items-center justify-center text-3xl font-bold shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: '#203959', color: '#fff' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <span className="relative z-10">{data.nick[0].toUpperCase()}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-1">@{data.nick}</h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-8">
          <Leaf size={14} />
          Eco-Membro
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center">
            <Trophy className="text-yellow-500 mb-2" size={24} />
            <span className="text-2xl font-bold text-white">{data.score}</span>
            <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Pontos</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center">
            <Star className="text-purple-500 mb-2" size={24} />
            <span className="text-2xl font-bold text-white">{data.currentPhase || 1}</span>
            <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Fase</span>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white/5 border border-white/10 p-8 rounded-[40px] text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full -mr-12 -mt-12 blur-xl" />
          <h2 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">Último Diagnóstico AI</h2>
          <div className="text-white text-xl leading-snug italic font-medium">
            <Markdown>{data.lastFeedback || "Ainda sem feedback público."}</Markdown>
          </div>
        </div>
        
          <div className="mt-12 text-center">
            <div className="text-white/10 font-black italic text-xl tracking-tighter">EcoRank</div>
            <p className="text-white/10 text-[8px] mt-2 font-mono uppercase tracking-[0.3em]">VALIDADO VIA ECORANK PROTOCOL</p>
          </div>
      </div>
    </motion.div>
  );
}
