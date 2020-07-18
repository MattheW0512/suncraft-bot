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
if (message.member.roles.find(r => r.name === "teszt")){
user = message.member        
const otherServer = client.guilds.get("733759129511919717"); 
const role =server.roles.find('name', 'teszt2');
server.user.addRole(role);
}})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
