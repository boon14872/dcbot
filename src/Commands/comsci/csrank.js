const Command = require('../../Structures/Command');
const PublicGoogleSheetsParser = require('public-google-sheets-parser');
const { MessageEmbed } = require('discord.js');



module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['coinrank'],
			description: 'ดู rank cs coin',
			category: 'Comsci',
			usage: 'csrank'
		});
	}

    
    async run(message) {
                const spreadsheetId = '10RDdNuqX49qU-GCnXzjKe3e2eBmh_8em4oUv_56uLPs';
                const parser = new PublicGoogleSheetsParser(spreadsheetId);
                const embed = new MessageEmbed();
                const ndata = [];
                parser.parse().then((items) => {
                    //let datas = Object.entries(items);
                    for (const pp in items) {
                        let datas = Object.entries(items[pp]);

                        let data = {
                            name: datas[0][1],
                            cscoin: datas[datas.length - 1][1]
                        };
                        ndata.push(data);
                        //console.log(data);
                    }
                    const toprank = ndata.sort((a, b) => a.cscoin < b.cscoin ? 1 : a.cscoin > b.cscoin ? -1 : 0);
                    const ranks = [];
                    //console.log(toprank);
                    ranks[0] = [];
                    ranks[1] = [];
                    ranks[2] = [];
                    for (const i in toprank) {
                        ranks[0].push(parseInt(i)+1);
                        ranks[1].push(toprank[i].name);
                        ranks[2].push(toprank[i].cscoin);

                    }
                    //console.log(ranks);            
                    embed.setColor('RED')
                    .setTitle(`อันดับ CS COIN`)
                    .setURL('https://docs.google.com/spreadsheets/d/10RDdNuqX49qU-GCnXzjKe3e2eBmh_8em4oUv_56uLPs')
                    .setDescription('ลำดับคะแนน CS COIN ของนักศึกษาสาขาวิทยาการคอมพืวเตอร์')
                    .addField(`ลำดับ`,ranks[0],true)
                    .addField(`ชื่อ`,ranks[1],true)
                    .addField(`คะแนน`,ranks[2],true);
                    return message.channel.send(embed);
                });
                
            }
}