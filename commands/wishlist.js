module.exports = {
    name: '!wishlist',
    description: 'DisplayWishlist',
    execute(msg, text) {
        user = msg.author.username;
        let items = ((wishlist.get(user) && wishlist.get(user).length) ? wishlist.get(user).join("\n") : "Nothing, yet!");
        msg.channel.send(`${user} wishes for:\n${items}`);
    },
};