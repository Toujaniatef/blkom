const express = require('express');
const app = express();

app.listen(() => console.log('Bird YT'));
app.listen(() => console.log('animebot'));
app.use('/ping', (req, res) => {
	res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require('node-cmd');
const ms = require('ms');
const fs = require('fs');
const ytdl = require('ytdl-core');
const canvas = require('canvas');
const convert = require('hh-mm-ss');
const fetchVideoInfo = require('youtube-info');
const simpleytapi = require('simple-youtube-api');
const util = require('util');
const gif = require('gif-search');
const jimp = require('jimp');
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require('pretty-ms');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');


const prefix = '!!';
const developers = '953043544543756379';


client.on('ready', () => {
	client.user.setActivity(`Type ${prefix}help`);
	app.listen(() => console.log('animebot'));
});



 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('BLACK')
  .setTimestamp()

          .setTitle('**All Commands**')
.setDescription(`

                 \`\`\`Commands\`\`\`
        - ${prefix}animecut
        
        - ${prefix}animegame
        
        - ${prefix}image
        
        - ${prefix}ping
        
        - ${prefix}help
        
`)

 .setFooter('Developer Bird YT')


   message.channel.send({embed});


    }
});




const Sra7a = [
  '***اش هو افضل انمي بالنسبة لك ؟***',
  '***هل تلاحظ تطور الانمي في العالم العربي ؟***',
  '***هل الانمي بالنسبة لك رائع او خايس ؟***',
  '***هل انت تتابع الانمي للان ؟***',
  '***اش هو الانمي الخايس بالنسبة لك ؟***',
  '***كم لك وانت تشاهد انمي ؟***',
  '***اش هو افضل انمي كوميدي ؟***',
  '***ماهو اطول انمي في التاريخ ؟***'
]
client.on('message', message => {
if (message.content.startsWith(prefix + 'animecut')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("Animecut")
.setColor('RANDOM')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.vox-cdn.com/thumbor/fYRuzbQ2EvRavUEwWB_o9UdwhTk=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});



const Game = [
  '***بنت حلوة شعرها اشقر وعينها اخضر مزرق(نيلي)زي كذا شي وقدرتها التحكم في العقل واستخدمته على وحدة وهي نينجة مين هي؟؟***',
  '***انمي بطلو شعرة وردي ويحب القتال متهووور جدا ويستخدم النار***',
  '***انمي فيه بنتوتة خجولة وحلوة وشعرها قصير ولونه كحلي زي كذا ولون عينها ابيض وهي نينجا؟؟؟***',
  '***ما هي الشخصية في عالم الانمي التي استطاعت ان تتحول من طالب الى ملك***',
  '***اعطيني اسم الشخصية الاقوى في دراغون بول سوبر***',
  '***ولد كان شاب ومجرمين حوله طفل صغير وهو محقق ذكي وبفضله ابو خطيبته سار محقق مشهور؟؟***',
  '***انمي بطلوا شعره برتقالي ولبسه اسود وهو مقاتل ويحمي الناس وعنده سيف كبير وطويل وحاد؟؟؟***',
  ''
]
client.on('message', message => {
if (message.content.startsWith(prefix + 'animegame')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("animegame")
.setColor('RANDOM')
.setDescription(`${Game[Math.floor(Math.random() * Game.length)]}`)
.setImage("https://cdn.pastemagazine.com/www/articles/2020/04/29/bestnetflixanimemain.jpg")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});



client.on('message', message => {   
  if (message.content === prefix + "ping") {
   const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.addField(':chart_with_upwards_trend:  **سرعة أتصال الــبوت** ' , `${Date.now() - message.createdTimestamp}` + ' ms`')


message.channel.sendEmbed(embed);
 }
});



var cats = [
 
  "https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg",
  "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557216671.5403_tunyra_n.jpg",
  "https://i.ytimg.com/vi/TEb8RP_dn84/maxresdefault.jpg",
  "https://www.tvovermind.com/wp-content/uploads/2018/03/Tokyo-Ghoul-640x407.jpg",
  "https://i2.wp.com/twincitiesgeek.com/wp-content/uploads/2020/03/Deku.jpg",
  "https://filmdaily.co/wp-content/uploads/2020/05/anime-memes_lede.jpg",
  "https://wallpaperaccess.com/full/44729.jpg",
  "https://events.muskingumlibrary.org/images/events/muskingumlibrary/anime.jpg",
  "https://pbs.twimg.com/profile_images/1087124894075236352/O9cDVYG__400x400.jpg",
  "https://assets.puzzlefactory.pl/puzzle/181/098/original.jpg",
  "https://g.foolcdn.com/editorial/images/578170/anime-cartoon-closeup-of-a-face-with-red-eyes.jpg",
  "https://static.fandomspot.com/images/06/7234/00-featured-izuku-midoriya-boku-no-hero-academia-anime-screenshot.jpg",
  "https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg",
  "https://howlfestival.com/wp-content/uploads/2020/09/naruto.jpg",
  "https://dw9to29mmj727.cloudfront.net/properties/2016/2462-Boruto_BDSet06_400x320.jpg"
  ]
      client.on('message', message => {
          var args = message.content.split(" ").slice(1);
      if(message.content.startsWith(prefix + 'image')) {
           var cat = new Discord.RichEmbed()
  .setImage(cats[Math.floor(Math.random() * cats.length)])
  message.channel.sendEmbed(cat);
      }
});



client.login(process.env.token);