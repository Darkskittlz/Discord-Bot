const Discord = require('discord.js');
const { prefix, token } = require("./config.json");
const config = require("./config.json")
const bot = new Discord.Client();
var version = '1.0.2';


bot.on('ready', () => {
    console.log('Updated DarkskittlzBot, This bot is online!');
})

 

bot.on('message', message => {
    if (message.content === `${prefix}ping`){
        message.channel.send('Pong!!');
    } else 
    if (message.content === `${prefix}version`){
        message.channel.send('BOT_Version 1.0.3.');
    }else 
    if (message.content === `${prefix}info`){ 
        message.channel.send("This is the DarkskittlzBot! I am adding more and more commands, so let me know if there's anything you'd be interested in seeing!");
    }else
    if (message.content === `${prefix}server`){
        message.channel.send(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nVersion: ${version}`);    
    }else
    if (message.content === `${prefix}test`){
        message.channel.send(`Testing, Testing 1 2 3...`);
    }else
    if (message.content === `${prefix}website`){
        message.channel.send(`www.Darkskittles.com`);
    }
});   










/*
bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split("");

    switch (args[0]){
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'website':
            message.channel.send('darkskittles.com')
            break;
        case 'info':
            if (args[0] === 'info') {
                message.channel.send("This is the DarkskittlzBot! I am adding more and more commands, so let me know if there's anything you'd be interested in seeing!");
            }
            if (args[1] === 'version') {
                message.channel.send('Bot_version ' + version);
            } else {
                message.channel.send('')
            }
            break;
    }
})
*/ 

bot.login(token);




