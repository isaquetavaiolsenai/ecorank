import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Award, Key, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { UserData } from "../../types";
import Markdown from "react-markdown";
import { CATEGORIES } from "../../constants";

export const PublicProfileView = () => {
  const { nick } = useParams<{ nick: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!nick) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('ecorank_users')
          .select('*')
          .eq('nick', nick)
          .single();

        if (error) throw error;
        if (!data) throw new Error("Perfil não encontrado");

        setProfile({
          nick: data.nick,
          score: data.score || 0,
          completed: data.completed || false,
          lastFeedback: data.last_feedback,
          codigoVirtual: data.codigo_virtual,
          tips: data.tips || {},
        });
      } catch (err: any) {
        console.error("Erro ao caraleir perfil público:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [nick]);

  if (loading) {
    return (
      <div className="w-full h-full bg-background flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-stone-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-black uppercase tracking-widest text-foreground/40">Autenticando Credenciais EcoRank...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="w-full h-full bg-background flex flex-col items-center justify-center p-8 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
           <ShieldCheck size={40} />
        </div>
        <div className="space-y-2">
            <h2 className="text-xl font-black text-foreground uppercase tracking-tight">Acesso Negado</h2>
            <p className="text-sm text-foreground/60">O perfil "@{nick}" não foi encontrado ou ainda não concluiu sua jornada.</p>
        </div>
        <button 
          onClick={() => navigate("/")}
          className="bg-stone-accent text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-background relative"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none fixed" />
      
      <div className="app-container flex flex-col relative z-10 pb-32">
        <header className="px-6 pt-safe pb-6 border-b border-white/5 flex items-center justify-between">
           <button onClick={() => navigate("/")} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <ArrowLeft size={18} className="text-foreground" />
           </button>
           <h1 className="text-xl font-extrabold tracking-tight text-foreground">Perfil EcoRank</h1>
           <div className="w-10" /> {/* Spacer */}
        </header>

        <main className="p-6 space-y-8">
           <section className="bg-card-bg/60 border border-white/5 rounded-[40px] p-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-stone-accent/[0.05] rounded-full -mr-32 -mt-32 blur-[100px]" />
              
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <div className="w-28 h-28 rounded-full border-2 border-stone-accent flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(3,85,63,0.3)]">
                   <div className="w-full h-full rounded-full bg-stone-accent/10 flex items-center justify-center text-5xl font-black text-stone-accent">
                      {profile.nick.charAt(0).toUpperCase()}
                   </div>
                </div>
                
                <div className="space-y-1">
                   <h2 className="text-3xl font-black text-white tracking-tighter leading-[0.8] mb-1 italic">@{profile.nick}</h2>
                   <div className="flex items-center justify-center gap-2 text-stone-accent/60">
                      <span className="w-1 h-1 rounded-full bg-stone-accent" />
                      <p className="text-[10px] font-black uppercase tracking-[0.25em]">Protocolo Brasil-ESG</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full pt-4">
                   <div className="bg-black/50 rounded-[32px] p-5 border border-white/5 flex flex-col gap-1 items-center justify-center backdrop-blur-sm">
                      <p className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">EcoScore Total</p>
                      <p className="text-3xl font-black text-stone-accent tracking-tighter">{profile.score}</p>
                   </div>
                   <div className="bg-black/50 rounded-[32px] p-5 border border-white/5 flex flex-col gap-1 items-center justify-center backdrop-blur-sm">
                      <p className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em] mb-1">Status Global</p>
                      <p className="text-xl font-black text-white uppercase tracking-tighter leading-none">Guardião</p>
                   </div>
                </div>
              </div>
           </section>

           {/* Full Feedback Report */}
           {profile.lastFeedback && (
             <section className="space-y-4">
                <div className="flex items-center gap-2 px-2">
                   <ShieldCheck className="text-stone-accent" size={18} />
                   <h2 className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">Relatório de Diagnóstico AI</h2>
                </div>
                <div className="bg-card-bg border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1.5 h-full bg-stone-accent" />
                   <div className="markdown-body">
                      <Markdown>{profile.lastFeedback}</Markdown>
                   </div>
                </div>
             </section>
           )}

           <div className="bg-black/30 rounded-2xl p-4 flex items-center justify-between border border-white/5 relative z-10 hidden">
              <div className="flex items-center gap-3">
                <Key className="text-stone-accent" size={18} />
                <span className="text-[9px] font-bold text-foreground/60 uppercase tracking-widest leading-none">AUTENTICADOR VIRTUAL</span>
              </div>
              <span className="text-xs font-mono font-bold text-stone-accent tracking-widest bg-stone-accent/10 py-1 px-3 rounded-lg border border-stone-accent/20">
                {profile.codigoVirtual || "#VERIFIED"}
              </span>
            </div>
        </main>
      </div>
    </motion.div>
  );
};
