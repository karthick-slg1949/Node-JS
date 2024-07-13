import jsonwebtoken from 'jsonwebtoken'

let User={
    name:"karthi",
    uid:"karthi",
    password:"1432"
}

let s_key="kghkedhg"
let token=jsonwebtoken.sign(User,s_key)
console.log(token);

let hello=jsonwebtoken.verify(token,s_key)
console.log(hello);