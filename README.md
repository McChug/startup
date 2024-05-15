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
- **HTML Pages** - I built 7 HTML pages for the functionality of my web app. None are very complex.
- **Links** - My index page can reach my rules page and GitHub repository.
- **Text** - The text content for my rules page is laid out into sections I can fill in as the rules are set-in-stone (they'll depend on how well I learn the technologies lol).
- **Images** - I placed the game's logo on the index page.
- **DB/Login** - Input boxes for user login and game pin. Text for prompts represents what will later be a database pull.
- **WebSocket** - My different html pages will be merged and set up to dynamically change with WebSocket.

## CSS deliverable 🖌️

For this deliverable, I spent hours and hours and more hours styling the application in ways that I'll probably spend more hours restyling later. I love this stuff tho.

- I created **header, main, and footer** content (header in rules.html).
- **Navigation elements** - I created different buttons spanning my footer.
- **Responsive to window resizing** - My app has unique styles to fit different window sizes.
- **Application elements** - I meet WCAG color contrast requirements.
- **Application text content** - I really like the fonts I found, I keep 'em consistent.
- **Application images** - I made a vector graphic in Illustrator as well as a flyer in InDesign to match the theme of my app, though the flyer is not currently formatted how I intend to have it when shipped.

## JavaScript deliverable ⚙️

For this deliverable, I implemented JavaScript so that my application includes many of its primary functions for a singular user. Because this website will not be accessible with only one user when it is complete, I've made certain placeholders for database calls, websocket, and other technologies to be implemented later. I also have not finished all of the intended JavaScript functionality yet, but have made significant progress.

- **Login** - You can join a game by inserting your name and a valid PIN. Right now, that PIN is 'SSSS'.
- **Database** - I store user information in local storage currently. Later, these will populate my database.
- **WebSocket** - I will later use WebSocket to make the calls to my database to pull usernames and form submissions, instead of the hardcoded dummy text I currently have implemented.
- **Application logic** - Unrelated to the main functionality of my app, I created a form that can generate a custom party invite! This honestly took more time away from my main game than it should have, but I had just been introduced to a JavaScript library at work to modify pdf's, so I couldn't help putting it in my app.

## Service deliverable

This one was intense but wow, oh so powerful.

- **Node.js/Express HTTP service** - done!!
- **Static middlwarae for frontend** - done!
- **Calls to third party endpoints** - I made a temporary page called testsearch.html to do a basic call to the Spotify API query song names along with their Artists and Albums. It's barebones right now but the heavy lifting is going!
- **Backend service endpoints** - I have an endpoint set up for the name and pin form on my main page to catch the user's inputs and validate them.
- **Frontend calls service endpoints** - The fetch function is implemented onto my frontend .js pages.

## DB/Login deliverable

Wowzah this was crazy! Full disclosure, my app is very behind in fully functioning, however, I've learned how these technologies worked and implemented the core functionality from them into my app.

- **MongoDB Atlas database created** - done!
- **Stores data in MongoDB** - done!
- **User registration** - New accounts can be created and are stored inside the database.
- **Existing user** - It is only possible to generate a game PIN if you are an authorized user.
- **Use MongoDB to store credentials** - A user is stored in the database with their encrypted password and token. As I get more done, I'll also add the PIN of their current game to them.
- **Restricts Functionality** - Creating a new PIN is restricted by the server unless you have valid user credentials.

## WebSocket deliverable

I used WebSocket to create a simple display to show how many users have submitted their song entries in the game. I implemented this functionality onto the page https://mixtapes.click/waitroom_demo.html, which I'll later rope into my main app.


- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - When the submit button is pressed, a circle switches to red for all users!
  
## React deliverable

For this deliverable, I converted my app to use React. It has kept most all the functionality it had before converting, but in the process of porting it, not every feature made it over. I plan on using what I've learned this semester to finish the project with a friend over the summer and make a fully functional game!

- **Bundled and transplied** - done!
- **Components** - I made components for the start, lobby, rules, and demo pages. I also made a footer component that can be swapped around.
- **Router** - Routing between every component.
- **Hooks** - I used UseState to generate my song cards and on search page (or demo page).
