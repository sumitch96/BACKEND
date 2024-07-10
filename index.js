
const crypto= require("crypto")
let result
let arguments= process.argv.slice(2)
let operation= arguments[0]
let a = +arguments[1]
let b =+arguments[2]
if (arguments.length<1){
    console.log("provide correct arguments");
}
switch (operation) {
    case 'add':
      result = a + b;
      console.log(result);
      break;
    case 'sub':
      result = a - b;
      console.log(result);
      break;
    case 'mult':
      result = a * b;
      console.log(result);
      break;
    case 'divide':
      if (b === 0) {
        console.log("Cannot divide by zero");
      } else {
        result = a / b;
        console.log(result);
      }
      break;
    case 'sin':
      result = Math.sin(a);
      console.log(result);
      break;
    case 'cos':
      result = Math.cos(a);
      console.log(result);
      break;
    case 'tan':
      result = Math.tan(a);
      console.log(result);
      break;
    case 'random':
      if (isNaN(a) || a <= 0) {
        console.log("Provide a proper length");
      } else {
        result = crypto.randomBytes(a).toString('hex');
        console.log(result);
      }
      break;
    default:
      console.log("Invalid operatio")
    }