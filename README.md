Afim de facilitar a organização e manutenção do código, foi definido um padrão para organização das pastas neste projeto.

→ \_assets: Contém a estilização global, icones, UI e Imagens; <br />
→ components: Todos os componentes globais do projeto; <br />
→ context: Armazena os contextos da aplicação; <br />
→ containers: Armazena os containers que se repetem na aplicação; <br />
→ helpers: Funções para formatação de datas, funções para formatação de números, etc; <br />
→ hooks: Custom hooks; <br />
→ pages: Armazena as páginas da aplicação; <br />
→ routes: Armazena as rotas da aplicação; <br />
→ services: Todos os acessos externos; <br />
→ interfaces: Armazena todas as interfaces globais da aplicaçao dentro de um arquivo index; <br />
→ redux: Vai armazenar cada features do estado global do reducer; <br />

Todos os componentes criados vão seguir uma mesma estrutura de organização:
→ index.tsx: Responsável por exportar o componente; <br />
→ interface.ts: Responsável por exportar as interfaces; <br />
→ style.ts: StyledComponents do componente; <br />

A pasta com as páginas vai seguir uma sequência lógica parecida com os demais componentes e estruturas
→ /components: Componentes que são utilizados apenas naquela páginas; <br />
→ index.tsx: Responsável por exportar a página; <br />
→ interface.ts: Responsável por exportar as interfaces que são utilizadas globalmente na página; <br />
→ style.ts: StyledComponents da página; <br />
