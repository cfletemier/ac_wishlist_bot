module.exports = {
  name: '!ping',
  description: 'Ping!',
  execute(msg, text) {
    msg.reply('pong');
    msg.channel.send('pong');
  },
};
