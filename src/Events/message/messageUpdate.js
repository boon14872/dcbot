const Event = require('../../Structures/Event');
const Bembed = require('../../Structures/Bembed');
const { Util: { escapeMarkdown } } = require('discord.js');
const { diffWordsWithSpace } = require('diff');


module.exports = class extends Event {

    async run(old, message) {
        if (!message.guild || old.content === message.content || message.author.bot) return;

        const embed = new Bembed()
            .setColor('YELLOW')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Message Updated')
            .setDescription('มีการอัพเดทข้อความ')
            .addField(`**> Message ID** `,old.id,true)
            .addField(`**> Channel:**`,old.channel,true)
            .addField(`**> Author:**`,old.author,true)
            .setURL(old.url)
            .splitField(diffWordsWithSpace(escapeMarkdown(old.content), escapeMarkdown(message.content))
                .map(result => result.added ? `**${result.value}**` : result.removed ? `~~${result.value}~~` : result.value)
                .join(' '));

        const channel = message.guild.channels.cache.find(ch => ch.name === this.client.msglog);
        if (channel) channel.send(embed);
    }
}