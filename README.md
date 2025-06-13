💹 Crypto Market Tracker

🔍 Um aplicativo web moderno para acompanhar cotações de criptomoedas em tempo real, usando a API CoinCap.

<!-- Renomeie a imagem para "screenshot.png" ou atualize o nome conforme preferir -->
✨ Funcionalidades

    📊 Listagem das principais criptomoedas

    💵 Visualização de preço, volume e variação

    🔎 Busca por criptomoedas

    🔁 Carregamento paginado (infinite scroll)

    💰 Formatação de valores em dólar (USD)

    🟢🔴 Destaque para variações positivas (verde) e negativas (vermelho)

    📱 Design moderno e responsivo

📌 Pré-requisitos

    ✅ Node.js versão 16.x ou superior

    ✅ npm versão 8.x ou yarn

    🔑 Chave da API CoinCap (opcional – já incluída uma chave de exemplo)

🚀 Como Executar o Projeto

# Clone o repositório

    git clone https://github.com/seu-usuario/crypto-tracker.git
    cd crypto-tracker

# Instale as dependências

    npm install


# Inicie o servidor

    npm run dev


Acesse em: http://localhost:5173/

🛠 Tecnologias Utilizadas

Tecnologia	Descrição
⚛️ React.js	Framework frontend
🟦 TypeScript	Tipagem estática
🎨 CSS Modules	Estilização modular
🔗 React Router	Roteamento SPA
📡 CoinCap API v3	Dados das criptomoedas
🌐 Intl.NumberFormat	Formatação de valores
🔁 React Hooks	useState, useEffect

📂 Estrutura de Componentes

```
rc/
├── assets/               # Imagens e ícones
│   └── logo-removebg.png
│
├── components/           # Componentes reutilizáveis
│   ├── header/           # Cabeçalho da aplicação
│   │   ├── header.module.css
│   │   └── index.tsx
│   └── layout/           # Componente de layout geral
│       └── index.tsx
│
├── pages/                # Páginas principais
│   ├── home/             # Página de listagem de criptomoedas
│   │   ├── home.module.css
│   │   └── index.tsx
│   └── notfound/         # Página 404
│       └── index.tsx
│
├── App.tsx               # Componente principal com rotas
├── index.css             # Estilos globais
├── main.tsx              # Ponto de entrada da aplicação
├── router.tsx            # Definição de rotas
└── vite-env.d.ts         # Tipagens para Vite
```

🔧 Principais Funções

getData()

    🔄 Faz requisição à API CoinCap

    🧹 Formata os dados recebidos

    📥 Atualiza o estado das criptomoedas

handleSubmit()

    🔍 Captura a entrada de busca

    🧭 Redireciona para a moeda correspondente

handleGetMore()

    📈 Aumenta o offset para paginação

    ➕ Carrega mais moedas



Para utilizar sua própria chave da API [coincap.io](https://coincap.io/):

    1.Crie uma conta 
    2.vai ate pagina a dasdashboard
    3.Add New Key

    Crie um arquivo .env na raiz:

REACT_APP_COINCAP_API_KEY=sua_chave_aqui

Atualize o fetch para utilizar:

    process.env.REACT_APP_COINCAP_API_KEY

🤝 Como Contribuir

    🍴 Faça um fork

    🛠️ Crie sua branch:

git checkout -b feature/NomeDaFeature

💾 Commit:

git commit -m "feat: adiciona nova funcionalidade"

🚀 Push:

    git push origin feature/NomeDaFeature

    📬 Abra um Pull Request

📄 Licença

Este projeto está licenciado sob a licença MIT. Veja mais em LICENSE.

🧑‍💻 Feito com ❤️ por Vairtles 
