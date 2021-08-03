const Event = require('../Structures/Event');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            once: true
        });
    }

    run() {
        console.log([
            `Logged in as ${this.client.user.tag}.`,
            `Loaded ${this.client.commands.size} commands!`,
            `Loaded ${this.client.events.size} events!`
        ].join('\n'));

        const activites = [
            `บอทกากจัดๆกำลังทำงานอยู่`,
            `คนทำเก่งจังเลย`,
            `บอทตัวนี้เก่งเกินไป`,
            `ทำงานใน ${this.client.guilds.cache.size} servers!`,
            `ทำงานใน ${this.client.channels.cache.size} channels!`,
            `ทำงานให้กับ ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}  users!`
        ];
        /*const activites = [
            `ทำงานใน ${this.client.guilds.cache.size} servers!`,
            `ทำงานใน ${this.client.channels.cache.size} channels!`,
            `ทำงานให้กับ ${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}  users!`
        ];*/

        let i = 0;
        setInterval(() => this.client.user.setActivity(`${this.client.prefix}help | ${activites[i++ % activites.length]}`, { type: 'PLAYING' }), 20000);
    }
};