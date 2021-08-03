const Command = require('../../Structures/Command');
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            aliases: ['speak'],
			description: 'พูดตามข้อความ',
			category: 'voice',
			usage: 'say'
        });
    }
    async run(message, [text]) {
        const { voice } = message.member;
        if (!voice.channelID) return message.channel.send(new MessageEmbed().setDescription('กรุณาเข้าห้องเสียงก่อนนะ'));
        voice.channel.join();
        const client = new textToSpeech.TextToSpeechClient();

        // Construct the request
        const request = {
            input: {text: text},
            // Select the language and SSML voice gender (optional)
            voice: {languageCode: 'th-TH', ssmlGender: 'NEUTRAL'},
            // select the type of audio encoding
            audioConfig: {audioEncoding: 'MP3'},
        };

        // Performs the text-to-speech request
        const [response] = await client.synthesizeSpeech(request);
        // Write the binary audio content to a local file
        //const writeFile = util.promisify(fs.writeFile);
        //await writeFile('output.mp3', response.audioContent, 'binary');
        voice.play(response.audioContent);
        
    }
}