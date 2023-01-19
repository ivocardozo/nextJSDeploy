import React from 'react'
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
    <MeetUpList meetups={props.meetups}/>
  )
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

// export async function getStaticProps() {
//     // fetch data from an API
//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10 // time in seconds page is going to revaluate
//         //remember static page are generated at building time
//     }
// }

export default HomePage
