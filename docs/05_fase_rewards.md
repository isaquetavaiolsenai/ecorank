# Fase 5: Gamificação Avançada & Rewards System

## Objetivo da Fase
Implementar sistemas complexos de recompensas para manter o engajamento a longo prazo.

## Tasks

### Task 5.1: Criação da Tabela de Badges (Medalhas)
* **O que mudará:** Nova estrutura para armazenar conquistas únicas dos usuários.
* **Necessita banco de dados (SQL):** Sim (Tabela `badges`).
* **Conexão com o Objetivo:** Reconhecimento de esforço.

### Task 5.2: Lógica de Conquistas Automáticas
* **O que mudará:** Triggers que liberam medalhas após X dias de uso.
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Descoberta de recompensas.

### Task 5.3: Sistema de Níveis de Prestígio (Eco-Level)
* **O que mudará:** Cálculo de nível baseado no score acumulado (ex: Nível 10 - Guardião).
* **Necessita banco de dados (SQL):** Não (Cálculo em runtime).
* **Conexão com o Objetivo:** Hierarquia social.

### Task 5.4: Galeria de Troféus no Perfil
* **O que mudará:** Espaço dedicado para exibir as medalhas conquistadas.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Exposição de sucesso.

### Task 5.5: Sistema de Streak (Sequência)
* **O que mudará:** Contador de quantos dias seguidos o usuário acessou o app.
* **Necessita banco de dados (SQL):** Sim (Coluna `last_streak`).
* **Conexão com o Objetivo:** Hábito.

### Task 5.6: Bônus de Experiência Temporário
* **O que mudará:** Dias de "Pontos em Dobro" para eventos ambientais (ex: Dia da Árvore).
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Engajamento sazonal.

### Task 5.7: Notificações de Conquista Próxima
* **O que mudará:** "Você está a 10 pontos de ganhar a medalha X!".
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Motivação.

### Task 5.8: Shareability de Badge
* **O que mudará:** Botão para compartilhar apenas uma medalha específica.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Divulgação social.

### Task 5.9: Sistema de Quiz Rápido (Eco-Blast)
* **O que mudará:** Perguntas de sim/não que dão pontos rápidos.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Dinamismo.

### Task 5.10: Balanceamento de Pontos
* **O que mudará:** Ajuste de valores para evitar inflação de pontos no ranking.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Equidade competitiva.
