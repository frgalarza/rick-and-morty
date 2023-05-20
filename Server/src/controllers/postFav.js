const { Favorite } = require('../DB_connection')

const postFav = async(req, res) => {
    try {
        const { id, name, status, species, gender, origin, image } = req.body
        console.log(req.body)

        if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send('Faltan datos')

        await Favorite.findOrCreate({
            where: {
                id : id,
                name: name, 
                status: status, 
                species: species, 
                gender: gender, 
                origin: origin, 
                image: image
            }
        })

        const favorites = await Favorite.findAll()

        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    postFav
}
