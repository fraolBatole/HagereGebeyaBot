const express = require('express');
const bodyParser = require('body-parser');
const packageInfo = require('./package.json');
const Telegraf = require('telegraf')
const botNew = new Telegraf(token)
botNew.start((ctx) => ctx.reply('Welcome'))
botNew.help((ctx) => ctx.reply('Send me a sticker'))
botNew.on('sticker', (ctx) => ctx.reply('👍'))
botNew.hears('hi', (ctx) => ctx.reply('Hey there'))
botNew.launch()

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});

module.exports = (bot) => {
  app.post('/' + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
