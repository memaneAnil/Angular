express = require('express');

eobj = express();

eobj.listen(5100,function(req,res){
    console.log("Server is listing on port 5100");
});

eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Aceess-Control-Allow-Headers","Origins,X-Reqested-with,Content-Type,Accept");
    next();
})

eobj.get('/read/:Batch',readData)
eobj.get('/read',readAllData)
//eobj.get('/insert',insertData)
eobj.get('/insert/:Batch/:Fees',insertData)
eobj.get('/update/:Batch/:Fees',updateData)
//eobj.get('/update',updateData)
eobj.get('/delete/:Batch',deleteData)

const {MongoClient} = require('mongodb');

const URL ="mongodb://127.0.0.1:27017";

const Client = new MongoClient(URL);

async function getConnection()
{
    let result = await Client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}

async function readData(req,res)
{//console.log("-----"+req.params.Batch);
    let data = await getConnection();
    
    let result = await data.find({"Batch":req.params.Batch}).toArray();
    //console.log("-----"+result);
    res.send(result);
}
async function readAllData(req,res)
{
    let data = await getConnection();
    let result = await data.find({}).toArray();
    //console.log("-----"+result);
    res.send(result);
}

async function insertData(req,res)
{
   
    let dbconnection = await getConnection();
    let result = dbconnection.insertOne({"Batch":req.params.Batch,"Fees":req.params.Fees});
    console.log("Data inserted successfully"+result);
    
}

async function updateData(req,res)
{
    //console.log(req.params.Batch+":"+req.params.Fees)
    let dbconnection = await getConnection();
    let result = dbconnection.updateOne({"Batch":req.params.Batch},{$set:{"Fees":req.params.Fees}});
    console.log("Record updated successfully"+result)
}

async function deleteData(req,res)
{
    let dbconnection = await getConnection();
    let result = dbconnection.deleteOne({"Batch":req.params.Batch});
    console.log("Record deleted successfully")
}

/*function main()
{
    //insertData();
    //readData();
    //updateData();
   // deleteData();
   // readData();
}

main();*/