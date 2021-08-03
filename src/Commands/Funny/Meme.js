const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const subreddits = [
    /*'memes',
    'funny'*/
];

const memelisturl = [
    'https://i.imgur.com/5Cj7DJe.jpg',
    'https://i.imgur.com/Vkg2emT.jpg',
    'https://i.imgur.com/uoewB0c.jpg',
    'https://i.imgur.com/5apzl9B.jpg',
    'https://i.imgur.com/3RW8yUR.jpg',
    'https://i.imgur.com/RbeuOga.jpg',
    'https://i.imgur.com/7l8zb3Y.jpg',
    'https://i.imgur.com/9ehHSW4.jpg',
    'https://i.imgur.com/szRaRCc.jpg',
    'https://i.imgur.com/aQhYbrl.jpg',
    'https://i.imgur.com/tRJsatb.jpg',
    'https://i.imgur.com/K4UQnxh.jpg',
    'https://i.imgur.com/6nRKbPu.jpg',
    'https://i.imgur.com/WKrA0g6.jpg',
    'https://i.imgur.com/wsUN1kS.jpg',
    'https://i.imgur.com/QqEO8Tk.jpg',
    'https://i.imgur.com/FXsX7rE.jpg',
    'https://i.imgur.com/cLGCgG9.jpg',
    'https://i.imgur.com/p83tGJT.jpg',
    'https://i.imgur.com/uYMkq0q.jpg',
    'https://i.imgur.com/Ivo6VRm.jpg',
    'https://i.imgur.com/FCoj7tx.jpg',
    'https://i.imgur.com/hj7Ii3F.jpg',
    'https://i.imgur.com/JMYQ72N.jpg',
    'https://i.imgur.com/tc2mWeZ.jpg',
    'https://i.imgur.com/Q8CAZeu.jpg',
    'https://i.imgur.com/GsLWbLS.jpg',
    'https://i.imgur.com/Rpn2Rcq.jpg',
    'https://i.imgur.com/OJB1TmM.jpg',
    'https://i.imgur.com/SUiOi7S.jpg',
    'https://i.imgur.com/Ry89bTc.jpg',
    'https://i.imgur.com/mFAjNVm.jpg',
    'https://i.imgur.com/qApTafO.jpg',
    'https://i.imgur.com/VNZC8kf.png'
];


module.exports = class extends Command {

    constructor(...args) {
		super(...args, {
			aliases: ['มีม'],
			description: 'สุ่มรูปมีม',
			category: 'Fun',
			usage: 'meme'
		});
	}

    
    async run(message) {
        /*const data = await fetch(`https://imgur.com/gallery/${subreddits[Math.floor(Math.random() * subreddits.length)]}.json`)
            .then(response => response.json())
            .then(body => body.data)
            .then(data => data.filter((n) => n.ext !== '.mp4'));
            const selected = data[Math.floor(Math.random() * data.length)];
            */
           const meme = memelisturl[Math.floor(Math.random() * memelisturl.length)];
           console.log(meme);
            return message.channel.send(new MessageEmbed().setImage(meme));
            //return message.channel.send(new MessageEmbed().setImage(`https://imgur.com/${selected.hash}${selected.ext.replace(/\?.*/, '')}`));
    }
}