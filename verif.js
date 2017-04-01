const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
const fs = require("fs");
const color = [2012323, 4918289, 3482998, 0830827, 1273867, 7217478, 1276488];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.reply('Test Pong is Done!');
  } else if (msg.content.startsWith(prefix + "help")) {
    msg.channel.sendMessage("", {embed: {
            color: color[Math.floor(Math.random() * color.length)],
            author: {
                 name: "Verification Bot.",
                icon_url: ""
            },
            description: "Verification Bot is a bot made for The Honk Squad.",
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
    if(points[msg.author.id] === 20) { 
      msg.guildMember.addRole('Verified')
      msg.reply('You Got *Verified*!')
    } else{
      msg.reply('You Can\'t Get *Verified.* Try Chatting More.')
    } else{
      
    }
  }
  if(!points[msg.author.id]) points[msg.author.id] = {points: 0, level: 0};
  let userData = points[msg.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));  
  if(curLevel > userData.points) {
    // Level up!
    userData.level = curLevel;
    msg.reply(`You've leveled up to level **${curLevel}**! You should chat more`);
  }

  if(msg.content.startsWith(prefix + "points")) {
  let [what, pro, pro2] = msg.content.split(" ").slice(1);
  if (what === "bal")
    msg.channel.sendMessage("Your Balance is **" + userData.points + "**. Keep up the good work!");
  if (what === "help")
    msg.channel.sendMessage("Help:\n`bal` Check you Balance");
  }

  fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});

client.login('maybe no');
