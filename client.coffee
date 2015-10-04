r = require 'nraw'
Reddit = new r 'TORribleHack'
Snoocore = require 'snoocore'

crypto = require 'crypto'

module.exports =
  fetch: (url) ->
    title = new Date().getTime()
    content = encrypt url
    reddit = new Snoocore
      userAgent: 'TORribleHack 1.0'
      oauth:
        type: 'script'
        key: 'L1Gcu1I2VMUsMA'
        secret: 'iK-tGf8FlGnEE2TJI61OO1MrFHM'
        username: 'torriblehack1'
        password: 'yoloswag'
        scope: [ 'identity', 'edit', 'flair', 'history', 'modconfig', 'modflair', 'modlog', 'modposts', 'modwiki', 'mysubreddits', 'privatemessages', 'read', 'report', 'save', 'submit', 'subscribe', 'vote', 'wikiedit', 'wikiread' ]

    reddit('/api/v1/me').get().then (data) -> console.log data

encrypt = (text) ->
  cipher = crypto.createCipher 'aes-256-ctr', 'yoloswag'
  crypted = cipher.update text, 'utf8', 'hex'
  crypted += cipher.final 'hex'
  crypted
