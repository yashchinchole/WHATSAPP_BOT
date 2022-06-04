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
        case 'Hi':
            message.reply("HELLO\n\nI M YASH'S BOT\n\nType Any\n\n1. Info\n2. Covid Updates\n3. Memes\n4. Memes On Programming\n5. Memes On Cricket\n6. Memes On Football\n7. Memes On Marvel\n")
            break

        case '1':
            message.reply('NAME - YASH JITENDRA CHINCHOLE')
            break

        case '2':
            const info = await axios("https://coronavirus-19-api.herokuapp.com/countries/india")
                .then(res => res.data)
            message.reply(`INDIA Has A Total Of : \*\*${info.cases}\*\*\ Covid Cases `,)
            break

        case '3':
            const meme = await axios("https://meme-api.herokuapp.com/gimme/memes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
            break

        case '4':
            const memes = await axios("https://meme-api.herokuapp.com/gimme/ProgrammerHumor")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(memes.url))
            break

        case '5':
            const Cricket = await axios("https://meme-api.herokuapp.com/gimme/cricket")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Cricket.url))
            break

        case '6':
            const Football = await axios("https://meme-api.herokuapp.com/gimme/football")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Football.url))
            break

        case '7':
            const marvel = await axios("https://meme-api.herokuapp.com/gimme/marvelmemes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(marvel.url))
            break
    }
});