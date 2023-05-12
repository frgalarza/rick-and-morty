import axios from 'axios'

export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'

export const addFav = (character) => {
    try {
        return async(dispatch) => {
            const endpoint = 'http://localhost:3001/rickandmorty/fav';
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        };
    } 
    catch (error) {
        return {error:error.message}
    }   
};

export const removeFav = (id) => {
    try {
        return async(dispatch) => {
            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        };
    } 
    catch (error) {
        return {error: error.message}
    }
    
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}