// /api/new-meetup
// POST /api/new/meet-up

function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body

        const {title, image, address, description } = data
    }
}

export default handler