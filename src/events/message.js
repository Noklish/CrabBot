const Discord = require('discord.js');

module.exports = async (message, client) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    message.reply('Thanks for adding me to your server!');
}
