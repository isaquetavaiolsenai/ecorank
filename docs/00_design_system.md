# Design System Architecture & Persistência de Componentes

## Objetivo da Fase
Estabelecer a identidade visual "Eco-Modern" do EcoCheck e garantir uma estrutura de UI escalável e persistente.

## 1. Análise Ultra Complexa do Sistema Visual
A interface requer uma estética de "Neo-Luxury Dark Mode" aplicada ao contexto ambiental.

## 2. Desktop (PC) Architecture
Na arquitetura Desktop, o espaço abundante deve ser aproveitado para dashboards informativos.

### 2.1. Layout & Grid
* **Max-Width:** O container principal deve ter `max-w-7xl`.
* **Sidebar Persistente:** Painéis como filtros de progresso.
* **Bento Grid Expansion:** Nas galerias de desafios e diagnósticos.

### 2.2. Componentes Desktop Específicos
* **Mega Menu:** Navegação superior que, ao passar o mouse, revela subpastas.
* **Inspeção de Produto Avançada:** O modal de detalhes de tarefa deve ser flutuante.

## 3. Mobile Architecture
Na arquitetura Mobile, a prioridade absoluta é a zona de alcance do polegar.

### 3.1. Navegação & Interação
* **Bottom Navigation Persistente:** A barra inferior permite troca rápida entre Dashboard e Ranking.
* **Gesto de Swipe:** Transições suaves entre cards de tarefa.

### 3.2. Estrutura Visual & Modais
* **Modais em Bottom Sheet:** Ao invés de modais centralizados.
* **Visualização de Fotos:** Horizontal Snap para galeria de evidências.
