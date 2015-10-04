Snoocore = require 'snoocore'

crypto = require 'crypto'
request = require 'request'
encoder = require './lzw_encoder.js'

reddit = new Snoocore
  userAgent: 'TORribleHack 1.0'
  oauth:
    type: 'script'
    key: 'L1Gcu1I2VMUsMA'
    secret: 'iK-tGf8FlGnEE2TJI61OO1MrFHM'
    username: 'TorribleHackSeevz'
    password: 'tntntntn'
    scope: [ 'identity', 'edit', 'flair', 'history', 'modconfig', 'modflair', 'modlog', 'modposts', 'modwiki', 'mysubreddits', 'privatemessages', 'read', 'report', 'save', 'submit', 'subscribe', 'vote', 'wikiedit', 'wikiread' ]

encrypt = (text) ->
  cipher = crypto.createCipher 'aes-256-ctr', 'yoloswag'
  crypted = cipher.update text, 'utf8', 'hex'
  crypted += cipher.final 'hex'
  crypted

decrypt = (text) ->
  decipher = crypto.createDecipher 'aes-256-ctr', 'yoloswag'
  dec = decipher.update text, 'hex', 'utf8'
  dec += decipher.final 'utf8'
  dec


nextScanApproved = true

scanReddit = ->
  if nextScanApproved
    nextScanApproved = false

    console.log "Scanning Subreddit..."
    reddit('/r/torriblehack/new').get({limit: 1}).then (response) ->
      post = response.data.children[0].data
      if post.num_comments == 0
        url = decrypt(post.selftext)
        request url, (error, response, body) ->
          if not error and response.statusCode is 200
            message = encrypt(encoder.encode(body))
            request.post 'http://p.drmc.ca/documents', {formData: {data: message}}, (e, r, b) ->
              reddit('/api/comment').post({
                thing_id: post.name
                text: encrypt(encoder.encode(JSON.parse(b).key))
              }).then (response) ->
                console.log("We did it guise!!!111!11!1\n")
                nextScanApproved = true
          else
            console.error(error)
            nextScanApproved = true

      else
        console.log "A bot has already taken care of this post! (Comments exist)\n"
        nextScanApproved = true

setInterval(scanReddit, 10000)
