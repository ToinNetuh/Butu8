const cotacao = require('./cotacao');
const xinga = require('./xinga');
const eununca = require('./eununca');
const covid = require('./covid');
const sticker = require('./sticker')
const commands = {
  cotacao,
  xinga,
  eununca,
  covid,
  sticker,
};

module.exports = msg => {
  const msgBody = msg.body;
  let tokens = msgBody.split(' ');
  let command = tokens.shift();

  if (command.startsWith('!')) {
    command = command.substring(1);
    commands[command](msg, tokens);
  }
};
