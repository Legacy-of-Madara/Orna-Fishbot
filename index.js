const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World")
  }
})

const welcomeChannelId = "983475783320338443"

client.on("guildMemberAdd"), (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> needs to get gud. lmao 42069.`)
}

client.login(process.env.TOKEN)
