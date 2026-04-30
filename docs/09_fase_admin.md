# Fase 9: Administração & Painel de Controle

## Objetivo da Fase
Garantir a gestão eficiente da plataforma por parte dos administradores.

## Tasks

### Task 9.1: Motor de Agendamento de Desafios
* **O que mudará:** Painel administrativo para criar novas tarefas semanais.
* **Necessita banco de dados (SQL):** Sim (Tabela `challenges_admin`).
* **Conexão com o Objetivo:** Curadoria de conteúdo.

### Task 9.2: Gestão de Usuários (Ban/Unban)
* **O que mudará:** Ferramenta para suspender contas que violam os termos.
* **Necessita banco de dados (SQL):** Sim (Coluna `is_banned`).
* **Conexão com o Objetivo:** Segurança da plataforma.

### Task 9.3: Central de Logs de Segurança
* **O que mudará:** Monitoramento de acessos e tentativas de invasão.
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Proteção de dados.

### Task 9.4: FAQ Injetada Direto na View
* **O que mudará:** Base de conhecimento administrável que o usuário acessa no Help Center.
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Redução de suporte manual.

### Task 9.5: Chat Bot Defletor Inicial (Zap Bot Hook)
* **O que mudará:** Integração com serviços de bot para triagem de suporte.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Eficiência de atendimento.

### Task 9.6: Dashboard de Métricas de Retenção
* **O que mudará:** Gráficos para admins verem o DAU/MAU (Daily/Monthly Active Users).
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Tomada de decisão.

### Task 9.7: Notificação Inter-Staff (Bell Notification)
* **O que mudará:** Alertas para o time quando um Report crítico é feito.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Prontidão.

### Task 9.8: Gerador de Relatórios Mensais PDF
* **O que mudará:** Exportação de dados de impacto ambiental da comunidade para marketing.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Divulgação de impacto.

### Task 9.9: Backup Automatizado do Firestore/Postgres
* **O que mudará:** Scripts de cron que garantem cópias de segurança diárias.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Disponibilidade de dados.

### Task 9.10: Sistema de Feature Flags (Toggle)
* **O que mudará:** Capacidade de ligar/desligar funções sem redeploy.
* **Necessita banco de dados (SQL):** Sim.
* **Conexão com o Objetivo:** Controle de rollout.
