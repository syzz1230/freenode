const eventemitter = require(`events`);

const customemitter = new eventemitter();

customemitter.on('response', (name, id) => {
  console.log(`data recieved ${name},${id}`);
});
customemitter.on('response', () => {
  console.log(`kamine`);
});
console.log('emitted');
customemitter.emit('response', 'srijan', 56);
console.log('nathan');
customemitter.emit('response', 'khushi', 55);
