import { Link, useLocation } from "react-router-dom";
import { Home, Trophy, User } from "lucide-react";
import { UserData } from "../../types";

interface BottomNavProps {
  user: UserData | null;
}

export const BottomNav = ({ user }: BottomNavProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-6">
      <div className="bg-black/80 backdrop-blur-3xl border border-white/20 rounded-full p-2 flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Link 
          to="/"
          className={`w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 focus:outline-none ${isActive('/') ? 'bg-stone-accent text-white scale-105 shadow-[0_0_20px_rgba(3,85,63,0.4)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
        >
          <Home size={20} />
          <span className="text-[7px] font-black uppercase mt-1">Missões</span>
        </Link>
        <Link 
          to="/ranking"
          className={`w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 focus:outline-none ${isActive('/ranking') ? 'bg-stone-accent text-white scale-105 shadow-[0_0_20px_rgba(3,85,63,0.4)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
        >
          <Trophy size={20} />
          <span className="text-[7px] font-black uppercase mt-1">Ranking</span>
        </Link>
        <Link 
          to="/perfil"
          className={`w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 focus:outline-none ${isActive('/perfil') ? 'bg-stone-accent text-white scale-105 shadow-[0_0_20px_rgba(3,85,63,0.4)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
        >
          <User size={20} />
          <span className="text-[7px] font-black uppercase mt-1">Perfil</span>
        </Link>
      </div>
    </div>
  );
};
