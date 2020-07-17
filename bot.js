const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '...') {
    	message.reply('...');
  	}
});

client.on('message', message => {
    if (message.content === 'xd') {
    	message.reply('...');
  	}
});

client.on('message', message => {
    if (message.member.roles.find(role => role.name === "teszt")){
        user = message.member
        const guild = client.guilds.get("733759129511919717");
        const role =guild.roles.find('name', 'teszt2');
        guild.user.addRole(role);
}})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
