/**
 * 
 * Arquivo: echoBot.js
 * Data: 09/06/2018
 * Descrição: Desenvolvimento de um Bot via Bot Emulator.
 * Author: Glaucia Lemos
 *
 */

const restify = require("restify");
const builder = require("botbuilder");

//Configuração do Server via Restify:
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(
    "%s Aplicação está executando na porta %s",
    server.name,
    server.url
  );
});

//Criação do chat connector para comunicar com o serviço do Bot Framework:
let connector = new builder.ChatConnector({
  appId: "",
  appPassword: ""
});

//Endpoint para executar as mensagens para os usuários via Bot Emulator:
server.post("/api/messages", connector.listen());

//Aqui entra os nossos diálogos:
let bot = new builder.UniversalBot(connector, (session) => {
  session.send("Você disse: %s", session.message.text);
});
