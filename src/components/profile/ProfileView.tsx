import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut, Award, Key, Lightbulb, CheckCircle2, QrCode as QrIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { UserData } from "../../types";
import { useState } from "react";
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
  const [showQR, setShowQR] = useState(false);
  if (!user) return null;

  const shareUrl = `${window.location.origin}${window.location.pathname}?share=${user.nick}`;

  return (
    <motion.div 
      key="view-profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full bg-[#000000]"
    >
      <div className="app-container overflow-hidden flex flex-col bg-[#000000]">
        <header className="px-6 pt-safe pb-6 space-y-6">
          <div className="flex items-center justify-between pt-6">
            <button onClick={() => navigate("/modulos")} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
               <ArrowLeft size={18} className="text-white" />
            </button>
            <h1 className="text-xl font-extrabold tracking-tight text-white">Seu Perfil</h1>
            <button 
              onClick={handleLogout}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scroller-hide px-6 space-y-8 pb-32">
          {/* User Info & Code */}
          <section className="bg-white/5 border border-white/10 rounded-[32px] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <span className="text-2xl font-black text-black">{user.nick.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-tight">Guardião Universal</p>
                  <p className="text-xl font-bold text-white">@{user.nick}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowQR(!showQR)}
                className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              >
                <QrIcon size={24} />
              </button>
            </div>

            {showQR && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-4 rounded-3xl flex flex-col items-center gap-3"
              >
                <QRCodeSVG value={shareUrl} size={180} />
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Escaneie para ver meu EcoScore</p>
              </motion.div>
            )}

            <div className="bg-black/30 rounded-2xl p-4 flex items-center justify-between mt-4 border border-white/5">
              <div className="flex items-center gap-3">
                <Key className="text-emerald-500" size={18} />
                <span className="text-xs font-bold text-white/60">CÓDIGO VIRTUAL</span>
              </div>
              <span className="text-sm font-mono font-bold text-white tracking-widest bg-white/10 py-1 px-3 rounded-lg">
                {user.codigoVirtual || "#000000"}
              </span>
            </div>
          </section>

          {/* Certificados */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="text-white/40" size={18} />
              <h2 className="text-sm font-extrabold tracking-widest text-white uppercase">Medalhas de Missão</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {modules.map((m) => {
                const done = isCategoryDone(m.id);
                return (
                  <div key={m.id} className={`p-4 rounded-3xl flex flex-col items-center text-center gap-3 transition-opacity ${done ? 'bg-white/10 border border-white/20' : 'bg-white/5 opacity-40 border border-white/5'}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${done ? 'bg-emerald-500/20 text-emerald-500' : 'bg-white/10 text-white/40'}`}>
                      {done ? <CheckCircle2 size={24} /> : <m.icon size={20} />}
                    </div>
                    <span className="text-[10px] font-bold text-white leading-tight">{m.label}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Dicas Armazenadas */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="text-white/40" size={18} />
              <h2 className="text-sm font-extrabold tracking-widest text-white uppercase">Protocolos</h2>
            </div>
            
            <div className="space-y-4">
              {modules.map((m) => {
                const tip = user.tips?.[m.id];
                if (!tip) return null;
                
                return (
                  <div key={m.id} className="bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                          <m.icon size={16} className="text-white/60" />
                        </div>
                        <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.2em]">{m.label}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    </div>
                    <div className="text-sm text-white/90 font-medium leading-relaxed italic border-l-2 border-white/10 pl-4 py-1">
                      <Markdown>{tip}</Markdown>
                    </div>
                  </div>
                );
              })}
              
              {(!user.tips || Object.keys(user.tips).length === 0) && (
                <div className="text-center p-8 border border-white/5 rounded-3xl bg-white/5">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Nenhuma dica gerada ainda.</p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </motion.div>
  );
};
