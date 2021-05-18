const ncp = require('ncp').ncp;

ncp.limit = 16;

console.log('Starting to copy assets.');
const promises = [
    new Promise(res => {
        ncp('src/public', 'dist/public', function (err) {
            if (err) {
                return console.error(err);
            }
            res();
        });
    })
];

Promise.all(promises).then(() => console.log('Done copying assets.'));
