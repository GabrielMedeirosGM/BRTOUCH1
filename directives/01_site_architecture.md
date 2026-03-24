# Diretiva 01: Arquitetura do Site BrTouch

## Visão Geral
Este site atenderá a dois perfis distintos de usuários:
1. **Clientes:** Voltado para conversão, e-commerce, vitrine de produtos e fluxo de checkout completo.
2. **Gestão (Admin):** Sistema robusto para controle de inventário, relatórios de vendas, gestão de usuários e configurações da plataforma.

## Acessos e Rotas

### 1. Área do Cliente (Vitrine e Compra)
- **Rotas principais:**
  - `/`: Landing page de alta conversão.
  - `/produtos`: Catálogo de produtos com filtros.
  - `/produto/[id]`: Detalhes do produto.
  - `/carrinho`: Revisão de itens.
  - `/checkout`: Tela completa de pagamento e finalização de compra.
- **Design:** Foco em UI premium, carregamento rápido e microinterações (React/Next.js).

### 2. Área de Gestão (Dashboard Administrativo)
- **Rotas principais:**
  - `/admin/login`: Autenticação restrita.
  - `/admin/dashboard`: Visão geral de métricas.
  - `/admin/produtos`: CRUD de produtos.
  - `/admin/pedidos`: Gerenciamento e status de entregas/pedidos.
- **Design:** Foco em usabilidade, tabelas de dados ricas e formulários eficientes.

## Integração com doeframework
- Toda lógica complexa de processamento de dados (ex: geração de relatórios, rotinas de banco de dados pesadas, integração com APIs de fornecedores) deve ser encapsulada em scripts na pasta `execution/`.
- O Frontend servirá como a camada de apresentação, interagindo com o Backend/executors via APIs (REST ou chamadas diretas dependendo do backend escolhido).
