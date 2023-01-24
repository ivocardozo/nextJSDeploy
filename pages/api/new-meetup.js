// /api/new-meetup
// POST /api/new/meet-up
import { MongoClient } from 'mongodb'
// this code never will run on client side

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body

       const client = await MongoClient.connect('mongodb+srv://user:user123@cluster0.7zojtyj.mongodb.net/meetups?retryWrites=true&w=majority')
       const db = client.db()

       const meetupsCollection = db.collection('meetups')
       const result = await meetupsCollection.insertOne({data})

       console.log(result)

       client.close()
       res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler