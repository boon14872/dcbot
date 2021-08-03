const Command = require('../../Structures/Command');
const PublicGoogleSheetsParser = require('public-google-sheets-parser')



module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['cs','mycoin','coin'],
			description: 'ดู cs coin',
			category: 'Comsci',
			usage: 'cscoin'
		});
	}

    
    async run(message,[name]) {
            if (name.length != 0) {
                const spreadsheetId = '10RDdNuqX49qU-GCnXzjKe3e2eBmh_8em4oUv_56uLPs';
                const parser = new PublicGoogleSheetsParser(spreadsheetId);
                parser.parse().then((items) => {
                    let datas = items.filter((n) => n['ตารางเก็บ cs coins  ชื่อ'] === name);
                    let data = Object.entries(datas[0]);
                    //console.log(data[data.length - 1][1]);
                    return message.channel.send(`คะแนน CS coin ของคุณ ${name} มี ${data[data.length - 1][1]} คะแนน`);
                });
            }
    }
}