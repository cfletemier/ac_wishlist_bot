const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commands = require('./commands');

Object.keys(commands).map(key => {
  client.commands.set(commands[key].name, commands[key]);
});

global.wishlist = new Map()
global.offer = new Map()

const TOKEN = process.env.TOKEN;

client.login(config.token);

client.once('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(!(msg.content.startsWith(config.prefix))){
    return;
  }

  if (!(msg.channel.name == "animal-crossing-debug")) {
    console.info("Wrong channel")
    return;
  }

  const args = msg.content.split(/ +/)
  const command = args.shift().toLowerCase();
  let msgText = (args.length ? args.join(" ") : null)
  console.info(`Called command: ${command}`);

  if (!client.commands.has(command)) {
    console.log(`Command ${command} does not exist`)
    return;
  }

  try {
    client.commands.get(command).execute(msg, msgText);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
// Maybe add some stuff about removing items off of the wishlist, maybe cache lists
// add remove item from wishlist
// add clear wishlist
// add dupe checking
// add "not in wishlist" checking to removal