require("dotenv").config();

var bot = require('./bot');
require('./web')(bot);

const Telegraf = require('telegraf')

const botNew = new Telegraf(token)
botNew.start((ctx) => ctx.reply('Welcome'))
botNew.help((ctx) => ctx.reply('Send me a sticker'))
botNew.on('sticker', (ctx) => ctx.reply('👍'))
botNew.hears('hi', (ctx) => ctx.reply('Hey there'))
botNew.launch()