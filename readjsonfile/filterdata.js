const fs=require('fs')

fs.readFile('users1.json','utf-8',(err,data)=>{
    if(err)throw err
    // console.log(data)
    console.log(typeof data)//string

    let users1=JSON.parse(data)
    console.log(typeof users1)

    let male_Users=[]
    let female_Users=[]
    let Trangender_user=[]

    for(user of users1){
        if(user.gender=='Male'){
            male_Users.push(user)
        }
        else if(user.gender=='Female'){
            female_Users.push(user)
        }
        else{
            Trangender_user.push(user)

        }
    }
    // console.log(male_Users.length)
    fs.writeFile('male.json',JSON.stringify(male_Users),(err)=>{
        if (err) throw err
        console.log("Male Users Are Created",male_Users.length);
    })
    // console.log(female_Users.length);
        fs.writeFile('female.json',JSON.stringify(female_Users),(err)=>{
            if(err)throw err
            console.log("Female Users Are Created",female_Users.length);
        })
        fs.writeFile('trangender.json',JSON.stringify(Trangender_user),(err)=>{
            if(err)throw err
            console.log("Trangender Users Are Created",Trangender_user.length);
        })
})