const Discord = require('discord.js');

module.exports = async (message, client) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    const msgText = message.content;
    
    if (!msgText.startsWith(client.settings.prefix)) return;

    const msgArgs = msgText.split(' ');
    const command = client.commands.find(c => c.name === msgArgs[1]);
    const args = {
        client,
        message,
        msgArgs
    };

    if (command) {
        command.execute(args);
    }
}
