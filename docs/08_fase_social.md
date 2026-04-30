# Fase 8: Social Links & Interação entre Usuários

## Objetivo da Fase
Criar o senso de comunidade através de ações colaborativas e visualização do perfil alheio.

## Tasks

### Task 8.1: Página de Perfil de Terceiros
* **O que mudará:** Visualizar o perfil de qualquer usuário clicando no ranking.
* **Necessita banco de dados (SQL):** Não (Apenas nova view).
* **Conexão com o Objetivo:** Conexão interpessoal.

### Task 8.2: Sistema de "Dê um Eco-Up" (Like)
* **O que mudará:** Usuários podem curtir o progresso um do outro.
* **Necessita banco de dados (SQL):** Sim (Tabela `likes`).
* **Conexão com o Objetivo:** Validação social recíproca.

### Task 8.3: Feed de Atividade Global
* **O que mudará:** Lista temporal de conquistas recentes de todos os usuários.
* **Necessita banco de dados (SQL):** Sim (View `global_feed`).
* **Conexão com o Objetivo:** Inspiração coletiva.

### Task 8.4: Desafios Colaborativos (Time-Based)
* **O que mudará:** Missões onde todos devem atingir um score somado (ex: Plantar 1k árvores).
* **Necessita banco de dados (SQL):** Sim (Tabela `global_goals`).
* **Conexão com o Objetivo:** União por causas.

### Task 8.5: Sistema de Comentários em Dicas
* **O que mudará:** Usuários podem comentar se uma dica funcionou para eles.
* **Necessita banco de dados (SQL):** Sim (Tabela `comments`).
* **Conexão com o Objetivo:** Troca de experiências.

### Task 8.6: Denúncia de Comportamento Inadequado
* **O que mudará:** Botão para reportar nicks ou comentários ofensivos.
* **Necessita banco de dados (SQL):** Sim (Tabela `reports`).
* **Conexão com o Objetivo:** Ambiente saudável.

### Task 8.7: Integração com Redes Sociais Existentes
* **O que mudará:** Botões para seguir o perfil do usuário fora do app.
* **Necessita banco de dados (SQL):** Sim (Colunas `social_links`).
* **Conexão com o Objetivo:** Networking.

### Task 8.8: "Vizinhança Eco": Busca por Localização
* **O que mudará:** Ver usuários próximos geograficamente para mutirões reais.
* **Necessita banco de dados (SQL):** Sim (Coluna `location`).
* **Conexão com o Objetivo:** Ação comunitária física.

### Task 8.9: Sistema de Grupos (Clãs)
* **O que mudará:** Criação de grupos de amigos com ranking próprio.
* **Necessita banco de dados (SQL):** Sim (Tabelas `groups` e `group_members`).
* **Conexão com o Objetivo:** Micro-comunidades.

### Task 8.10: Chat Privado Básico
* **O que mudará:** Troca de mensagens diretas entre usuários.
* **Necessita banco de dados (SQL):** Sim (Tabela `messages`).
* **Conexão com o Objetivo:** Colaboração direta.
