const fs = require('fs');
const path = require('path');

let folders = [];

fs.readdir("All files", function(err, files) {
    if(err) console.error(err);
    else {
        files.forEach(function(file) {
            let a = path.extname(file).substring(1);
            if (!folders.includes(a)) {
                folders.push(a);
            }
        })

        folders.forEach(function(folder) {
            fs.mkdirSync(`./Organized files/${folder} Files`, {recursive: true})
        })

        files.forEach(function(file) {
            let a = path.extname(file).substring(1);
            fs.copyFile(`./All files/${file}`, `./Organized files/${a} Files/${file}`, function(err) {
                if(err) console.error(err);
                else console.log("File copied");
            })
        })
    }
});