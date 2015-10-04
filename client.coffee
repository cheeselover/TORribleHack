Snoocore = require 'snoocore'

crypto = require 'crypto'
request = require 'request'

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
        username: 'lol'
        password: 'nope'
        scope: [ 'identity', 'edit', 'flair', 'history', 'modconfig', 'modflair', 'modlog', 'modposts', 'modwiki', 'mysubreddits', 'privatemessages', 'read', 'report', 'save', 'submit', 'subscribe', 'vote', 'wikiedit', 'wikiread' ]

    # reddit('/api/v1/me').get().then (data) -> console.log data
    reddit('/api/submit').post
      kind: 'self'
      sendreplies: false
      sr: 'torriblehack'
      text: content
      title: title
    .then (data) ->
      console.log 'Request submitted'
      job = setInterval ->
        console.log 'Checking for replies...'
        reddit("/r/torriblehack/comments/#{data.json.data.name.substr 3}").get().then (data) ->
          comments = data[1].data.children
          if comments.length > 0
            clearInterval job
            comment = comments[0] # assume first comment
            pburl = comment.data.body
            console.log "Found response, downloading from #{pburl}"
            request pburl, (error, response, body) ->
              if !error and response.statusCode is 200
                console.log body
              else
                console.log 'Error', error
      , 10000

encrypt = (text) ->
  cipher = crypto.createCipher 'aes-256-ctr', 'yoloswag'
  crypted = cipher.update text, 'utf8', 'hex'
  crypted += cipher.final 'hex'
  crypted
