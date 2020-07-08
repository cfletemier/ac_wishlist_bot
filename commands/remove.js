module.exports = {
    name: '!remove',
    description: 'RemoveItem',
    execute(msg, text) {
        user = msg.author.username;
        list = wishlist.get(user)
        if (list && list.includes(text)) {
            let index = list.indexOf(text);
            list.splice(index, 1);
            msg.channel.send(`${user} has removed ${text} from their wishlist`);
        } else {
            msg.channel.send(`${user} does not have ${text} in their wishlist`);
        }
    },
};