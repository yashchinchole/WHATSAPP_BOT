const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();
const { MessageMedia } = require('whatsapp-web.js');
const axios = require('axios');

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Hi YASH\n');
});

client.initialize();

client.on('message', async message => {
    client.on('message', message => {
        console.log(message.body);
    });

    const cmd = message.body
    if (message.body == "Yash" || message.body == "Hi" || message.body == "YASH" || message.body == "yash" || message.body == "hi" || message.body == "HI" || message.body == "Hii" || message.body == "Hey") {
        message.reply("Hello 🖐🏻\nI M *YASH* 😎\n\n*Type Any 💻*\n\n*0* - Time Table\n*1* - Memes\n*2* - Contact\n")
    }

    switch (cmd) {
        case '0':
            for (let i = 0; i < 10; i++) {
                client.sendMessage(message.from, await MessageMedia.fromFilePath('O:\\YASH\\0\\GitHub\\WHATSAPP_BOT\\Time_Table.pdf'))
                break
            }

        case '1':
            message.reply("*10* - Memes\n*11* - Programming\n*12* - Cricket\n*13* - Football\n*14* - Marvel\n")
            break

        case '10':
            const me = await axios("https://meme-api.herokuapp.com/gimme/memes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(me.url))
            break

        case '11':
            const memes = await axios("https://meme-api.herokuapp.com/gimme/ProgrammerHumor")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(memes.url))
            break

        case '12':
            const Cricket = await axios("https://meme-api.herokuapp.com/gimme/cricket")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Cricket.url))
            break

        case '13':
            const Football = await axios("https://meme-api.herokuapp.com/gimme/football")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Football.url))
            break

        case '14':
            const marvel = await axios("https://meme-api.herokuapp.com/gimme/marvelmemes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(marvel.url))
            break

        case '2':
            message.reply("*Linkedin* : https://www.linkedin.com/in/yashchinchole\n*Instagram* : https://www.instagram.com/yashchinchole/s")
            break
    }
});