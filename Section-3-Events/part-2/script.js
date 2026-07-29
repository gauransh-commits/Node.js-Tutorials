const EventEmitter = require("events"); // the event module is a default module which is preinstalled 

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and welcome to events in node.js`);
});

// Events that are emitted only once
eventEmitter.once('pushnotify', () => {
    console.log("This event will be emitted only once");
})


// Emit the event
// Sometimes when we are emitting a event we might need to pass on some data like:
eventEmitter.emit('greet',"Gauransh"); // now the events module has the capability of transforming this data into the callback function.

eventEmitter.emit('pushnotify');
eventEmitter.emit('greet', "Ansh");
eventEmitter.emit('pushnotify'); // this event will not be invoked


// removing a listener

const testListener = () => console.log("Hello i am a test listener!");
eventEmitter.on('test', testListener);
eventEmitter.emit('test');
eventEmitter.removeListener('test', testListener);
eventEmitter.emit('test'); // this event will not be invoked since the listener listening to this event is removed

console.log(eventEmitter.listeners('test')); // this will return the list of all the listeners listening to a event
