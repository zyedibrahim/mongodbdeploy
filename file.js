
const fs  = require('fs');

// const quote2 = "Black Live Matters";

// const loop = (val) =>{
    
//    for(let i =0 ; i < val ; i++){
// fs.writeFile(`./backup${i}.html`,quote2, (err) =>{
//       return  console.log("completed writing")
//     }  );
//     }
    

// }
// const [,,val] = process.argv;
// console.log(loop(val))


fs.readFile('./cool.txt','utf-8',(err,data) =>{
if(err){
    console.log(err,"logging")
}
else{

    console.log(data);
}

} )


const quote3 = "dream without fear"

// it will replace
// fs.writeFile(`./awesome.html`,quote3, (err) =>{
//            console.log("completed writing")
//         }  );


// it will add same line
// fs.appendFile(`./awesome.html`,quote3, (err) =>{
//            console.log("completed writing")
//         }  );

// it will add next line
// fs.appendFile(`./awesome.html`,"\n"+ quote3, (err) =>{
//            console.log("completed writing")
//         }  );


// it will deleted

// fs.unlink("./style.css",(err) =>{

//     console.log("delet")

// } )


