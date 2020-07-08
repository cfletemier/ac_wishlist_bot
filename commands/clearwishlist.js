module.exports = {
    name: '!clearwishlist',
    description: 'Remove All Items',
    execute(msg, text) {
        user = msg.author.username;
        if (wishlist.has(user)) {
            wishlist.set(user, []);
        }
        msg.channel.send(`${user} has cleared their wishlist!`);
    },
};