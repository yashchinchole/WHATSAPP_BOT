const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();
const { MessageMedia } = require('whatsapp-web.js');
const axios = require('axios');

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('HI YASH\n');
});

client.initialize();

client.on('message', async message => {
    client.on('message', message => {
        console.log(message.body);
    });

    const cmd = message.body
    switch (cmd) {
        case 'Hi':
            message.reply("HELLO\n*I M JARVIS*😎\nType Any💻\n\n1 - INFO\n2 - TIME TABLE\n3 - COVID UPDATES\n4 - MEMES\n")
            break

        case '1':
            message.reply("MADE BY - TEAM PROBOTS\n\n*YASH - SAHIL - ATHARVA - SUSHANT*\n");
            break

        case '2':
            const tt = await axios("https://meme-api.herokuapp.com/gimme/pccoe_tt")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(tt.url))
            break

        case '3':
            message.reply("Type Any💻\n\n31 - INDIA\n32 - US\n33 - CHINA\n34 - GERMANY\n")
            break

        case '31':
            const a = await axios("https://coronavirus-19-api.herokuapp.com/countries/india")
                .then(res => res.data)
            message.reply(`INDIA Has A Total Of : ${a.cases} Covid Cases`)
            break

        case '32':
            const b = await axios("https://coronavirus-19-api.herokuapp.com/countries/usa")
                .then(res => res.data)
            message.reply(`US Has A Total Of : ${b.cases} Covid Cases`)
            break

        case '33':
            const c = await axios("https://coronavirus-19-api.herokuapp.com/countries/china")
                .then(res => res.data)
            message.reply(`CHINA Has A Total Of : ${c.cases} Covid Cases`)
            break

        case '34':
            const d = await axios("https://coronavirus-19-api.herokuapp.com/countries/germany")
                .then(res => res.data)
            message.reply(`GERMANY Has A Total Of : ${d.cases} Covid Cases`)
            break

        case '4':
            message.reply("Type Any💻\n\n41 - Memes On Programming\n42 - Memes On Cricket\n43 - Memes On Football\n44 - Memes On Marvel\n")
            break

        case '41':
            const memes = await axios("https://meme-api.herokuapp.com/gimme/ProgrammerHumor")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(memes.url))
            break

        case '42':
            const Cricket = await axios("https://meme-api.herokuapp.com/gimme/cricket")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Cricket.url))
            break

        case '43':
            const Football = await axios("https://meme-api.herokuapp.com/gimme/football")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(Football.url))
            break

        case '44':
            const marvel = await axios("https://meme-api.herokuapp.com/gimme/marvelmemes")
                .then(res => res.data)
            client.sendMessage(message.from, await MessageMedia.fromUrl(marvel.url))
            break
    }
});