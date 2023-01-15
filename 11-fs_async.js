/* Module 11 - FS (Async) */
const { readFile, writeFile } = require('fs');

console.log('STARTING <<< FS_ASYNC');

readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;
        writeFile('./content/result_async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('FINISHED WRITING FILE <<< FS_ASYNC');
        });
    });
});

console.log('STARTING NEXT TASK ...');
