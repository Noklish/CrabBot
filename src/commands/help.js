const Discord = require('discord.js');

exports.name = "help"
exports.description = "get a full list of commands"

const generateCommandList = client => {
    let list = '';
    client.commands.forEach(command => {
        const line = `${command.name}: ${command.description}\n`;
        list = list + line;
    });

    return list;
}

exports.execute = async (args) => {
    args.message.reply(`Thanks for using CrabBot! Here's a full list of commands:\n${generateCommandList(args.client)}`);
}