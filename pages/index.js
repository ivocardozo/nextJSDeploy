import Head from 'next/head'
import React, { Fragment } from 'react'
import { MongoClient } from 'mongodb'

import MeetUpList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 7, 1235 Some City', 
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 9, 1235 Some City', 
        description: 'This is a second meetup'
    },{
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 11, 1235 Some City', 
        description: 'This is a third meetup'
    }
]
const HomePage = (props) => {
  return (
    <Fragment>
        <Head>
            <title>React meetups</title>
            <meta
                name='description'
                content='Browse a huge list of highly active React meetups'
            />
        </Head>
        <MeetUpList meetups={props.meetups}/>
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
        'mongodb+srv://user:user123@cluster0.7zojtyj.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find().toArray()

    client.close()
    return {
        props:{
            meetups: meetups.map((meetup) => ({
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1 // time in seconds page is going to revaluate
        //remember static page are generated at building time
    }
}

export default HomePage
