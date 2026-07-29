const ChatRoom = require("./chatRoom");

const chat = new ChatRoom();

chat.on('join', (user) => {
    console.log(`${user} has joined the chat`);
})

chat.on('leave',(user) => {
    console.log(`${user} has left the chat`);
})

chat.on('message', (user, message) => {
    console.log(`${user} has sent message: ${message}`);
})

chat.join('Alice');
chat.join('Bob');

chat.leave('Alex');
chat.sendMessage('Bob','Everyone say hello to Bob');
chat.sendMessage('Alice','Everyone say hello to Alice');

chat.leave('Alice');
chat.sendMessage('Alice',"this message won't be sent");