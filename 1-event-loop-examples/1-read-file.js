const { readFile } = require('fs');

console.log('Started a first task');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('Complete first tasks');
});

console.log('Start Next Task');