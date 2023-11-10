import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './Detail.module.css'

const Detail = () => {
    const [character, setCharacter] = useState({})
    console.log('soy el character detail', character);
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <>
        <h1 className={styles.h1}>Detail</h1>
        {
            character ? (
                <div className={styles.divContenedor}>
                    <div className={styles.divMain}>
                        <h2 className={styles.h2}>{character.name}</h2>
                        <img src={character.image} alt={character.name} className={styles.img}/>
                    </div>
                    <div className={styles.divInfo}>
                        <h2><span className={styles.span}>Status: </span>{character.status}</h2>
                        <h2><span className={styles.span}>Species: </span>{character.species}</h2>
                        <h2><span className={styles.span}>Gender:</span> {character.gender}</h2>
                        <h2><span className={styles.span}>Origin: </span>{character.origin?.name}</h2>
                    </div>
                </div>
            )
             :  (
                ""
             )
        }
        </>
    )
}

export default Detail