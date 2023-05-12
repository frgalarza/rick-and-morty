const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req, res)=>{
    
    try {
        const { id } = req.params

        const { name, gender, status, origin, image, species} = (await axios(URL + id)).data

        const character = {
            id,
            name,
            gender,
            image,
            origin,
            species,
            status
        }

        return character ? res.status(200).json(character) : res.status(404).send('Not found')
    }
    catch (error) {
       res.status(500).send(error.message)
    }
}

module.exports = {
    getCharById
}