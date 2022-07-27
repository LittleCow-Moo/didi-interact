const { DidiClient } = require("didi-interact");
const { Client } = require("discord.js");
const client = new Client({
  intents: [...] // Intents here
})
const dc = new DidiClient({
  client: client,
  endpoint: "channel-id" // Interaction Channel ID
})

client.on("ready", ()=>{
  console.log("ready");
  dc.send_test(); // REMINDER: send_test should always run when the Discord Bot is ready!
})

client.login("Z290IHNvbWUgbW9uZXkgZ290IHNvbWUgY2FzaCBpbSByaWNoIG5vdyBpbSBzYWQ=") // It's not a real token, put your token here!
