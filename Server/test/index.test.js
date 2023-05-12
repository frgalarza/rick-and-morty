const server = require('../src/app');
const session = require('supertest');
const agent = session(server)

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async()=>{
            await agent.get('/rickandmorty/character/1').expect(200)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
            const char = await agent.get('/rickandmorty/character/1')
            expect(char.body).toHaveProperty('id')
            expect(char.body).toHaveProperty('name')
            expect(char.body).toHaveProperty('species')
            expect(char.body).toHaveProperty('gender')
            expect(char.body).toHaveProperty('status')
            expect(char.body).toHaveProperty('origin')
            expect(char.body).toHaveProperty('image')
        })
        it('Si hay un error responde con status: 500', async()=>{
            await agent.get('/rickandmorty/character/999').expect(500)
        })
    })
    
    describe('GET /rickandmorty/login', ()=>{
        it('Si se ingresa el email y password correcto devuelve {access: true}', async()=>{
            const response = await agent.get('/rickandmorty/login?email=francig4444@gmail.com&password=23deEnero')
            expect(response.body).toEqual({access:true})
        })  
        it('Si se ingresa un email o password incorrecta devuelve {access:false}', async()=>{
            const response = await agent.get('/rickandmorty/login?email=francig4444@gmail.com&password=24deEnero')
            expect(response.body).toEqual({access:false})
        })
    })

    describe('POST /rickandmorty/fav', ()=>{
        const character1 = { id: '1', name: 'Lisandro'}
        const character2 = { id: '2', name: 'Adalberto'}
        it('Lo que envies por body debe ser devuelto en un arreglo', async()=>{
            const response =  await agent.post('/rickandmorty/fav').send(character1)
            expect(response.body).toContainEqual(character1)
        })
        it('Devuelve el elemento previamente enviado', async()=> {
            const response = await agent.post('/rickandmorty/fav').send(character2)
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        })
    })
})