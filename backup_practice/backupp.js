const fs = require('fs');   

const data = "data matters"

const loop = (nofiles) => {
for(let i =0 ; i<nofiles ; i++){
fs.writeFile(`bckup${i}.html`,data,(err) =>{

    console.log("completed");
} )

}
}
const [,,nofiles] = process.argv;

console.log(loop(nofiles))






