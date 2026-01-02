# Board de Tarefas

Gerenciador de tarefas desenvolvido para o desafio de JavaScript da DNC.

## Sobre

Aplicação web para gerenciamento de tarefas com funcionalidades de adicionar, concluir e listar tarefas. Os dados são persistidos no localStorage do navegador.

## Tecnologias

- React 18
- TypeScript
- Vite
- CSS3
- Google Fonts (Rubik, Inter)

## Como usar

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/lucas-gonzales/RID99751_Desafio_Construa_um_Gerenciador_de_Tarefas.git
cd RID99751_Desafio_Construa_um_Gerenciador_de_Tarefas
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Estrutura

```
src/
├── components/
│   ├── TaskCard.tsx
│   └── TaskForm.tsx
├── hooks/
│   └── useTasks.ts
├── types/
│   └── Task.ts
├── App.tsx
├── App.css
└── main.tsx
```

## Layout

O design foi baseado no protótipo do [Figma](https://www.figma.com/design/xryNIAyzDACBmbpmH4orjF/Desafio---Board-de-Tarefas-DNC).

**Desktop:** Inputs lado a lado, cards horizontais com botão à direita

**Mobile:** Layout em coluna única, inputs e botões empilhados

## Funcionalidades

- Adicionar tarefas com nome e etiqueta
- Marcar tarefas como concluídas
- Contador de tarefas concluídas
- Persistência no localStorage

## Autor

Lucas Gonzales
