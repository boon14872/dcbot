const Event = require('../../Structures/Event');
const Bembed = require('../../Structures/Bembed');

module.exports = class extends Event {

    async run(message) {
        if(!message.guild || message.author.bot) return;
        const attachments = message.attachments.size ? message.attachments.map(attachment => attachment.proxyURL) : null;
        const embed = new Bembed()
        .setColor('RED')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`Message Deleted`)
        .setDescription('มีการลบข้อความ')
        .addField(`**> Message ID** `,message.id,true)
        .addField(`**> Channel:**`,message.channel,true)
        .addField(`**> Author:**`,message.author,true);
        
        if(attachments) {
            embed.addField(`**> Attachments:** `,attachments.join('\n'));
        }
        
        if (message.content.length) {
            embed.splitField(`**> Deleted Message:** ${message.content}`);
        }

        const channel = message.guild.channels.cache.find(ch => ch.name === this.client.msglog);
        if (channel) channel.send(embed);
    }

}