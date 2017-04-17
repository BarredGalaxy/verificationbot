const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
// const fs = require("fs");
const color = [2012323, 4918289, 3482998, 0830827, 1273867, 7217478, 1276488];
const rtd = ["Galactic Hole", "Holactic Gale", "DEUSOOP VULT", "lOWOlmemes", "I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", "nick show", "garfield", "dank memes", "__can bonk the honk__", "Shitposter", "*livestream!*", "Holactic Gale", "Enlightenment", "'Dad'", "i really cant think of anything to put in this array of answers", "HonkStream", "memes", "this one is impossible"];
const slap = ["https://media.giphy.com/media/y6dyjA5vmkUgw/giphy.gif", "http://p.fod4.com/p/media/87b82bdcd4/dU5uwWV3RqucQ7InODGZ_Third%20Hand%20Slap.gif", "https://media.giphy.com/media/D4K9yv0L8tqP6/giphy.gif", "http://gifsec.com/wp-content/uploads/GIF/2014/03/Slow-motion-slap-GIF.gif", "http://www.gifimagesdownload.com/wp-content/uploads/2016/02/latest-slap-gif-781.gif"];
/*
var express = require('express');
var app     = express();
*/
const answers = ["99%", "DEUSOOP VULT", "lOWOlmemes", "cheese the preacher", "I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", "Maybe.", "Certainly not.", "fuck you", "I hope so.", "Not in your wildest dreams.", "There is a good chance.", "Quite likely.", "I think so.", "I hope not.", "I hope so.", "Never!", "Fuhgeddaboudit.", "Ahaha! Really?!?", "Pfft.", "Sorry, bucko.", "Hell, yes.", "Hell, to the na na.", "The future is bleak.", "The future is uncertain.", "I would rather not say.", "Who cares?", "Possibly.", "Never, ever, ever.", "There is a small chance.", "Yes!", "99%", "I Would bet on it."];
/*
app.set('port', (process.env.PORT || 5000));
 
  //For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
*/
 
client.on('ready', () => {
  client.user.setUsername('HonkBot')
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setGame("HonkBot: *help | I'm Currently in " + client.guilds.size + " Servers! | NEW MONTHLY CHALLENGES COMING SOON!")
  client.channels.get('275777565124198400').send("**Monthly Challenges:** Who ever makes the __BEST__ honkbot logo will get __**400 t! Credits & 1 REP**__ (More info: *monthly)");
});
 
client.on('message', msg => {
  if(msg.author.bot) return;
  if (msg.content.startsWith(prefix + "slap")) {
    let [username] = msg.content.split(" ").slice(1);
    msg.channel.sendMessage(username + ' was slapped by ' + msg.author + '\n' + slap[Math.floor(Math.random() * slap.length)])
  }
  if (msg.content.startsWith(prefix + "asl")) {
    let [age, sex, location] = msg.content.split(" ").slice(1);
    msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  if (msg.content.startsWith(prefix + 'bot'))
    msg.channel.sendMessage(" ", {embed: {
            color: color[Math.floor(Math.random() * color.length)],
            author: {
                 name: "Bot Info",
                icon_url: ""
            },
            description: "HonkBot : Written By @BarredGalaxy#6811",
            fields: [
                {
                    inline: true,
                    name: "Prefix",
                    value: prefix
                },
                {
                    inline: true,
                    name: "Uptime",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                },
                {
                    inline: true,
                    name: "Servers",
                    value: client.guilds.size
                },
                {
                    inline: true,
                    name: "Version",
                    value: "1.93.23"
                },
                {
                    inline: true,
                    name: "Dev Server",
                    value: "http://bit.ly/2oNP6hv"
                },
                {
                    inline: true,
                    name: "Server Ping",
                    value: Math.round(msg.client.ping) + "ms"
                }
            ]
        }});
  if (msg.content.startsWith(prefix + 'botstats'))
    msg.channel.sendMessage(" ", {embed: {
            color: color[Math.floor(Math.random() * color.length)],
            author: {
                 name: "Bot Statistics",
                icon_url: ""
            },
            description: "Bot Statistics... What do You Expect?",
            fields: [
                {
                    inline: true,
                    name: "Ping!",
                    value: Math.round(msg.client.ping) + "ms"
                },
                {
                    inline: true,
                    name: "Uptime!",
                    value: [Math.floor((client.uptime / 1000) / 60)] + "m"
                }
            ]
        }});
  if (msg.content.includes('<@241330918722109441>')) {
    msg.channel.sendMessage('im barred\'s manager, please dont ping him')
  }
  if (msg.content.includes('booty')) {
    msg.channel.sendMessage('gimme some of that booty my dood. :thumbsup:')
  }
  if (msg.content.startsWith(prefix + "8ball")) 
    msg.reply(`:8ball: ${answers[Math.floor(Math.random() * answers.length)]}`)
  if (msg.content.startsWith(prefix + 'add'))
    msg.channel.sendMessage('Wow! You like me so much that you want me in your Server? http://bit.ly/2oNP6hv')
  if (msg.content.startsWith(prefix + "rtd")) 
    msg.channel.sendMessage("", {embed: {
            color: color[Math.floor(Math.random() * color.length)],
            author: {
                 name: "I Rolled a " + rtd[Math.floor(Math.random() * rtd.length)] + "!",
            },
            fields: [
            ]
        }});
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.reply('Test Pong is Done!');
  } 
  if (msg.content.startsWith(prefix + 'ty')) {
    msg.reply('ty is the best he is very cool!! :D http://barred.ga/i/yes.png');
  } 
  if (msg.content.startsWith(prefix + 'monthly')) {
    msg.reply('**Monthly Challenges:** Who ever makes the __BEST__ honkbot logo will get __**400 t! Credits & 1 REP**__ //\n\n `MORE INFO: For questions, Ask @BarredGalaxy#6811, The Creator`');
  } 
  if (msg.content.startsWith(prefix + 'upgrademe')) {
    if (!msg.author.id == '241330918722109441') return;
    msg.reply('yes');
    const role = msg.guild.roles.find('name', 'beep boop');
    msg.member.addRole(role);
  }
  if (msg.content.startsWith(prefix + 'nick')) {
    msg.reply('We all love nick http://barred.ga/i/nick.png');
  } 
  if (msg.content.startsWith(prefix + "help")) {
    msg.channel.sendMessage("", {embed: {
            color: color[Math.floor(Math.random() * color.length)],
            author: {
                 name: "Verification Bot.",
                icon_url: ""
            },
            description: "Verification Bot is a bot made by BarredGalaxy.",
            fields: [
                {
                    inline: true,
                    name: "*points",
                    value: "Shows your chat level."
                },
                {
                    inline: true,
                    name: "*verify",
                    value: "Verify your account."
                },
                {
                    inline: true,
                    name: "*rtd",
                    value: "Roll to die"
                },
                {
                    inline: true,
                    name: "*8ball",
                    value: "Magic 8-Ball!"
                },
                {
                    inline: true,
                    name: "*add",
                    value: "Add Me!"
                },
                {
                    inline: true,
                    name: "*ping",
                    value: "Check heroku's ping"
                },
                {
                    inline: true,
                    name: "*nick",
                    value: "????"
                },
                {
                    inline: true,
                    name: "*honk",
                    value: "dont even try."
                },
                {
                    inline: true,
                    name: "*ty",
                    value: "this command is ty"
                }
            ]
        }});
  }
     
});

 
client.login('no');
