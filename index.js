const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTgzNTIwMzEyNTg0OTgyNTI4.GuzvAt.-VShYN4qia1TQR6Jex-BGTIZpKI6237euWaIGk"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
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

client.login(process.env.TOKEN)
