const Discord = require('discord.js');
const message = require('../events/message');

exports.name = "addSound";
exports.description = "Add a new sound to your soundboard!";

exports.execute = async (args) => {
    args.message.reply('This is a placeholder reply');
}