# Welcome To The `didi-interact` docs!
Get started by running our examples, OR [begin reading](#Table-of-contents)!

- [Invite 牛弟弟 →](https://didi.c-moo.cf/invite)
- [Our Discord →](https://discord.gg/bQJyuAD9hw)
- [Examples →](https://github.com/LittleCow-moo/didi-interact/tree/main/docs/examples/README.md)

# Table of contents
- [DidiClient](#DidiClient)
- [DidiCommandBuilder](#DidiCommandBuilder)
- [Action](#Action)


## DidiClient
Represents a Bot Client for `DIDI.API`.

### constructor
```js
new DidiClient(settings);
```
| parameter             | type                                                          | default    | description             |
|-----------------------|---------------------------------------------------------------|------------|-------------------------|
| settings | `DidiClientSettings` (`object`) | *required* | Options for the bot client |

#### DidiClientSettings
| settings           | type                                 | description               |
|--------------------|--------------------------------------|---------------------------|
| client             | [`discord.js.Client`](https://discord.js.org/#/docs/main/stable/class/Client) | A Discord Bot Client. Needed for sending interaction messages. |
| endpoint           | `String`                             | A Channel ID. Your bot and Cow Didi MUST have access to the channel. |

### methods
#### .send_test()
- Sends a test message.
- Returns: `null`

## DidiCommandBuilder
Represents a Didi Command Builder.

### constructor
```js
new DidiCommandBuilder(DidiCommandOptions);
```
| parameter             | type                                                          | default    | description             |
|-----------------------|---------------------------------------------------------------|------------|-------------------------|
| settings | `DidiCommandOptions` (`object`) | *required* | Options for the command builder. |

#### DidiCommandOptions
| settings           | type                                 | description               |
|--------------------|--------------------------------------|---------------------------|
| client             | [`DidiClient`](#DidiClient) | *No description.* |

### methods
#### .Command(name, description, onlyFor, action)
Creates a new command.

| parameter             | type                                                          | default    | description             |
|-----------------------|---------------------------------------------------------------|------------|-------------------------|
| name | `String` | *required* | Command Name for your guild. |
| description | `String` | *required* | Command Description. |
| onlyFor | `Array` | `Array([])` | Restrict access for the command usage. Should be an `Array` of Discord Role Ids. |
| action | [`Action`](#Action) | *required* | Bot's action after receiving the command. Should use the [`Action`](#Action) class.

#### .push_commands(settings)
Push commands.
| parameter             | type                                                          | default    | description             |
|-----------------------|---------------------------------------------------------------|------------|-------------------------|
| settings | `Object` | `null` | Settings for pushing commands. |

##### settings
| settings           | type                                 | description               |
|--------------------|--------------------------------------|---------------------------|
| clear             | `Boolean` | Whether clear all commands or not. Can be used when there's no command registered in the class. |

## Action
Represents a client action after receiving commands.
### constructor
```js
new Action();
```
#### methods
##### .send_message(content)
| parameter           | type                                 | description               |
|--------------------|--------------------------------------|---------------------------|
| content             | `String` | The message content. Should not contain *any `[";", "&&"]`* |

