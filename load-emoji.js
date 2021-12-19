// This will store all the emoji data
let emojiObj = {}

// This will run when the page loads, filling the emojiObj with the list of emoji
fetch('https://badger.hackclub.dev/api/emoji').then(res => res.json()).then(data => {
  emojiObj = data
})

// Given an emoji name, return the image src, or null if it's not a custom emoji on the Slack
const lookupEmoji = name => (
  emojiObj[name]
)