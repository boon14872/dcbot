const Command = require('../../Structures/Command');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['pong']
        });
    }

    async run(message) {
        const msg = await message.channel.send('Pinging....');

        const latency = msg.createdTimestamp - message.createdTimestamp;
        const choices = ['ไม่นะเน็ตต','โอเครเน็ตยังโอเคร','ฉันหวังว่าเน็ตน่าจะยังดีนะ'];
        const response = choices[Math.floor(Math.random() * choices.length)];

        msg.edit(`${response} - Bot Latency : \`${latency}ms\`, API Latency : \`${Math.round(this.client.ws.ping)}ms\``);
    }
};