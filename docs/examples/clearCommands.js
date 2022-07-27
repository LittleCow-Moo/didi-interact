const { DidiClient, DidiCommandBuilder } = require("./");
const { Client } = require("discord.js");
const client = new Client({
  intents: [...] // Intents here!
})
const dc = new DidiClient({client: client, endpoint: "channel-id"})

/* Command Builder */
const cmd = new DidiCommandBuilder({
  client: dc // DidiClient class
})

client.on("ready", ()=>{
  console.log("ready");
  /* REMEMBER: Always execute commands when the bot is ready. */
  cmd.push_commands({
    clear: true // Clear Commands
  });
})

client.login("Z290IHNvbWUgbW9uZXkgZ290IHNvbWUgY2FzaCBpbSByaWNoIG5vdyBpbSBzYWQ=") // It's not a real token, put your token here!
