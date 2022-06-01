const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();
const { MessageMedia } = require('whatsapp-web.js');
const axios = require('axios');

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('HI YASH\nI M JARVIS');
});

client.initialize();

client.on('message', async message => {
    client.on('message', message => {
        console.log(message.body);
    });
    const cmd = message.body
    switch (cmd) {
        case 'Info':
            message.reply('NAME - YASH JITENDRA CHINCHOLE')
            break

        case 'Meme':
            const meme = await axios("https://meme-api.herokuapp.com/gimme/memes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
            break

        case 'Coding':
            const memes = await axios("https://meme-api.herokuapp.com/gimme/ProgrammerHumor")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(memes.url))
            break

        case 'Football':
            const Football = await axios("https://meme-api.herokuapp.com/gimme/football")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Football.url))
            break

        case 'Cricket':
            const Cricket = await axios("https://meme-api.herokuapp.com/gimme/Cricket")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Cricket.url))
            break

        case 'Fact':
            const fact = await axios("https://meme-api.herokuapp.com/gimme/intrestingasfuck")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(fact.url))
            break

        case 'Marvel':
            const marvel = await axios("https://meme-api.herokuapp.com/gimme/marvelmemes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(marvel.url))
            break
    }
});