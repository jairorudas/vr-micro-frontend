# Teste Micro Frontend VR !

Nesse teste foi executado com as seguintes tecnologias

 - ReactJS
 - Vite
 - React Redux Toolkit 
 - PubSub Library (O compartilhamento de dados foi feito via Event Bus, arquitetura ideal para desacoplar dependências rigidas e ter maior flexibilidade)
 - Cypress para executar testes unitarios
 - Module Federation
 - Css Modules
 - Fetch nativo

# Como executar o projeto

- Clonar o projeto desde o seguinute [link](https://github.com/jairorudas/vr-micro-frontend.git), 
- após clonar entrar em cada um dos micro frontends e executar o comando `pnpm install` para instalar todas as dependencias (recomendo o uso no node acima da versão 18).
- para rodar e ver o projeto sendo executado, rodar o comando `pnpm build && pnpm preview` e abrir a url `localhost:5003` o projeto estará executado
- existe um projeto de nome **StaticServer** entrar na pasta e executar os comandos
	- `pnpm install && node serve`
Ele disponibiliza arquivos estaticos de variaveis css usados por todos os microfrontends e constantes de disparos de eventos.
Cada microfrontend é responsável por emitir alguns eventos e os outros microfrontend que tenham interesse em reagir a esses eventos só deverão "plugar / ouvir " os eventos emitidos.

## Executar os testes

- Executar o comando `pnpm cypress:open` em cada um dos microfrontend e abrira um browser.
- selecione o browser onde você deseja fazer o teste
- Clique encima de um dos arquivos de teste
- Os testes serão executados