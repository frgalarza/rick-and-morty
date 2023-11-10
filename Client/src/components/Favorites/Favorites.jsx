import { connect } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/action"
import { useDispatch } from "react-redux"
import { useState } from "react"
import styles from './Favorites.module.css'

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

    return <div className={styles.divFav}>
            <h1 style={{color: "#88e23b"}}>My Favorites</h1>
            <div className={styles.divSelects}>
                <select onChange={handleOrder} className={styles.select}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter} className={styles.select}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={styles.divCards}>
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
            </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites)