const { readFile, writeFile, read } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log('Error Read File : ' + err);
        return  
    }
    const first = result;
    
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        const secondData = data;
        writeFile('./content/result-async.txt', `Write data to new file ${first} ::: ${secondData}`, (er, res) => {
            if (er) {
                console.log(er);
                return
            }
            console.log(res);
        });
    });
});

console.log('Starting next task');