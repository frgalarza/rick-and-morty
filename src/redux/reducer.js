import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            let filterPersonajes = [...state.allCharacters, action.payload]
            return {
                ...state,
                myFavorites: filterPersonajes,
                allCharacters: filterPersonajes
            }
        case REMOVE_FAV:
            let deletePersonaje = state.myFavorites.filter(personaje => personaje.id !== Number(action.payload))
            return{
                ...state,
                myFavorites: deletePersonaje,
                allCharacters: deletePersonaje
            }
        case FILTER:
            let personajeGenero = state.allCharacters.filter(personaje => personaje.gender === action.payload)
            return {
                ...state,
                myFavorites: personajeGenero
            }
        case ORDER:
            let orderPersonaje = state.allCharacters.sort((a,b) => {
                if(action.payload === 'A') {
                    if(a.id>b.id) return 1
                    if(a.id<b.id) return -1
                    else return 0
                }
                else {
                    if(a.id>b.id) return -1
                    if(a.id<b.id) return 1
                    else return 0
                }
            })
            return{
                ...state,
                myFavorites: orderPersonaje
            } 
        default: return {...state}
    }
}

export default reducer