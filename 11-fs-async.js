// const fs = require('fs');
// fs.read
const {readFile,writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/youtubeComments-async.txt',
            `Here is the youtube comments: ${first}, ${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            })
    })
})
console.log('starting next task');