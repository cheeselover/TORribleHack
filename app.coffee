program = require 'commander'
program
  .version '0.0.1'
  .arguments '<server|get> [url]'
  .action (cmd, url) ->
    if cmd is 'server'
      require './server'
    else
      require('./client').fetch url

program.parse process.argv
