const Discord = require('discord.js');
const fs = require('fs');

exports.setStandardCommands = async (client) => {
    client.commands = new Discord.Collection();

    fs.readdir('src/commands/', (err, files) => {
        if (err) console.error(err);
        files.forEach(file => {
            const command = require(`../commands/${file}`);
            client.commands.set(command.name, command);
        });
    });
}
