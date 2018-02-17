'use strict'

const alexaSkillKit = require('alexa-skill-kit')
const MessageTemplate = require('alexa-message-builder')
const fetch = global.fetch = require('node-fetch')
const cc = require('cryptocompare')

const tokens = {
  bitcoin: 'BTC',
  litecoin: 'LTC',
  ethereum: 'ETH',
  ether: 'ETH',
  ripple: 'XRP'
}

function cryptoSkill(event, context, callback) {
  console.log(event)

  alexaSkillKit(event, context, (message) => {
    if (message.intent.name === 'GetPrice') {
      const token = message.intent.slots.Coin.value

      if (Object.keys(tokens).indexOf(token.toLowerCase()) < 0) {
        return 'I can give you the info only for bitcoin, litecoin and ethereum'
      }

      return cc.price(tokens[token], 'INR')
        .then(prices => `Current price of ${token} is ${prices.INR} rupees.`)
    }

    if (message.intent.name === "AmountInfo") {
      const token = message.intent.slots.Coin.value
      const amount = Number(message.intent.slots.Amount.value)

      if (Object.keys(tokens).indexOf(token.toLowerCase()) < 0) {
        return 'I can give you the info only for bitcoin, litecoin and ethereum'
      }

      return cc.price(tokens[token], 'INR')
        .then(prices => `You can get ${amount / prices.INR} ${token}s for ${amount} rupees.`)
    }

    if (message.type === 'LaunchRequest') {
      return new MessageTemplate()
        .addText(`Hello from crypto currency bot.
          I can give you the info about bitcoin, litecoin and ethereum prices.
          How can I help you today?
          You can say:
          What is the current bitcoin price?
          Or How many ethereums can I get for 100 rupees?
        `)
        .addReprompt(`
          You can say:
          What is the current bitcoin price?
          Or How many ethereums can I get for 100 rupees?
        `)
        .keepSession()
        .get();
    }
  })
}

exports.handler = cryptoSkill