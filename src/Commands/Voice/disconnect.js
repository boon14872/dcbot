const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');


module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            aliases: ['dc', 'leave', 'exit'],
			description: 'ออกจากห้องเสียง',
			category: 'voice',
			usage: 'disconnect'
        });
    }

    async run(message) {
        if (message.guild.me.voice.channelID) {
            message.channel.send(new MessageEmbed().setDescription(`${this.client.user} ได้อออกจากห้อง ${message.guild.me.voice.channel}`))
            message.guild.me.voice.channel.leave();
        }
        
    }
}