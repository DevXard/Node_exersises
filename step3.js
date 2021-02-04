const fs = require('fs');
const axios = require('axios')

let flag;
let write;
let path;

if(process.argv.length <= 3) {
    path = process.argv[2]
}else if(process.argv.length > 3) {
    flag = process.argv[2]
    write = process.argv[3]
    path = process.argv[4]
}


function cat(path, write){
    console.log(write)
    fs.readFile(`./${path}`, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        if(write === undefined) {
            console.log(data)
        }else {
            fs.writeFile(`./${write}`, data, err => {
                if(err) {
                    console.log(err);
                }
                console.log("Success")
            })
        }
    })
}

async function webCat(path, write){
    
    let res = await axios.get(path)
    if(write === undefined) {
        console.log(res.data)
    }else {
        fs.writeFile(`./${write}`, res.data, err => {
            if (err) {
                console.log(err);
            }
            console.log('Success')
        })
    }
   
}

function catOrWeb(path){

    if(flag === undefined){
        if(path.slice(0, 4) === 'http'){
            webCat(path)
        }else{
            cat(path)
        }
    } else{
        if(path.slice(0, 4) === 'http'){
            webCat(path, write)
        }else{
            cat(path, write)
        }
    }

    
}

catOrWeb(path)