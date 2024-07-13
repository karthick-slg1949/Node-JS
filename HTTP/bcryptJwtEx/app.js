import bcrypt from 'bcrypt'

let user={
    email:"Karthick3@gmail.com",
    cc:"123489767546",
    cw:"1432",
    password:"I love Kerala"
}
console.log(user);
 let salt=bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashSync(user.cc,10)
let new_password=bcrypt.hashSync(user.password,salt)
user={...user,cc:new_cc,password:new_password}
// console.log(user.cc);
// console.log(new_cc);

user={
    ...user,cc:new_cc
}
console.log(user);
console.log(user.password);

let flag=bcrypt.compareSync("I love Kerala",user.password)
if(flag){
    console.log("login Success");
}
else{
    console.log("login failed");
}