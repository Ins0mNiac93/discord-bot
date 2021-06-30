const Discord = require('discord.js');
const fs = require("fs");
const { Server } = require('ws');
const client = new Discord.Client();

const database = require("./database.json");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function Savedatabase() {
    fs.writeFile("./database.json", JSON.stringify(database, null, 4), (err) => {
        if (err) message.channel.send("ERROR");
    });
}

client.on('message', message => {
    if (message.content.startsWith("-clear")) {

        if (message.member.hasPermission("MANAGE_MESSAGES")) {

            const args = message.content.trim().split(/ +/g);

            if (args[1]) {
                if (args[1] >= 1 && args[1] <= 50) {
                    message.delete();
                    message.channel.bulkDelete(args[1]);
                    message.channel.send(`Vous avez bien delete : ${args[1]} messages !`);

                }
                if (args[1] > 50 || args[1] < 1) {
                    message.channel.send("Le message doit être compris entre 1 et 50");
                }

            }
            message.delete();
        }
    }
});

client.on('message', message => {
    if (message.content.startsWith("-tmoche")) {
        message.channel.send("@ムKz🇵🇱🦅#0667 est trop moche sa mère mdr !");
    }
});


client.on('message', message => {
    if (message.content.startsWith("-help")) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setTitle("Voici la page d'aide :")
            .setDescription(`



            **-tmoche** *||* Pour rappeller a kz qu'il est moche !!
    
            **-zizi** *||* Pour afficher un zizi mdr !
            
            **-mute** *||* Uniquement pour les modos, sert a mute !
            
            **-unmute** *||* Uniquement pour les modos, sert a unmute !
    
            **-ban** *||* Sert a ban un joueur, uniquement pour les modos !

            **-invite** *||* Pour inviter le bot sur ton serveur !


            **Utilise le prefixe "-" suivis du serveur que tu veux pour trouver un pack dessus !**
                                `);


        message.channel.send(exampleEmbed);
    }
})

client.on('message', message => {
    if (message.content.startsWith("fdp") || message.content.startsWith("enculé") || message.content.startsWith("ntm") || message.content.startsWith("Fdp") || message.content.startsWith("Enculé") || message.content.startsWith("Ntm") || message.content.startsWith("nazi") || message.content.startsWith("Nazi")) {
        message.delete();
        message.channel.send("Ce mot est interdit !");
    }
})

client.on('message', message => {
    if (message.content.startsWith("-zizi")) {
        message.channel.send("8===D");
    }
})

client.on('message', message => {
    if (message.content.startsWith('-mute')) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let role = message.guild.roles.cache.find(role => role.name === "Mute");

            let user = message.mentions.members.first();

            user.roles.add(role.id);

            message.channel.send(`Le joueur ${user} a bien était mute`);

        }
    } else if (message.content.startsWith('-unmute')) {
        let role = message.guild.roles.cache.find(role => role.name === "Mute");

        let user = message.mentions.members.first();

        user.roles.remove(role.id);

        message.channel.send(`Le joueur ${user} a bien était unmute`);
    }
});

client.on('message', message => {
    if (message.content.startsWith("-kick")) {
        let user = message.mentions.members.first();
        if (message.member.hasPermission("KICK_MEMBERS")) {

            const args = message.content.trim().split(/ +/g);

            user.kick();


            message.channel.send(`Le joueur ${user} a bien etait kick pour : ${args.slice(2).join(' ')} !`);
        } else {
            message.channel.send(`${user} Vous n'avez pas la permission pour kick des membres !`);
        }
    }
});

client.on('message', message => {
    if (message.content.startsWith('-ban')) {
        let user = message.mentions.members.first();
        if (message.member.hasPermission("BAN_MEMBERS")) {

            const args = message.content.trim().split(/ +/g);

            user.ban();

            message.channel.send(`Le membre ${user} à bien était bannis pour la raison ${args.slice(2).join(' ')} !`);

        } else {
            message.channel.send(`Vous n'avez pas la permission pour ban des membres !`);
        }
    }
});

client.on('message', message => {
    if (message.content.startsWith("-plutonium")) {
        const plutoniumEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setTitle('Voici un pack de texture pour plutonium : ')
            .setURL("https://cdn.discordapp.com/attachments/859438087398490142/859777476896227358/PackPlutoniumRed_1.mcpack")
            .setDescription("pack de texture pour plutonium")
            .setImage("https://media.discordapp.net/attachments/859438087398490142/859777483292803082/Screenshot_20210615_212351_com.mojang.minecraftpe-1.jpg?width=960&height=480")
            .setFooter("made by DriwenYt")
        message.channel.send(plutoniumEmbed);
    }
    if (message.content.startsWith("-histeria")) {
        const histeriaEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setTitle('Voici un pack de texture pour histeria : ')
            .setURL("https://www.mediafire.com/file/z1eg8vgsfilen3f/DriwenPrivate_Pack_Histeria_%255B128x%255D_%25283%2529.mcpack/file")
            .setDescription("pack de texture pour plutonium")
            .setImage("https://media.discordapp.net/attachments/859438170583203861/859796148377354250/Screenshot_20210630_160142_com.mojang.minecraftpe.jpg?width=960&height=480")
            .setFooter("made by DriwenYt")
        message.channel.send(histeriaEmbed);
    }
    if (message.content.startsWith("-futonium")) {
        const futoniumEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setDescription("Il n'y a pas de pack pour ce serveur :/")
        message.channel.send(futoniumEmbed);
    }

    if (message.content.startsWith("-hevolia")) {
        const hevoliaEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setDescription("Il n'y a pas de pack pour ce serveur :/")
        message.channel.send(hevoliaEmbed);
    }

    if (message.content.startsWith("-nitrofaction")) {
        const nitroEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setDescription("Il n'y a pas de pack pour ce serveur :/")
        message.channel.send(nitroEmbed);
    }

    if (message.content.startsWith("-erodia")) {
        const erodiaEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setTitle('Voici un pack de texture pour erodia : ')
            .setURL("https://www.mediafire.com/file/9nxahbk13ok2o8k/DriwenErodiaPack.mcpack/file")
            .setDescription("pack de texture pour erodia")
            .setImage("https://media.discordapp.net/attachments/859438778593574932/859793415583432764/unknown-4.jpg?width=960&height=540")
            .setFooter("made by DriwenYt")
        message.channel.send(erodiaEmbed);
    }

    if (message.content.startsWith("-venusia")) {
        const venusiaEmbed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setDescription("Il n'y a pas de pack pour ce serveur :/")
        message.channel.send(venusiaEmbed);
    }
})

client.on('message', message => {
    if (message.content.startsWith('-invite')) {
        const inviteembed = new Discord.MessageEmbed()
            .setColor('#A21389')
            .setTitle('Invite moi sur ton serveur en cliquand ici !')
            .setURL('https://discord.com/oauth2/authorize?client_id=859456897207238676&scope=bot&permissions=2146958591')
            .setFooter('Bot by Ins0mNiac#0316')
        message.channel.send(inviteembed);
    }
})

client.login(process.env.TOKEN);