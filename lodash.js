// npm  - Global command, comes with node
// npm  --version

// local dependency = use it only in this particular project
//  npm i <package name>

// Global dependency  - use it in any project
// npm install -g <package name>
// sudo npm install -g <package name>  ( Mac )


// package.json - manifest file (stores important Info : about project/package)

//  npm init        ( step by step , press Enter to skip )
//  npm init -y     ( Set every things default )

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('Hello World!!!');
