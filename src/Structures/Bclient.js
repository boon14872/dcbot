const { Client, Collection } = require('discord.js');
const Util = require('./Util.js')

module.exports = class Bclient extends Client {

   constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

        this.commands = new Collection();

        this.aliases = new Collection();

        this.events = new Collection();

        this.utils = new Util(this);
        
        this.owners = options.owners;

	}
    validate(options) {
        if (typeof options !== 'object') throw new TypeError('Optional should be a Type Object.');

        if (!options.token) throw new Error('You must pass the token for the client.');
        this.token = options.token;

        if (!options.prefix) throw new Error('You mus paa a prefix for the client.');
        if (typeof options.prefix !== 'string') throw new TypeError('prefix Should be a type of String.'); 
        this.prefix = options.prefix;
        if (typeof options.msglog !== 'string') throw new TypeError('msglog Should be a type of String.'); 
        this.msglog = options.msglog;
    }

    async start(token = this.token) {
        this.utils.loadCommands();
        this.utils.loadEvents();
        super.login(token);
    }
    
};