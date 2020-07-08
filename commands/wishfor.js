module.exports = {
    name: '!wishfor',
    description: 'WishForItem',
    execute(msg, text) {
        user = msg.author.username;
        if (!wishlist.has(user)) {
            wishlist.set(user, []);
        }

        wishlist.get(user).push(text);
        msg.channel.send(`${user} has added ${text} to their wishlist!`);
    },
};
