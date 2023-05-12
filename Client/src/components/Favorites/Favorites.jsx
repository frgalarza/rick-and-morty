import { connect } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/action"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Favorites = (props) => {
    let [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
            <h1>My Favorites</h1>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                props.myFavorites?.map(personaje => {
                    return (
                        <Card
                        key = {personaje.id}
                        id = {personaje.id}
                        name={personaje.name}
                        status={personaje.status}
                        species={personaje.species}
                        gender={personaje.gender}
                        origin={personaje.origin}
                        image={personaje.image}
                        />
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites)