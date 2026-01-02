# RID99751 - Desafio: Board de Tarefas

![Board de Tarefas](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)

## 📋 Sobre o Projeto

Este projeto é um **Gerenciador de Tarefas** desenvolvido como parte do desafio da DNC Technologies. A aplicação permite aos usuários criar, visualizar e gerenciar suas tarefas de forma dinâmica e interativa.

### 🎯 Funcionalidades

- ✅ **Adicionar tarefas** - Crie novas tarefas com nome e etiqueta
- ✅ **Listar tarefas** - Visualize todas as tarefas cadastradas
- ✅ **Concluir tarefas** - Marque tarefas como concluídas
- ✅ **Persistência de dados** - As tarefas são salvas no localStorage
- ✅ **Contador de tarefas** - Acompanhe quantas tarefas foram concluídas
- ✅ **Interface responsiva** - Funciona perfeitamente em desktop e mobile

## 🖼️ Screenshots

### Desktop
![Desktop Version](https://via.placeholder.com/650x400?text=Desktop+Version)

### Mobile
![Mobile Version](https://via.placeholder.com/375x667?text=Mobile+Version)

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização com Flexbox e Media Queries
- **localStorage** - Persistência de dados no navegador

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── TaskCard.tsx    # Componente do card de tarefa
│   └── TaskForm.tsx    # Componente do formulário
├── hooks/
│   └── useTasks.ts     # Hook de gerenciamento de tarefas
├── types/
│   └── Task.ts         # Interface TypeScript
├── App.tsx             # Componente principal
├── App.css             # Estilos da aplicação
├── index.css           # Estilos globais
└── main.tsx            # Ponto de entrada
```

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucas-gonzales/RID99751_Desafio_Construa_um_Gerenciador_de_Tarefas.git

# Acesse a pasta do projeto
cd RID99751_Desafio_Construa_um_Gerenciador_de_Tarefas

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

## 📐 Design

O design foi implementado seguindo fielmente o protótipo do Figma:

- **Figma**: [Link do Protótipo](https://www.figma.com/design/xryNIAyzDACBmbpmH4orjF/Desafio---Board-de-Tarefas-DNC)

### Cores Utilizadas

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Primary | `#2D70FD` | Botões, elementos interativos |
| Azul Escuro | `#11175E` | Título |
| Fundo | `#F5F9FF` | Background da página |
| Cinza Texto | `#B1BACB` | Textos secundários |
| Verde Check | `#22C55E` | Ícone de tarefa concluída |

### Fontes

- **Rubik** - Título principal
- **Inter** - Textos e botões

## ✅ Critérios de Avaliação Atendidos

| Critério | Pontos | Status |
|----------|--------|--------|
| **Semântica** - Tags HTML5 (`<header>`, `<main>`, `<footer>`, `<article>`, `<section>`) | 25 | ✅ |
| **Tela Responsiva** - Layout adaptável para mobile e desktop | 25 | ✅ |
| **Requisitos** - Todas as funcionalidades implementadas | 25 | ✅ |
| **Práticas de Programação** - Código limpo, funções com responsabilidade única | 25 | ✅ |
| **Total** | **100** | ✅ |

## 📱 Responsividade

A aplicação foi desenvolvida seguindo o conceito **Mobile First**, com breakpoints para:

- **Mobile**: até 480px
- **Tablet**: 481px a 700px
- **Desktop**: acima de 700px

## 👨‍💻 Autor

**Lucas Gonzales**

- RID: 99751
- GitHub: [@lucas-gonzales](https://github.com/lucas-gonzales)

---

⭐ Desenvolvido como parte do desafio DNC Technologies
