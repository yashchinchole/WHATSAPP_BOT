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
            message.reply("HELLO\n*I M JARVIS* 😎\n\nMADE BY\n*YASH - SAHIL - ATHARVA - SUSHANT*\n\n*Type Any 💻*\n\n*1* - TECHFEST 2k22\n*2* - TIME TABLE\n*3* - COVID UPDATES\n*4* - MEMES\n")
            break

        case 'hi':
            message.reply("HELLO\n*I M JARVIS* 😎\n\nMADE BY\n*YASH - SAHIL - ATHARVA - SUSHANT*\n\n*Type Any 💻*\n\n*1* - TECHFEST 2k22\n*2* - TIME TABLE\n*3* - COVID UPDATES\n*4* - MEMES\n")
            break

        case 'HI':
            message.reply("HELLO\n*I M JARVIS* 😎\n\nMADE BY\n*YASH - SAHIL - ATHARVA - SUSHANT*\n\n*Type Any 💻*\n\n*1* - TECHFEST 2k22\n*2* - TIME TABLE\n*3* - COVID UPDATES\n*4* - MEMES\n")
            break

        case '1':
            message.reply("*Type Any 💻*\n\n*11* - Website\n*12* - About Events\n*13* - Registration\n*14* - Contacts\n");
            break
            
        case '11':
            message.reply("http://techfest2k22.web.app");
            break

        case '12':
            message.reply("🔴 Hello students 🔴\n🛃🛃 TechFest 2022 🛃🛃\n📢📢 Department of Applied Science and Humanities organizing technical event TechFest 2022 Only for our F.Y.B.Tech. students\nThis event will be scheduled on 26/06/2022 and the events are:\n\n🛃 Paper Presentation\n🛃 Project Exhibition\n🛃 Website / App Development\n🛃 Idea to Prototype\n🛃 Brain Dasher\n🛃 On Spot Model Making\n🛃 Isomania\n🛃 Coding Warrior\n🛃 Tech Treasure Hunt\n\n🏆🏆🏆 For each above event prizes and certificates  are given for 1st, 2nd and 3rd rank.🏆🏆🏆\n📝📝📝 Registrations are free and one can participate in more than one events The details of all the events and the registration schedule will be shared soon.TechFest coordinator\nMr. Dinesh Kute\nMr. D. A. Anarse");
            break

        case '13':
            message.reply("It's Finally Here!! The Wait is Officially Over🦾🦾\nEnroll For TechFest 2k22 Right Now!\nRegistrations Start Today!!Apply Now\nTechFest 2022 Registration Details\n\n1) On Spot Model Making Registration Link:\nhttps://forms.office.com/rY8zHymiGKq\nFaculty Coordinator: Mr. Parag Ankad\n\n2) Coding Warrior Registration Link:https://forms.office.com/r/E2LCTvMrLQ\nFaculty Coordinator: Mrs. Savita kumbhare\n\n3) Brain Dasher Registration Link:https://forms.office.com/r/NiczPSzryM\nFaculty Coordinator: Dr. Shaziya Shaikh\n\n4) Tech Treasure Hunt Registration Link:https://forms.office.com/r/HA0uzFUBzv\nFaculty Coordinator: Dr. Sonali Kale\n\n5) Isomania Registration Link:https://forms.office.com/r/0Ddp1xndUn\nFaculty Coordinator: Mr. Chandan Ingole\n\n6) Project Exhibition Registration Link:https://forms.office.com/r/YtjAaKjMV9\nFaculty Coordinator: Dr. Priya Joshi\n\n7) Website / APP Development Registration Link:https://forms.office.com/r/1umasF8aGM\nFaculty Coordinator: Dr. Arif Bagwan\n\n8) Idea to Prototype Registration Link:https://forms.office.com/r/Q2FkGi2Xbf\nFaculty Coordinator: Dr. Leena Sharma\n\n9) Paper Presentation Registration Link:https://forms.office.com/r/rfM0w2sasA\nFaculty Coordinator: Dr. Mahadev Kadam");
            break

        case '14':
            message.reply("Mr. Dinesh Kute : 77094 95376\nMr. D. A. Anarse : 92733 73573\nPrathmesh Bacchav : 98236 32630\nSaie Mukane : 72496 15728\nAtharva Joshi : 96239 45897")
            break

        case '2':
            const url = `https://i.ibb.co/K54Fw4K/Hnet-com-image.png`
            client.sendMessage(message.from, await MessageMedia.fromUrl(url))
            break
        // const tt = await axios("https://meme-api.herokuapp.com/gimme/pccoett")
        //     .then(res => res.data)
        // client.sendMessage(message.from, await MessageMedia.fromUrl(tt.url))
        // break

        case '21':
            client.sendMessage(message.from, await MessageMedia.fromFilePath('O:\\YASH\\0\\GitHub\\WHATSAPP_BOT\\TT.png'))
            break

        case '3':
            message.reply("*Type Any 💻*\n\n*31* - INDIA\n*32* - US\n*33* - GERMANY\n")
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
            const c = await axios("https://coronavirus-19-api.herokuapp.com/countries/germany")
                .then(res => res.data)
            message.reply(`GERMANY Has A Total Of : ${c.cases} Covid Cases`)
            break

        case '4':
            message.reply("*Type Any 💻*\n\n*41* - Memes On Programming\n*42* - Memes On Cricket\n*43* - Memes On Football\n*44* - Memes On Marvel\n")
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