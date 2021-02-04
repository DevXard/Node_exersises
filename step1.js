const fs = require('fs');


let path = process.argv[2]

function cat(path){
    fs.readFile(`./${path}.txt`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data)
    })
}

cat(path)