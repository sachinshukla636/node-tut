const app = require('./app')

console.log(app)

console.log(app.x)
console.log(app.y)
console.log("Sum is ",app.z());

const arr=[2,4,7,1,3,8,3];

let result=arr.filter((item)=>{
    return item==3;
})
console.log(result);