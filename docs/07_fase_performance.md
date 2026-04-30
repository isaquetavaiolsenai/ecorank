# Fase 7: Otimização de Performance & Cache

## Objetivo da Fase
Garantir que o EcoCheck seja extremamente rápido e eficiente, mesmo em dispositivos de baixo custo.

## Tasks

### Task 7.1: Implementação de React Query (TanStack Query)
* **O que mudará:** Gerenciamento centralizado de estado vindo do Supabase com cache.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Velocidade de interface.

### Task 7.2: Minificação de Assets e Imagens
* **O que mudará:** Comprimir fotos de conquistas para reduzir o consumo de dados.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Economia de banda.

### Task 7.3: Lazy Loading de Componentes Pesados
* **O que mudará:** O Ranking só é carregado quando o usuário clica na aba.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Tempo de inicialização (TBT).

### Task 7.4: Configuração de PWA (Progressive Web App)
* **O que mudará:** Possibilidade de instalar o app na tela inicial e funcionar offline.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Experiência nativa.

### Task 7.5: Otimização de Índices no Postgres
* **O que mudará:** Adição de B-tree indexes em colunas frequentemente filtradas.
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Velocidade de Query.

### Task 7.6: Uso de Skeleton Screens
* **O que mudará:** Mostrar placeholders bonitos enquanto os dados carregam.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Percepção de rapidez.

### Task 7.7: Bundle Analysis & Tree Shaking
* **O que mudará:** Remoção de bibliotecas não utilizadas no build final.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Tamanho do App.

### Task 7.8: Service Worker para Atualizações em Background
* **O que mudará:** Sincronizar scores acumulados offline assim que a rede voltar.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Resiliência.

### Task 7.9: Normalização do Estado Global (Zustand)
* **O que mudará:** Migrar o `user` do `useState` para um store global eficiente.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Manutenibilidade.

### Task 7.10: Monitoramento de Erros via Sentry
* **O que mudará:** Rastreio automático de bugs em tempo real na mão do usuário.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Estabilidade.
