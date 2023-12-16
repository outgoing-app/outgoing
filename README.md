# OutGoing

OutGoing is a mobile app that allows users to organize, manage, and participate in events with their friends! This is a full-stack mobile app developed with React Native, Express, and MongoDB.

With OutGoing, you can:
- Create and join groups where you can add, edit, and share a list of places/things you want to do with your friends
- Create a new event either based on one of the places shared in your group or something completely new!
- Send invitations to your friends so they can vote, confirm, or decline an event based on their availability
- More!

Check out our app [here](https://github.com/outgoing-app/outgoing/)!

## Backend
### Prerequisites
* You must setup MongoDB locally
* You must run commands to import data into the MongoDB database
* You must find your local IP Address and put yours in App.js where it is specified for the connection to be successful

### [Required] Setup MongoDB
* Run `brew install mongodb-community ` in your terminal to install MongoDB
* Run `brew services start mongodb-community` to start MongoDB

### [Required] Spin up the server and database
* In a separate terminal, run `npm run server-dev`. The following should be printed out:
```
Server is running on http://localhost:3000
Mongo db connected: localhost
```
Check out the server at `http://localhost:3000`
* The following are some of our main endpoints:
  
`GET /events` to retrieve all dummy events

`GET /groups` to retrieve all dummy groups

`GET /users` to retrieve all dummy users

All the existing endpoints and how to use them are in this Postman collection: https://speeding-crater-260064.postman.co/workspace/New-Team-Workspace~abd550bd-4b77-4482-adfe-9cef19016372/collection/25532684-7a34167b-2f70-4cf2-8db7-f9145ff872a9?action=share&creator=25532684

### [Highly recommended] Import dummy data into your local MongoDB database
* This step is highly recommended in order for a complete OutGoing experience
* In a separate terminal, run the following commands line by line:
```
mongoimport --db outgoingdb --collection users --file ./backend/data/users.json --jsonArray
mongoimport --db outgoingdb --collection events --file ./backend/data/events.json --jsonArray
mongoimport --db outgoingdb --collection groups --file ./backend/data/groups.json --jsonArray

```
### [Optional] Check if the data are successfully imported into the database
* In a separate terminal, run `mongosh` to access the interactive MongoDB terminal. Run the following line by line:
```
use outgoingdb
db.groups.find()
db.users.find()
db.events.find()
```
You should be able to see the recently imported data after running each of the last three commands.

## Frontend
### Installing dependencies
Go to your terminal (and make sure that you're in the right directory) and enter the following commands:
```
cd outgoing
npm install
npx expo install
```

### Put your IP address
* Replace the IP_ADDRESS in App.js with your own to connect it with the Express server:
```
const IP_ADDRESS = YOUR_IP_ADDRESS_HERE;  // change this to your IP ADDRESS to connect with the server
```

To find your own IP_ADDRESS for the previous step:
* When you run `npm start`, expo tells you here: `Metro waiting on exp://192.168.1.158:8081`. In this case, `192.168.1.158` is the IP address.
* Alternatively, go to: Apple icon on the top left of your screen -> System Settings -> Network -> Wifi -> Details -> TCP/IP

### Starting the frontend with Expo's development server
```
npm start
```
Although there is a web option, we recommend downloading an [Expo Go app](https://docs.expo.dev/get-started/expo-go/), scanning the provided QR code, and checking out our app on this platform.

To see other options, please checkout `package.json` for other available commands.

Please note that Expo comes with its own development server, highly suitable for mobile development with React Native. Hence, other local servers (e.g., Flask) are not at all necessary.

## Contributors
* [Maya Sundar](https://github.com/mayasundar)
* [Lydia Ying](https://github.com/lydiaying)
* [Rissa Kei Chua](https://github.com/rissakei)
* [Tattie Chitrakorn](https://github.com/tchitrakorn)
