import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
                return { ...state, myFavorites: action?.payload};
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