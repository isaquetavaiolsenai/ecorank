# Fase 1: Arquitetura de Referência & Core de Usuário

## Objetivo da Fase
Estabelecer a fundação absoluta de dados da plataforma EcoCheck, focando na integridade da tabela de usuários.

## Tasks

### Task 1.1: Refatoração da Tabela de Usuários Profile
* **O que mudará:** Criaremos uma camada lógica para gerenciar `nick` e `password` de forma atômica.
* **Necessita banco de dados (SQL):** Sim (Criação de índices para busca rápida por nick).
* **Conexão com o Objetivo:** É o pilar de contato inicial.

### Task 1.2: Sistema de Regras (RBAC - Role Based Access Control)
* **O que mudará:** Inserção do nível de acesso (`admin` vs `user`) para gestão de desafios.
* **Necessita banco de dados (SQL):** Sim (Adição de coluna `role`).
* **Conexão com o Objetivo:** Garante que usuários padrão não burlem o sistema.

### Task 1.3: Normalização de Estrutura de Diagnóstico
* **O que mudará:** Migrar o JSON de respostas para uma tabela relacional se o volume crescer.
* **Necessita banco de dados (SQL):** Não imediato, mas planejado.
* **Conexão com o Objetivo:** Melhora o carregamento do perfil.

### Task 1.4: Persistência de Estado de Login
* **O que mudará:** Implementação de JWT via Headers no Supabase.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Segurança na sessão.

### Task 1.5: Sistema de Gestão de Contato Rápido
* **O que mudará:** Painel de ajuda injetado diretamente no footer.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Suporte ao usuário novato.

### Task 1.6: Trigger Mágico de Deleção em Cascata
* **O que mudará:** Garantir que ao excluir um perfil, o progresso seja limpo.
* **Necessita banco de dados (SQL):** Sim (Trigger function).
* **Conexão com o Objetivo:** Integridade referencial.

### Task 1.7: Mockup de Interface "Neo-Eco"
* **O que mudará:** Aplicação do cinza carvão e verde neon no formulário.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Engajamento visual.

### Task 1.8: Implementação de Lógica de Pontuação Inicial
* **O que mudará:** Scripts que calculam o score base após o diagnóstico.
* **Necessita banco de dados (SQL):** Sim (Update score).
* **Conexão com o Objetivo:** Feedback imediato de desempenho.

### Task 1.9: Validação de Nick Unificado
* **O que mudará:** Verificação em tempo real se o nome já existe.
* **Necessita banco de dados (SQL):** Sim (Query SELECT).
* **Conexão com o Objetivo:** Unicidade de identidade.

### Task 1.10: Documentação Técnica da API de Autenticação
* **O que mudará:** Escrita do guia de conexão React -> Supabase.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Facilidade de manutenção.
