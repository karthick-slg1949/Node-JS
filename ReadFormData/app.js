import express from 'express'
const app = express();
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
  });

app.post("/", (req, res) => {
const username = req.body.username;
const password = req.body.password;
console.log("Username: " + username);
console.log("Password: " + password);
res.send("Data received");
});

  app.listen(3000,(err)=>{
    console.log("Server Running!")
  });