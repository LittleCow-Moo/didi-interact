const { DidiClient, DidiCommandBuilder, Action } = require("./");
const { Client } = require("discord.js");
const client = new Client({
  intents: [...] // Your Bot Intents Here!
})
const dc = new DidiClient({client: client, endpoint: "channel-id"})

/* Command Builder */
const cmd = new DidiCommandBuilder({
  client: dc // DidiClient class
});

/* Setting Up The Client Actions: */
const act = new Action(); // Client Action
act.send_message("hello bozo!")

/* Registering Commands! */
cmd.Command("hello", "A simple hello command.", ["a", "list", "of", "role", "ids"], act);

client.on("ready", ()=>{
  console.log("ready");
  cmd.push_commands(); // Always tell your bot to execute commands when it's logged in.
})

client.login("Z290IHNvbWUgbW9uZXkgZ290IHNvbWUgY2FzaCBpbSByaWNoIG5vdyBpbSBzYWQ=") // It's not a real token, put your token here!
