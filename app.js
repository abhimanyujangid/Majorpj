const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connect to db");
})
.catch(err => {
    consol.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.listen(3000, ()=>{
    console.log("server is listing");
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });