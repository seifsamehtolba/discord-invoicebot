exports.run = (client, message, args) => {
    var Discord = require("discord.js");
    const adminRole = message.guild.roles.cache.find(role => role.name === "SUDO");

    if (!adminRole) return console.log('Mod role does not exist!');

    if (!message.member.roles.cache.has(adminRole.id)) return message.reply('You do not have perms to use this command!');

    if (args.length === 0) return message.reply('Please state the price of the items and then the items.');

    if (args.length === 1) return message.reply('Please state the product description!');

    if (isNaN(args[0])) return message.reply(`${args[0]} is not a valid amount.`);

    let desc = args.slice(1).join(" ");

    let embed = new Discord.MessageEmbed()
        .setColor(0x00ACD6)
        .setURL(`${client.config.PAYPAL}/${args[0]}`)
        .addField("Price:", `${client.config.CURRENCY}${args[0]}`)
        .addField("Description:", `${desc}`)
        .addField("Payment", `Are you ready to pay? [Click Here](${client.config.PAYPAL}/${args[0]})`)
        .setThumbnail("http://crunchfitness.ie/media/PayPal-Logo.jpg");

    message.channel.send({ embed });
}