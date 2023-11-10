import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   let [ id, setId ] = useState('')

   const handleChange = (event) => {
      setId( event.target.value)
   }

   const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
         agregarNoRepetidos(id)
      }
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
         <input className={styles.input} type='search' onKeyDown={handleKeyDown} onChange={handleChange} value={id} placeholder="Ingrese ID "/>
      </div>
   );
}
