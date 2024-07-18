import bcrypt from 'bcrypt'

let userDetail={
    name:"karthi",
    email:"karthi@gmail.com",
    password:"AK1432"
}
//this is used to change the password read type to encrypt type
let newpassword=bcrypt.hashSync(userDetail.password,5)
console.log(newpassword);

//this is used to display the userdetail include changed password
userDetail={...userDetail,password:newpassword}
console.log(userDetail);
if(bcrypt.compareSync("AK432",userDetail.password)){
    console.log("Password matched");
}
else{
    console.log("Password not matched");
}