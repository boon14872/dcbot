const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const subreddits = [
    'dogs',
    'dog'
];


module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['หมา'],
			description: 'สุ่มรูปหมา',
			category: 'Fun',
			usage: 'dog'
		});
	}

    
    async run(message) {
        const data = await fetch(`https://imgur.com/r/${subreddits[Math.floor(Math.random() * subreddits.length)]}/hot.json`)
        
            .then(response => response.json())
            .then(body => body.data)
            .then(data => data.filter((n) => n.ext !== '.mp4'));
            const selected = data[Math.floor(Math.random() * data.length)];
            return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
    }
}