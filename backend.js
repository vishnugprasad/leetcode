const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const myCursor = client.db("local").collection("games").find({name: "Ervin Howell"}).toArray(function(error,result){
        console.log(result);
    })
    // while (myCursor.hasNext()) {
    //     console.log(toJSON(myCursor.next()));
    // }
//   db.collection('mammals').find().toArray((err, result) => {

//     if (err) throw err

//     console.log(result)
//   })
})