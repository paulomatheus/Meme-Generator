# Meme Generator
## Membro

* [Paulo Matheus de Araujo Silva, 1311]
## Descrição

Código de um gerador de meme para o AV2 de tópicos avançados do Inatel.
## Dependências

-   [Mongoose](https://mongoosejs.com/): Utilizado para comunicação com o banco de dados;
-   [Restify](http://restify.com/): Utilizado para criação e mapeamento das rotas junto ao [restify-router](https://github.com/ukayani/restify-router);
-   [Dotenv](https://github.com/motdotla/dotenv): Utilizado para criação e uso de variáveis de ambiente;
-   [Nodemon](https://nodemon.io/): Utilizado apenas em desenvolvimento para rodar o servidor.
-   [Axios](https://github.com/axios/axios): Utilizado para requisições HTTP/HTTPS;

## Configurações

No início é necessário configurar o arquivo `.env`. Use o arquivo [.env.template](.env.template) para configurar. A seguir serão descritos cada variável presente.

-   PORTA: Servidor será executado através dessa porta. Caso uma porta diferente de **5000**, mude também o campo **EXPOSE** no arquivo [Dockerfile](Dockerfile);
-   DB_URL: URL do banco de dados;
-   DB_NAME: Nome do banco de dados;
-   AUTH_URL: URL do servidor de autenticação para rotas `login` e `validateToken`.

## Criar uma imagem Docker

Para criar a imagem Docker é necessário executar o comando `docker build -t {image_name} .` na pasta raíz do projeto, na qual `{image_name}` é o nome da imagem que será criada.

## Executar o projeto

Necessário executar o comando `docker run -d --name {container_name} -p {local_port}:{exposed_port} {image_name}`, nos quais `container_name` é o nome do container que será criado, `local_port` é a porta que irá executar o core localmente, `exposed_port` é a porta que é exposta pelo docker \(campo **EXPOSE** no [Dockerfile](Dockerfile)) e `image_name` é a imagem que foi gerada no passo de [criação da imagem Docker](#como-criar-a-imagem-docker).

Para parar a execução, execute o comando `docker stop {container_name}`.

Caso a versão containerizada não seja utilizada, execute o comando `npm run start`.

