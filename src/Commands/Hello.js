const Command = require('./../Structures/Command.js');
const Discord = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['hallo','hi','hola','ดีครับ','สวัสดี']
        });
    }

    async run(message, args) {
        const user = message.author;

        const Embed = new Discord.MessageEmbed();

        let EmbedM = Embed.setColor('#45968A').setImage(message.author.avatarURL({ dynamic: true })).setTitle(`สวัสดี คุณ **${user.tag}**`);

        message.channel.send(EmbedM);
        
    }
};