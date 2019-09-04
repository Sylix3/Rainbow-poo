const Discord = require('discord.js');
// const ytdl = require('ytdl-core');

const bot = new Discord.Client();
var prefix = "p!"




bot.on('ready', () => {
    console.log(`logged in ${bot.user.tag}`)

    bot.user.setActivity("p!help", {type: "PLAYING" })
});

bot.on('guildMemberAdd', member => {
    member.sendMessage("Welcome to the Dot🔵 server i'm Rainbow Poo to get my commandlist type: p!commands also make sure to look at the **rules!** if you have got any more questions ask the __**owner**__ or one of the __**admins**__ :) ");
    member.addRole('607008683259592725'); //green Random banner
    member.addRole('594955738623901726'); //newcomer role
    
    member.guild.channels.get("594952123003830272").send(
        "Hey <@" + member.user.id + ">, Welcome to Dot🔵"
        + " \n Make sure to look in " + member.guild.channels.get('594953967121727499') 
        + " \n \n If you have any idea's for this server let us know in " + member.guild.channels.get('602991731620970517') 
        + " \n And please let us know a bit about yourself in the " + member.guild.channels.get('603296859192164429') 
        + " \n We have an NSFW channel (NO PORN!!!) so if you're 18+ contact the " + member.guild.roles.get('594955506830016544') + " or " + member.guild.roles.get('594955412625686538') + "to get access to this");
});


bot.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(' ');

    if (!msg.author.bot){
        if (msg.channel.id === "594953967121727499" && msg.content != + 'p!accept'){
            msg.delete();
        }

        if (msg.channel.id === "607722287969599498"){
            if (msg.content == prefix + 'members' ) {
                msg.reply("the amount of members = " + msg.guild.memberCount);
            }

            if (msg.content == prefix + 'commands' ) {
                msg.channel.send("__Commandlist:__ \n 1: **" + prefix + "members** : show's how many members that are in the server. \n 2: **" + prefix + "kick** : Kicks player from the server. \n 3: **" + prefix + "ban** : Bans player from the server. \n 4: **" + prefix + "purge** : Cleans Chat. \n 5: **" + prefix + "play** : Plays music in voice channel. \n 6: **" + prefix + "mute** : Mutes member from the server. \n 7: **" + prefix + "poo** : Just a random command! \n 8: **" + prefix + "donate** : A page where you can give a small donation :heart: ");
            }

        }
        
        //Note: set this up on custom created (bot) roles, not server role id's
        if (msg.content == prefix + 'accept' && msg.channel.id != "607722287969599498") {
            if (msg.member.roles.find(r => r.id === '594955738623901726')){
                msg.member.send("Thank you for accepting the rules \n If you have got any more questions ask the __**owner**__ or one of the __**admins**__ ");
                msg.member.addRole('607008532943863818'); //yellow Dot banner
                msg.member.addRole('594955922535874580'); //noob role
                msg.member.addRole('607132956464513037'); //purple Roles banner
                msg.member.addRole('602918585345638547'); //dj role
                msg.member.removeRole('594955738623901726'); //remove newcomer role

                msg.delete();
            }
        }
    


        if (msg.content.startsWith(prefix + 'kick' )) {
            if (!msg.member.hasPermission("KICK_MEMBERS" )) return msg.send("You do not have permission to do this.");

                let member = msg.mentions.members.first()

                member.kick().then((member) => {   
                    msg.channel.send(member.displayName + " Has been kicked from the server! :wave: \n https://thumbs.gfycat.com/WhisperedWaryArmednylonshrimp-size_restricted.gif")
                })    
        }




        if (msg.content.startsWith(prefix + 'ban' )) {
            if (!msg.member.hasPermission("BAN_MEMBERS" )) return msg.send("You do not have permission to do this.");
            
                let member = msg.mentions.members.first()

                member.ban().then((member) => {
                    msg.channel.send(member.displayName + " Has been banned from the server! Oh no! :wave: :wave: :wave: \n https://media1.giphy.com/media/Vh2c84FAPVyvvjZJNM/giphy.gif")
                })
        }
        
        
        if (msg.content.startsWith(prefix + 'purge' )) {
                if(!msg.member.hasPermission("MANAGE_MESSAGES" )) {
                    return msg.channel.send("You do not have persmission to do this!")
                }
                
                if(!args[1]) return msg.channel.send("You have to specify a number of messages to delete.");
                if(!isInt(args[1])) return msg.channel.send("Please enter a number of messages to delete.");
                args[1] = parseInt(args[1]); //force args to int
                args[1] = args[1] + 1;

                msg.channel.bulkDelete(args[1]);
                // msg.channel.send(`Purged ${args[1]} messages.`).then(msg.delete(2000));  
        }


        if (msg.content.startsWith( prefix + 'accept' ) && !msg.member.roles.find(r => r.id === '594955738623901726')) return msg.send("You do not have permission to do this.");

        if (msg.content.startsWith( prefix + 'poo' )) return msg.channel.send("Hello friend my name is rainbow poo im currently still under construction but i will do some very cool stuff in the future stay tuned to see my upcoming glory!");

        if (msg.content.startsWith( prefix + 'donate' )) return msg.channel.send("if you would like to give a small donation to the server you can do so by clicking this link : \n https://paypal.me/pools/c/8hk2gYh0ks");

        if (msg.content.startsWith( prefix + 'help' )) return msg.channel.send("To get my command list type p!commands");


        
        // if (msg.content.startsWith(prefix + 'mute')) {
        //     if (!msg.member.hasPermission("MANAGE_MEMBERS")) return msg.send("You do not have permission to do this!")

        //     let member = msg.mentions.members.first()

        //     member.mute().then((member) => {
        //         msg.channel.send(member.displayName + "Has been muted!")
        //     })
        // }

        // var muteRole = msg.guild.roles.find("name", "Muted");

        // if (!muteRole) return msg.channel.send("This role does not exist.");

        // var muteTime = args[2];

        // if (!muteTime) return msg.channel.send("Please enter the time");

        // await (user.addRole(muteRole.id));

        // msg.channel.send(`${user} is muted for ${muteTime}`);

        // setTimeout(function () {
            
        //     user.removeRole(muteRole.id);

        //     msg.channel.send(`${user} is no longer muted`);
        // });



        if (msg.content === prefix + 'play') {
            // if (message.channel.type !== 'text') return;
            return msg.channel.send("Music disabled untill further notice (dev env)")
            // const { voiceChannel } = msg.member;
    
            // if (!voiceChannel) {
            //     return msg.reply('please join a voice channel first!');
            // }
    
            // voiceChannel.join().then(connection => {
            //     const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
            //     const dispatcher = connection.playStream(stream);
    
            //     dispatcher.on('end', () => voiceChannel.leave());
            // });
        }

    }
});
 
 var secret = require('./key.js');

bot.login(secret.key);

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
  }
