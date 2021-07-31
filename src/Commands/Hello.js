const Command = require('./../Structures/Command.js');
const {GuildMember, MessageEmbed} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['hallo','hi','hola','ดีครับ','สวัสดี']
        });
    }

    async run(message, args) {
        let msg = ['สวัสดี','หวัดดี','หนี ห่าว','Hi'];
        message.channel.send(`${msg[Math.floor(Math.random() * msg.length)]} ${message.author}`);

    }
};