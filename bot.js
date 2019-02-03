const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("541583431901904918")
setInterval(function() {
channel.send(`لا اله الا الله لا الله الا الله استغفر الله العظيم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);