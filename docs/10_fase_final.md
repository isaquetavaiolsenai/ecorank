# Fase 10: Prestígio Final & QR Code Viral

## Objetivo da Fase
Consolidar a autoridade do usuário e criar o mecanismo de compartilhamento social massivo através de um QR Code que leva a um perfil público.

## Tasks

### Task 10.1: Motor de Geração de QR Code Estilizado
* **O que mudará:** Implementação de QR Code no perfil que aponta para `?share=nick`.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Visibilidade externa da marca EcoCheck.

### Task 10.2: Interface de Perfil Público (Shared View)
* **O que mudará:** Uma interface minimalista que estranhos veem ao escanear o código.
* **Necessita banco de dados (SQL):** Sim (Leitura pública permitida via RLS).
* **Conexão com o Objetivo:** Prova social e transparência de dados ecológicos.

### Task 10.3: Integração com Web Share API
* **O que mudará:** Botão nativo do navegador para enviar o link via WhatsApp/Instagram.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Viralização orgânica.

### Task 10.4: Sistema de Selos de Prestígio (Badges)
* **O que mudará:** Ícones especiais no QR Code dependendo do nível.
* **Necessita banco de dados (SQL):** Sim (Tabela `user_badges`).
* **Conexão com o Objetivo:** Gamificação avançada.

### Task 10.5: Cache de Imagem de Perfil para Compartilhamento
* **O que mudará:** Geração de um "OG Imagine" (card estático) para redes sociais.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Estética profissional no link compartilhado.

### Task 10.6: Registro de Escaneamentos (Analytics)
* **O que mudará:** Contador de quantas vezes o QR Code do usuário foi lido.
* **Necessita banco de dados (SQL):** Sim (Coluna `qr_scans` na tabela users).
* **Conexão com o Objetivo:** Medir influência do usuário.

### Task 10.7: Proteção de Dados Sensíveis no Compartilhamento
* **O que mudará:** Garantir que o `password` nunca vaze no link do QR Code.
* **Necessita banco de dados (SQL):** Não (Lógica de filtragem no frontend).
* **Conexão com o Objetivo:** Segurança de PII.

### Task 10.8: Sistema de Indicação via QR
* **O que mudará:** Se alguém baixar o app pelo QR de outro, ambos ganham pontos.
* **Necessita banco de dados (SQL):** Sim (Tabela de referrals).
* **Conexão com o Objetivo:** Crescimento de rede.

### Task 10.9: UI Final "Hall da Fama"
* **O que mudará:** Página especial listando apenas os usuários com QR Code validado.
* **Necessita banco de dados (SQL):** Sim (Query Complexa).
* **Conexão com o Objetivo:** Reconhecimento de elite.

### Task 10.10: Deploy Final de Versão Estável
* **O que mudará:** Migração total para produção e fechamento de ciclos de desenvolvimento.
* **Necessita banco de dados (SQL):** Não.
* **Conexão com o Objetivo:** Encerramento da jornada MVP.
