import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   let [ id, setId ] = useState('')

   const handleChange = (event) => {
      setId( event.target.value)
   }

   const agregarNoRepetidos = (id) => {
      let esta = false
      props.characters.map(character => {
         if(character.id === Number(id)) esta = true
      })
      if(!esta) {
         props.onSearch(id); 
         setId('')
      }
      else setId('')
   }

   return (
      <div className={styles.divInput}>
         <input className={styles.input} type='search' onChange={handleChange} value={id} placeholder="Ingrese ID "/>
         <button onClick={() => agregarNoRepetidos(id)} className={styles.btn}>Ir</button>
      </div>
   );
}
