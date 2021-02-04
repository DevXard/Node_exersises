const fs = require('fs');
const axios = require('axios')


let path = process.argv[2]

function cat(path){
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data)
    })
}

async function webCat(path){
    let res = await axios.get(path)
    console.log(res.data)
}

function catOrWeb(path){

    if(path.slice(0, 4) === 'http'){
        webCat(path)
    }else{
        cat(path)
    }
}

catOrWeb(path)