# Chitter

A basic Twitter clone, now live at: https://chitterapp.netlify.app

![tweet composition demo](https://cdn.discordapp.com/attachments/871914093865472011/1045157556215103609/chitter.gif)

## Built With

- Vue 3
- Vue Router
- Firebase
- Pinia (Vue state management library)
- Misc: DayJS (date library), sanitize-html

## Features

- Fully responsive CSS
- Authentication (sign-up is currently unavailable to those without the sign-up code)
  - Persistent login session
- Basic Twitter features such as: composing tweets, uploading media, replies + likes + retweets, @'s and hashtags, following and unfollowing
- User-curated timeline and global timeline (for display purposes)
  - Infinite scrolling (not automatic)
- Real-time notifications

![notification demo](https://cdn.discordapp.com/attachments/871914093865472011/1045157622896144404/chitter_4.gif)

## Challenges

**Timeframe**: 6-7 weeks

It goes without saying that this was my most difficult learning project thus far. If this was a merely a frontend app instead of full-stack, it would've been done within half the time, but the introduction of Firebase led to refactoring most of my code to utilize Promises, which required higher attention to asynchronous timing and UX. I also found Firebase to be oddly limiting in its querying, which in turn reduced the scalability of my code (which wasn't very scalable in the first place).

Speaking of scalability, that was one of the concepts that I thought a lot about throughout this project. Twitter's architecture is extremely dense and complex — I could barely imagine how to handle 50 users let alone millions of them.

While the most challenging aspect was converting my synchronous code to async, the most frustrating points of this project were CSS-related! I feel much, much more knowledgeable of CSS now, but it was very time-consuming to get things to display exactly how I wanted them, e.g. tweet image grids and username responsive overflow.
