import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RankingEntry, UserData } from "../../types";

interface RankingViewProps {
  user: UserData | null;
  ranking: RankingEntry[];
  handleLogout: () => void;
}

export const RankingView = ({ user, ranking, handleLogout }: RankingViewProps) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      key="view-ranking"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-[#000000]"
    >
      <div className="app-container overflow-hidden flex flex-col bg-white text-black">
        <header className="px-6 pt-safe pb-4 flex items-center justify-between">
           <div className="pt-6 flex items-center justify-between w-full">
             <button 
               onClick={() => navigate("/modulos")}
               className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center active:scale-95 transition-all"
             >
                <ArrowLeft size={18} />
             </button>
             <h1 className="text-xl font-extrabold tracking-tight">Ranking Universal</h1>
             <button 
               onClick={handleLogout}
               className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center active:scale-95 transition-all focus:outline-none"
             >
                <LogOut size={18} />
             </button>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto scroller-hide px-8 pb-48">
           <div className="space-y-8 mt-4 max-w-4xl mx-auto">
              <div className="space-y-2">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Mural de Guardiões</p>
                  <div className="text-4xl sm:text-5xl font-black tracking-tighter">Elite Galáctica</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ranking.map((entry, i) => (
                  <motion.div 
                    key={entry.nick} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`flex items-center p-6 rounded-[32px] transition-all border border-transparent ${entry.nick === user?.nick ? 'bg-black text-white shadow-2xl scale-[1.02] border-white/10 z-10' : 'bg-black/5 hover:bg-black/[0.08]'}`}
                  >
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-black mr-6 shrink-0 ${entry.nick === user?.nick ? 'bg-white text-black' : i < 3 ? 'bg-black text-white' : 'bg-black/10 text-black/40'}`}>
                        {i + 1}
                     </div>
                     <div className="flex-1 min-w-0">
                        <p className="text-base font-extrabold tracking-tight truncate">@{entry.nick}</p>
                        <p className={`text-[9px] font-bold uppercase tracking-widest ${entry.nick === user?.nick ? 'opacity-40' : 'opacity-20'}`}>
                           Nível {Math.floor(entry.score / 100) + 1} • {entry.score > 200 ? 'Influenciador' : 'Colaborador'}
                        </p>
                     </div>
                     <div className="text-right shrink-0">
                        <p className="text-2xl font-black tracking-tighter leading-none">{Number(entry.score).toFixed(2)}</p>
                        <p className={`text-[8px] font-bold uppercase tracking-widest ${entry.nick === user?.nick ? 'opacity-40' : 'opacity-20'}`}>pts</p>
                     </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </main>
      </div>
    </motion.div>
  );
};
