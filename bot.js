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
    	client.guilds.get(733759129511919717).channels.get(733759129511919720).send(Cigány);
  	}
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
