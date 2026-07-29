const EventEmitter = require("events");

class Chat extends EventEmitter{
    sendMessage(msg){
        console.log(`Message sent: ${msg}`);
        this.emit('messageRecieved', msg); // this will only be triggered when the event names exactly mathces with the names of the events being emitted.
        
    }
}

const chat = new Chat();
chat.on("messageRecieved", (msg) => {  // here if we write only 'message' instead of 'messageRecieved' then the event will not be emitted
    console.log(`New message: ${msg}`);
})

chat.sendMessage('Hello Gauransh');