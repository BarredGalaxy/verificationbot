const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
const fs = require("fs");
const color = [2012323, 4918289, 3482998, 0830827, 1273867, 7217478, 1276488];
const rtd = ["Galactic Hole", "Holactic Gale", "DEUSOOP VULT", "lOWOlmemes", "I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", "nick show", "garfield", "dank memes", "__can bonk the honk__", "Shitposter", "*livestream!*", "Holactic Gale", "Enlightenment", "'Dad'", "i really cant think of anything to put in this array of answers", "HonkStream", "memes", "this one is impossible"];
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
   
});
 
client.on('message', msg => {
  if(msg.author.bot) return;
  if (msg.content.startsWith(prefix + "slap")) {
    let [username] = msg.content.split(" ").slice(1);
    msg.channel.sendMessage(username + ' was slapped by ' + msg.author)
  }
  if (msg.content.includes("trump")) {
      msg.react('👎');
      msg.reply('Please dont discuss that horrible man. Ever. Like Ever. At all. Thx ;)')
  }
  if (msg.content.startsWith(prefix + "asl")) {
    let [age, sex, location] = msg.content.split(" ").slice(1);
    msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  if (msg.content.startsWith(prefix + 'botstats'))
    msg.channel.sendMessage(" ", {embed: {
            color: 7013413,
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
 
      const role = msg.guild.roles.find('name', 'Verified');
      msg.member.addRole(role);
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.reply('Test Pong is Done!');
  } 
  if (msg.content.startsWith(prefix + 'ty')) {
    msg.reply('ty is the best he is very cool!! :D');
  } 
  if (msg.content.startsWith(prefix + 'honk')) {
    msg.reply('honk honk honk honk honk honk honk honk. its my name. and main purpose in life. to honk endlessly. by why i ask: a question i often find myself at. why? why do i honk forr just the entertainment of a buch a humans? just for a higher life forms pleasure? why do i honk on end. this is the eternal question. who am i? where am i? what am i? why am i? im just a robot. just a silly automaton. just for the sheer laughs of humans on a discord server.');
  } 
  if (msg.content.startsWith(prefix + 'nick')) {
    msg.reply('https://i.imgur.com/bDLWaEB.png');
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
 
// Verification Points
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
client.on("message", msg => {
  if(msg.author.bot) return;
  if (msg.content.startsWith(prefix + 'verify')) {
    let userData = points[msg.author.id];
    if(userData.points > 20) { 
      let role = msg.guild.roles.find('name', 'Verified');
      console.log(role);
      msg.member.addRole(role);
      msg.reply('You Got *Verified*!')
    } else{
      msg.reply('You Can Get *Verified,* But i dont want to.')
    }
  }
  if (msg.content.includes('(╯°□°）╯︵ ┻━┻')) {
    msg.channel.sendMessage('┬─┬ノ( ゜-゜ノ) this table is gonna break soon')
  }
  if(!points[msg.author.id]) points[msg.author.id] = {points: 0, level: 0, flip: 0};
  let userData = points[msg.author.id];
  userData.points++;
 
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));  
  if(curLevel > userData.points) {
    userData.level = curLevel;
    msg.reply(`You've leveled up to level **${curLevel}**! You should chat more`);
  }
  if(msg.content.startsWith(prefix + "points")) {
    msg.channel.sendMessage("Your Balance is **" + userData.points + "**. Keep up the good work!");
  }
 
  fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});
 
client.login('wow ethan great moves keep it up.');
