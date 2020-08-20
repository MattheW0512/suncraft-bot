const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', client => {
        client.channels.get('733759129511919720').send('A BOT sikeresen elindult! Baszódj meg Máté!');
    })

client.on('message', message => {
    if (message.content === '...') {
    	message.reply('...');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
