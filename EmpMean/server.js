const express = require('express');
const eobj = express();

const {MongoClient} = require('mongodb');
URL="mongodb://127.0.0.1:27017"
const client = new MongoClient(URL);

port = 5100;

eobj.listen(port,()=>{
    console.log("Server is listing on port 5100");
});

eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Aceess-Control-Allow-Headers","Origins,X-Reqested-with,Content-Type,Accept");
    next();
})

eobj.get('/:id',getEmpInfo);

async function getEmpInfo(req,res){
    //console.log("======="+req.params.id);
    let result = await client.connect();
    let db = result.db("Marvellous");
    let collection = db.collection("EmpInfo");
    let einfo = await collection.find({"deptid":(Number(req.params.id))}).toArray();
    console.log(einfo);
    res.send(einfo);    
}
/*async function getConnection()
{
    let result = await Client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}*/
