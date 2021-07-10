const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'));
const Command = require('./Command.js');

module.exports = class Util {
    constructor(client) {
        this.client = client;
    }

    isClass(input) {
        return typeof input === 'function' &&
        
        typeof input.prototype === 'object' &&
        
        input.toString().substring(0, 5) === 'class';
        
    }

    get directory() {
        return `${path.dirname(require.main.filename)}${path.sep}`;
    }

    async loadCommands() {
        console.log(`Load Commands ${this.directory}Commands/*/*.js`);
        return glob(`${this.directory}Commands/**/*.js`).then(commands => {

            for (const commandFile of commands) {

                console.log(`${commandFile}`);
                
                delete require.cache[commandFile];
                const { name } = path.parse(commandFile);
                
                const File = require(commandFile);
                if (!this.isClass(File)) throw new TypeError (`command ${name} doesn't export a class.`);
                const command = new File(this.client, name.toLowerCase());
                if (!(command instanceof Command)) throw new TypeError(`Commnand ${name } doesnt belong in Commands.`);
                this.client.commands.set(command.name, command);
                if(command.aliases.length) {
                    for (const alias of command.aliases) {
                        this.client.aliases.set(alias, command.name);
                    }
                }
            }
            console.log('Load Complete');
        });
    }
};