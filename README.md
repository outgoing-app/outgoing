# OutGoing

OutGoing is a mobile app that allows users to organize, manage, and participate in events with their friends!

With OutGoing, you can:
- Create and join groups where you can add, edit, and share a list of places/things you want to do with your friends
- Create a new event either based on one of the places shared in your group or something completely new!
- Send invitations to your friends so they can vote, confirm, or decline an event based on their availability
- More!

Check out our app [here](https://github.com/outgoing-app/outgoing/)!

## Getting Started
If you’re interested in running our code locally, please download or clone our source code. Go to your terminal (and make sure that you're in the right directory) and enter the following commands:

### Installing dependencies
```
cd outgoing
npm install
npx expo install
```

### Starting the development server with Expo
```
npm start
```
Although there is a web option, we recommend downloading an [Expo Go app](https://docs.expo.dev/get-started/expo-go/), scanning the provided QR code, and checking out our app on this platform.

To see other options, please checkout `package.json` for other available commands.

Please note that Expo comes with its own development server, highly suitable for mobile development with React Native. Hence, other local servers (e.g., Flask) are not at all necessary.

### Starting the backend server with Express (OPTIONAL)
```
npm run server-dev
```
Check out the server at `http://localhost:3000`

The three available endpoints are:
- `GET /events` to retrieve all dummy events
- `GET /groups` to retrieve all dummy groups
- `GET /users` to retrieve all dummy users

Currently, our backend server returns some dummy data that can be used to further develop our frontend OutGoing application. It also has some database and schema setup that can be used if needed.

## Contributors
* [Maya Sundar](https://github.com/mayasundar)
* [Lydia Ying](https://github.com/lydiaying)
* [Rissa Kei Chua](https://github.com/rissakei)
* [Tattie Chitrakorn](https://github.com/tchitrakorn)
