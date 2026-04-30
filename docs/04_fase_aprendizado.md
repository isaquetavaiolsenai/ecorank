# Fase 4: Módulos de Aprendizado & Gamificação Base

## Objetivo da Fase
Expandir o conteúdo educacional do app através de fases desbloqueáveis e missões diárias.

## Tasks

### Task 4.1: Motor de Fluxo de Fases
* **O que mudará:** Lógica que gerencia o status `currentPhase` do usuário.
* **Necessita banco de dados (SQL):** Sim (Update `current_phase`).
* **Conexão com o Objetivo:** Estrutura de progressão.

### Task 4.2: Layout de Deck de Missões
* **O que mudará:** Novos cards que mostram a missão atual e o que falta para completar.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Clareza de objetivos.

### Task 4.3: Sistema de Recompensas de Score
* **O que mudará:** Usuário ganha XP ao finalizar pequenos textos educativos.
* **Necessita banco de dados (SQL):** Sim (Increment score).
* **Conexão com o Objetivo:** Gamificação intrínseca.

### Task 4.4: Injeção de Conteúdo via Markdown
* **O que mudará:** Renderização dinâmica das lições a partir de arquivos .md.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Agilidade na criação de conteúdo.

### Task 4.5: Sistema de Checkpoint
* **O que mudará:** Sincronização obrigatória com o banco ao finalizar uma fase.
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Segurança do progresso.

### Task 4.6: Animação de Desbloqueio de Nível
* **O que mudará:** Efeito visual de "fase liberada" com confetes e sons.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Satisfação do usuário.

### Task 4.7: Verificação de Pré-Requisitos
* **O que mudará:** Impedir que o usuário pule tarefas sem completar o diagnóstico.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Integridade pedagógica.

### Task 4.8: Cronômetro de Missão Diária
* **O que mudará:** Tarefas que expiram em 24h para incentivar o acesso diário.
* **Necessita banco de dados (SQL):** Sim (Coluna `expires_at`).
* **Conexão com o Objetivo:** Retenção.

### Task 4.9: Tutorial Interativo (Onboarding)
* **O que mudará:** Guia passo a passo nas primeiras telas do app.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Facilidade de uso.

### Task 4.10: Histórico de Conquistas
* **O que mudará:** Tela que lista tudo que o usuário já aprendeu.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Memória afetiva com o app.
