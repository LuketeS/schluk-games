# 🎮 Schluk Games

Um catálogo interativo de jogos que consome a **API RAWG**, exibindo informações como imagem, nome, gênero e nota de cada jogo.  
Desenvolvido com **HTML**, **CSS** e **JavaScript puro**, o projeto foi criado com foco em aprendizado de consumo de APIs, manipulação do DOM e organização de código em módulos.

<div align="center">
   
![Amostra do Projeto Schluk Games](https://github.com/user-attachments/assets/0ada4a16-687a-4772-aacd-af1dd3a61e76)

</div>
---

## 🚀 Funcionalidades

- Listagem de jogos com imagem, nome, gêneros e nota  
- Paginação com botão **"Carregar mais"**  
- Campo de **busca** para pesquisar jogos específicos  
- Layout responsivo  
- Tratamento de erros e carregamento dinâmico de conteúdo  

---

## 🧠 Aprendizados

Este projeto foi desenvolvido com o objetivo de praticar:
- Consumo de APIs REST com `fetch`  
- Manipulação de JSON  
- Criação e inserção dinâmica de elementos HTML via JavaScript  
- Organização do código em módulos (`import` / `export`)  
- Boas práticas com `try/catch` e `async/await`

---

## 🧩 Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **RAWG Video Games Database API**  

---

## ⚙️ Como executar o projeto localmente

1. **Clone o repositório:**
```bash
   git clone https://github.com/SEU_USUARIO/schluk-games.git
```  
2. **Acesse a pasta do repositório**
```bash
   cd schluk-games
```
3. **Adicione sua chave da API RAWG**
  Crie um arquivo chamado config.js dentro da pasta src
  Insira sua chave neste formato:
```bash
  export const RAWG_KEY = "SUA_CHAVE_AQUI";
```
4. **Abra o projeto no navegador**
Basta abrir o arquivo index.html
Ou, se preferir, utilize uma extensão de servidor local (ex: Live Server no VSCode)

## Estrutura de Pastas (resumo)

```bash
schluk-games/
│
├── index.html
├── styles/
│   ├── main.css
│   └── games-list.css
├── src/
│   ├── main.js
│   ├── gameCard.js
│   ├── rawg-api.js
│   └── config.js
└── README.md
```

## 🔑 Sobre a API RAWG

Este projeto utiliza a RAWG Video Games Database API
, que fornece informações detalhadas sobre milhares de jogos.
Para gerar sua própria chave de acesso, basta criar uma conta gratuita no site e registrar um novo aplicativo.

## 👨‍💻 Autor

Lucas de Santana Schmalz
📧 [lsschmalz@gmail.com]
🌐 [https://portfolio-lucas-de-santana-schmalzs-projects.vercel.app/]
