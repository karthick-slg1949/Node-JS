import express from 'express'
const app = express();
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
app.get("/", (req, resp) => {
    resp.sendFile(process.cwd() + "/index.html");
  });

app.post("/", (req, resp) => {
const username = req.body.username;
const password = req.body.password;
console.log("Username: " + username);
console.log("Password: " + password);
resp.send("Data received");
});

  app.listen(3000,(err)=>{
    console.log(`Server Running http://127.0.0.1:3000`)
  });