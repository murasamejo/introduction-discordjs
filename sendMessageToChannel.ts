import dotenv from 'dotenv'
dotenv.config()
const { Client, Intents } = require('discord.js')

const token: string = process.env.DISCORD_TOKEN || ''
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
client.login(token)

const targetChannelId: string = process.env.CHANNEL_ID || ''

client.once('ready', () => {
	console.log('discord.js is ready!')

  console.log(client.channels.cache.get(targetChannelId).send('メッセージ'))
})
