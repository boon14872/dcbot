const Bclient = require('./Structures/Bclient').default;
const config = require('../config.json');

const client = new Bclient(config);
client.login();
