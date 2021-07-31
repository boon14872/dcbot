const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['delmessage']
        });
    }

    async run(message,args) {
        const msg = await message.channel.send(`กำลังลบข้อความจำนวน ${args}`);
        
        
        msg.edit();
    }
};