# react-messenger

[demo](http://188.166.100.185/)

## Requirements

- Ability to create and change an account, add an avatar
- Ability to find other accounts by their tag and send messages to them
- Display a list of dialogs and message feed with a selected user
- Message status display (read / unread)
- User status display (online, offline)
- Change of state (list of dialogs, messages) in real time

## Technology stack

#### Server
- Node js
- Express
- MongoDB
- WebSocket
- JWT

#### Client
- React
- Redux
- Material UI

## Result

Main window
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/main_window.png?raw=true)

Aside menu
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/aside.png?raw=true)

Modal windows
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/modals.png?raw=true)

Authorization form
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/register.png?raw=true)

Mobile version
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/mobile.png?raw=true)

## Networking algorithm

The situation when the user is logged in (JWT is sent in cookies)
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/scheme1.png?raw=true)

The situation when the user is logged **not** in
![alt text](https://github.com/siandreev/react-messenger/blob/master/docs/img/scheme2.png?raw=true)

## Configuring and running locally
Clone and install [server](https://github.com/siandreev/messenger-server), configure it according to the README and run.

Clone client and install dependencies via ```yarn```.

If you change the server port from 8000 to another, change the proxy port in the file ```/src/setupProxy.js``` on the client.

Use ```yarn start``` and visit http://localhost:3000.

