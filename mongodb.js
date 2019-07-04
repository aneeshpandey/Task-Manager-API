//terminal commands
//npm i mongodb
//mongodb/bin/mongod --dbpath=mongodb-data

//crud create read update delete




// const mongodb=require('mongodb')
// const MongoClient =mongodb.MongoClient
// const ObjectID=mongodb.ObjectId

//Applying destructuring
const {MongoClient,ObjectID}=require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName='task-manager'

const id=new ObjectID()

// console.log(id.id)
// console.log(id.toHexString().length)
// console.log(id.toHexString())

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error,client)=>{
    if(error){
        return console.log('Could not connect to database!')
    }
    const db=client.db(databaseName)

  
   
})


