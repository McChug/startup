# startup
Startup project for CS 260

conflictTest.md: file to test basics of pushing changes and handling merge conflicts. Originally named "test.md". The contents of the file are not important.

## Specification🔎
### Elevator Pitch

I'm creating a game set up like Jackbox or Kahoot where players can share their favorite songs with friends by using them to fit prompts in creative ways. When all the songs are in and have been heard, a judge will vote on which one they think fits best, like in Apples to Apples.

### Key Features

I'm thinking rather ambitiously about all that I want to put into this project, but here are my most necessary features to start with . . . 
  1. Connect a small number of users in a unique "room" for their game. 🐸📱👽📱🐶📱🐦📱
  2. Divide the game into rounds, and start each round by electing one user as the judge. 🐶📱❗
  3. Display a prompt at the beginning of each round, and allow users to submit a song and timestamp in response. 🐸🎵👽🔉🐦💭
  4. Shuffle each response and send the information to another user's device (playing the songs will likely take place outside the web app, depending on what APIs I find). 🐸🔀👽🔀🐦
  5. Allow the judge to select their favorite song for the round and award points to the cooresponding user. 🐶🎵💗
  6. Continue with a number of rounds until a final scoreboard is presented. 💯🐸
> [!NOTE]
> If I find the time, I would love to add a "main screen" to this web app that all users can view on another device to guide them through the game together.

### Incorporating Each Technology
- **HTML:** This will give me the structure of each page and allow to me lay everything out.
- **CSS:** ~~This will consumer an absolutely ridiculous amount of time and never be good enough for me~~ This will allow me to style an intuitive UI with responsive design.
- **JavaScript:** This will allow users to submit forms with songs and vote on the favorite songs.
- **Web service:** This will connect all players to one another (and potentially to the main screen).
- **Authentication:** This will allow each user to represent themselves with a unique name and save their score to it.
- **Database persistence:** This will score a number of prompts as well as player scores.
- **WebSocket:** This will take user's song submissions and push them to other devices.
- **Web framework:** I will refactor my code using React to improve effeciency and styles.
- **(API:)** I will use an API to allow users to find specific songs rather than sending direct text.

### Design Mockup
![Three wireframes roughly sketched displaying frames to select songs and timestamps, receive songs and timestamps, and vote on a favorite song.](https://github.com/McChug/startup/blob/main/CS260_Wirefames.jpg)

## HTML deliverable 🖥️

For this deliverable, I built rough HTML pages for the different screens my application will require.

> [!NOTE]
> For my finished app, I'll use other technologies to dynamically change the HTML on a page without redirecting to another page, but for now I have a handful of unlinked pages

Here is what I accomplished to meet the deliverable criteria:
- HTML Pages - I built 7 HTML pages for the functionality of my web app. None are very complex.
- Links - My index page can reach my rules page and GitHub repository.
- Text - The text content for my rules page is laid out into sections I can fill in as the rules are set-in-stone (they'll depend on how well I learn the technologies lol).
- Images - I placed the game's logo on the index page.
- DB/Login - Input boxes for user login and game pin. Text for prompts represents what will later be a database pull.
- WebSocket - My different html pages will be merged and set up to dynamically change with WebSocket.
