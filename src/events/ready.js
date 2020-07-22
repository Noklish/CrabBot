const Discord = require('discord.js');

module.exports = async (client) => {
    await setTimeout(() => {}, 1000);

    // up-to-date info
    client.appInfo = await client.fetchApplication();
    setInterval(async () => {
        client.appInfo = await client.fetchApplication();
    }, 300000);

    client.user.setActivity(`type ${client.settings.prefix}help for command list`);

    console.log('Deployed on new server');
}
