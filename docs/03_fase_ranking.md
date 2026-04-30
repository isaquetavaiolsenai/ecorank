# Fase 3: Lógica de Ranking & Real-time

## Objetivo da Fase
Transformar o EcoCheck em uma plataforma competitiva e social através de um ranking global atualizado em tempo real.

## Tasks

### Task 3.1: Query de Ranking de Alta Performance
* **O que mudará:** Criação de uma view no SQL que ordena usuários por score decrescente.
* **Necessita banco de dados (SQL):** Sim (View `global_ranking`).
* **Conexão com o Objetivo:** Base da competitividade.

### Task 3.2: Integração com Supabase Realtime Channels
* **O que mudará:** O ranking se atualiza automaticamente sem necessidade de refresh.
* **Necessita banco de dados (SQL):** Não (Configuração de canais no client).
* **Conexão com o Objetivo:** Experiência viva.

### Task 3.3: Diferenciação Visual de "Top 3"
* **O que mudará:** Adição de medalhas de ouro, prata e bronze no topo da lista.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Incentivo ao prestígio.

### Task 3.4: Sistema de Filtros Personalizados
* **O que mudará:** Buscar amigos pelo nick diretamente na tela de ranking.
* **Necessita banco de dados (SQL):** Não (Filtro no frontend).
* **Conexão com o Objetivo:** Localização de conhecidos.

### Task 3.5: Paginação de Ranking (Infinity Scroll)
* **O que mudará:** Carregar apenas os primeiros 50 usuários por vez.
* **Necessita banco de dados (SQL):** Sim (Limit/Offset).
* **Conexão com o Objetivo:** Performance em escala.

### Task 3.6: Formatação de Score Amigável
* **O que mudará:** Converter scores brutos para abreviações (ex: 1.2k pontos).
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Clareza visual.

### Task 3.7: Atualização Automática de Posição
* **O que mudará:** Mostrar "Subiu de posição!" quando o usuário ganhar pontos.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Reforço positivo.

### Task 3.8: Cache de Ranking Local
* **O que mudará:** Armazenar o último ranking baixado para carregamento instantâneo.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** UX Offline-first.

### Task 3.9: Sistema de Tendências (Subindo/Descendo)
* **O que mudará:** Mostrar ícones de setas indicando variação de posição.
* **Necessita banco de dados (SQL):** Sim (Coluna `last_pos`).
* **Conexão com o Objetivo:** Dinamismo estatístico.

### Task 3.10: Teste de Stress de Concorrência
* **O que mudará:** Simular 1000 usuários enviando scores simultaneamente.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Robustez técnica.
