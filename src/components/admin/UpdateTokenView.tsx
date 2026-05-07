import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Key, Save, ArrowLeft } from "lucide-react";
import { supabase } from "../../lib/supabase";

export function UpdateTokenView() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    try {
      const { data, error } = await supabase
        .from("ecorank_config")
        .select("gemini_token")
        .eq("id", 1)
        .maybeSingle();
      
      if (data && !error) {
        setToken(data.gemini_token || "");
      }
    } catch (err) {
      console.error("Erro ao buscar token:", err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const { data: existingData } = await supabase
        .from("ecorank_config")
        .select("id")
        .eq("id", 1)
        .maybeSingle();

      if (existingData) {
        const { error } = await supabase
          .from("ecorank_config")
          .update({ gemini_token: token })
          .eq("id", 1);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("ecorank_config")
          .insert([{ id: 1, gemini_token: token }]);
        if (error) throw error;
      }
      
      setMessage("Token atualizado com sucesso!");
    } catch (err: any) {
      console.error("Erro ao salvar:", err);
      setMessage("Erro ao salvar token: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col p-6">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate("/")}
          className="p-2 bg-zinc-900 rounded-full text-white"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Key className="text-green-500" />
          Configurar Token Gemini
        </h1>
      </div>

      <div className="max-w-md w-full mx-auto bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <div>
            <label className="block text-zinc-400 mb-2">Token da API Gemini</label>
            <input 
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-green-500 focus:outline-none"
              placeholder="Insira sua API Key aqui..."
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            <Save size={20} />
            {isLoading ? "Salvando..." : "Salvar Token"}
          </button>
        </form>
        
        {message && (
          <div className={`mt-4 p-3 rounded-xl ${message.includes('Erro') ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
