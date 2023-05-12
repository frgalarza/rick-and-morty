import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   let { characters, onClose } = props

   return <div className={styles.divContenedor}>
      {characters?.map(personaje => {
         return(<Card 
            key = {personaje.id}
            id = {personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin}
            image={personaje.image}
            onClose={onClose}
         />)
      })}
   </div>;
}
