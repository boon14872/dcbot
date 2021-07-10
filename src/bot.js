const Botclient = require('./Structures/Bclient');
const config = require('../config.json');

const client = new Botclient(config);

client.start();