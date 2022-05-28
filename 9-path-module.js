const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const joinPath = path.join(__dirname, 'content', 'subfolder', 'test.txt');
console.log(`Join Path : ${joinPath}`);


const base = path.basename(filePath);
console.log(base);



const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);