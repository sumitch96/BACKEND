const path = require("path");
const fs = require("fs");
const { log } = require("console");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
     console.log(fs.readFileSync('./text.txt','utf-8'))

    break
    case 'delete':
        fs.unlink("./text.txt",(err)=>{
            if (err){
                console.log("Erroe Occer")
            }else{
            console.log("File deleted succesfully")
            }
        })
        break
    case 'append' :
        fs.appendFileSync("./text.txt",file)
        console.log("Data added sucesfully")
        break
    

    case 'create':
        fs.writeFileSync("./text.txt","Hello aman")
        console.log("Created Successfully")
        break
    case 'rename' :
        fs.renameSync("./text.txt", "./New.txt")
        console.log("Renamed succesfully")
        break
    
    case 'list' :
        let vir = file||"."
        fs.readdir(vir, (err,data)=>{
            if (err){
                console.log("error accur")
            }else{
                data.map((element)=>{
                    console.log(element)
                })
            }
        })
        break

  default:
    console.log(`Invalid operation '${operation}'`);
}
