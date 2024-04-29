# Teste Micro Frontend VR !

Nesse teste foi executado com as seguintes tecnologias

 - ReactJS
 - Vite
 - React Redux Toolkit 
 - PubSub Library
 - Cypress para executar testes unitarios
 - Module Federation
 - Css Modules
 - Fetch nativo

# Como executar o projeto

- Clonar o projeto desde o seguinute [link](https://github.com/jairorudas/vr-micro-frontend.git), 
- após clonar entrar em cada um dos micro frontends e executar o comando `pnpm install` para instalar todas as dependencias (recomendo o uso no node acima da versão 18).
- para rodar e ver o projeto sendo executado, rodar o comando `pnpm build && pnpm preview` e abrir a url `localhost:5003` o projeto estará executado

## Executar os testes

- Executar o comando `pnpm cypress:open` em cada um dos microfrontend e abrira um browser.
- selecione o browser onde você deseja fazer o teste
- Clique encima de um dos arquivos de teste
- Os testes serão executados