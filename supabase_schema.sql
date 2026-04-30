-- Tabela de usuários para o ecocheck (Ex-EcoClima)
CREATE TABLE IF NOT EXISTS public.ecorank_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nick TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    score FLOAT DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE,
    current_phase INT DEFAULT 1,
    current_task INT DEFAULT 1,
    codigo_virtual TEXT, -- Formato Hexadecimal ex: #227736
    last_feedback TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- COMANDO PARA ATUALIZAR TABELA EXISTENTE:
-- Execute isso no SQL Editor do Supabase se a coluna não aparecer:
ALTER TABLE public.ecorank_users ADD COLUMN IF NOT EXISTS codigo_virtual TEXT;
ALTER TABLE public.ecorank_users ADD COLUMN IF NOT EXISTS current_phase INT DEFAULT 1;
ALTER TABLE public.ecorank_users ADD COLUMN IF NOT EXISTS current_task INT DEFAULT 1;

-- Ativar RLS
ALTER TABLE public.ecorank_users ENABLE ROW LEVEL SECURITY;

-- Exemplo de política de acesso público (CUIDADO EM PRODUÇÃO)
DROP POLICY IF EXISTS "Acesso Público" ON public.ecorank_users;
CREATE POLICY "Acesso Público" ON public.ecorank_users
    FOR ALL
    USING (true)
    WITH CHECK (true);
