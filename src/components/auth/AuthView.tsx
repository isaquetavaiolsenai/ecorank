import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/EcoButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthViewProps {
  authStep: "NICK" | "LOGIN" | "SIGNUP";
  nick: string;
  setNick: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  authError: string;
  isCheckingNick: boolean;
  handleCheckNick: (e: React.FormEvent) => void;
  handleAuth: (e: React.FormEvent) => void;
  setAuthStep: (v: "NICK" | "LOGIN" | "SIGNUP") => void;
}

export const AuthView = ({
  authStep,
  nick,
  setNick,
  password,
  setPassword,
  authError,
  isCheckingNick,
  handleCheckNick,
  handleAuth,
  setAuthStep
}: AuthViewProps) => {
  return (
    <motion.div 
      key="view-auth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex items-center justify-center bg-[#000000]"
    >
      <div className="app-container overflow-hidden flex flex-col bg-black text-white">
        <div className="flex-1 px-8 flex flex-col justify-center space-y-10">
          <header className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transform -rotate-12 mb-6">
               <TrendingUp size={24} className="text-black" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-none">
              {authStep === "NICK" ? "Bem-vindo ao EcoRank" : "Identifique sua Conta"}
            </h1>
            <p className="text-white/40 text-sm font-medium leading-relaxed">
              A plataforma definitiva para diagnósticos de cultura e ESG 2026.
            </p>
          </header>

          <AnimatePresence mode="wait">
            {authStep === "NICK" && (
              <motion.form 
                key="nick-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleCheckNick} 
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label htmlFor="nick" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 ml-1">Nickname</Label>
                  <Input 
                    id="nick" 
                    placeholder="seu_nome" 
                    className="h-16 px-6 bg-white/5 border-white/10 focus:bg-white/10 transition-all rounded-full text-base font-medium placeholder:text-white/10"
                    value={nick}
                    onChange={e => setNick(e.target.value)}
                    required
                  />
                </div>
                {authError && (
                  <p className="text-red-500 text-xs font-bold text-center">{authError}</p>
                )}
                <Button 
                  type="submit" 
                  disabled={isCheckingNick}
                  className="w-full h-16 bg-white text-black text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-white/90 transition-all border-none"
                >
                  {isCheckingNick ? "Validando..." : "Continuar"}
                </Button>
              </motion.form>
            )}

            {(authStep === "LOGIN" || authStep === "SIGNUP") && (
              <motion.form 
                key="password-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleAuth} 
                className="space-y-4"
              >
                <div className="bg-white/5 p-6 rounded-[32px] border border-white/10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-black">
                      {nick.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">@{nick}</p>
                      <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest leading-none">
                        {authStep === "LOGIN" ? "Login Requirido" : "Novo Cadastro"}
                      </p>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setAuthStep("NICK")}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ArrowLeft size={14} />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <Input 
                      type="password" 
                      placeholder="Senha" 
                      className="h-14 px-6 bg-white/10 border-transparent focus:border-white/20 transition-all rounded-2xl text-sm"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {authError && (
                  <p className="text-red-500 text-xs font-bold text-center">{authError}</p>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-16 bg-white text-black text-[11px] font-extrabold uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-white/90 transition-all border-none"
                >
                  {authStep === "LOGIN" ? "Entrar na Conta" : "Criar Minha Conta"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
