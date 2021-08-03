const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');


module.exports = class extends Command {
    
    constructor(...args) {
        super(...args, {
            aliases: ['connect', 'con'],
			description: 'เข้าร่วมห้องเสียง',
			category: 'voice',
			usage: 'join'
        });
    }

    async run(message) {
        const { voice } = message.member;
        if (!voice.channelID) return message.channel.send(new MessageEmbed().setDescription('กรุณาเข้าห้องเสียงก่อนนะ'));
        voice.channel.join();
    }
}