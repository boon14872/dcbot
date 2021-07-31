const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['user','uinfo','member','memberinfo'],
            description: 'แสดงข้อมูลของผู้ใช้งานที่ระบุ.',
			category: 'Information',
            usage: 'userinfo <user>'
        });
    }

    async run(message, [target]) {
        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const userFlags = member.user.flags.toArray();
        const embed = new MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor(member.displayHexColor || 'RED')
            .addField('ผู้ใช้',[
                `**>> ชื่อผู้ใช้ :** ${member.user.username}`,
                `**>> เลข :** ${member.user.discriminator}`,
                `**>> ไอดี :** ${member.id}`,
                `**>> Flags :** ${userFlags.length ? userFlags.map(flag => flag[flag]).join(', ') : 'None'}`,
                `**>> Avatar Link :** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true})})`,
                `**>> Time Created :** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**>> สถานะ :** ${member.user.presence.status}`,
                `**>> กิจกรรม :** ${member.user.presence.activities}`,
                '\u200b'
            ])
            .addField('สมาชิค',[
                `**>> บทบาทสูงสุด :** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                `**>> เข้าร่วมเซิฟเวอร์ :** ${moment(member.joinedAt).format('LL LTS')}`,
                `**>> บทบาทหลัก :** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
                `**>> บทบาท : [${(roles.length)}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
                '\u200b'
            ]);
            //console.log(member.user.presence);
        return message.channel.send(embed);

    }
};