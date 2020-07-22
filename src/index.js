const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.settings = require('./settings.json');

client.on('ready', () => {
    require('./events/ready.js')(client);
});

client.on('message', message => {
    require('./events/message.js')(message, client);
});

client.login(auth.token);