# didi-interact
Create interaction instances between your discord bot client and `牛弟弟#7506`!

## Simple Client
```js
const { DidiClient } = require('didi-interact');
const { Client } = require("discord.js");
const discordBot = new Client({intents: [...]}); // Your Discord bot
const DC = new DidiClient({
   client: discordBot,
   endpoint: "your-channel-id"
 });

 discordBot.on("ready", ()=>{
   DC.send_test(); // Sends a test message
 })
 ```
 ## Creating Guild Commands
 ```js
 const { Action, DidiCommandBuilder, DidiClient } = require("didi-interact");
 const DC = new DidiClient({
   client: discordBot // Your Discord Bot
 });

 const act = new Action();
 act.send_message("Hello World, <username>"); // The action when the commands is triggered.

 const cmd = new DidiCommandBuilder({
   client: DC // Make sure it's `DidiClient` object.
 });
 cmd.Command("hello", "A simple Hello World command! And yes, this is a description!", ["Role-IDs"], act); // Creates a command instance

 discordBot.on("ready", ()=>{
   DC.send_test();
   cmd.push_commands(); // Push commands
 })
 ```
