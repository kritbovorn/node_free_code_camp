const EventEmitter = require('events');

// create instance for EventEmitter()
const customEmitter = new EventEmitter();

// on() : Listen for event
customEmitter.on('response', (name, id) => {
    console.log(`On: Listen: Data Recieved user: ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log(`Some others logic here`);
})

// emit() : Emit
customEmitter.emit('response', 'John', 43);


