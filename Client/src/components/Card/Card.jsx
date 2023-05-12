import { addFav, removeFav } from '../../redux/action';
import styles from './Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';


function Card(props) {

   let [ isFav, setIsFav ] = useState(false)

   const location = useLocation()
   const pathname = location.pathname

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      }
      else {
         setIsFav(true)
         props.addFav(props)
      }
   }

   return (
      <div className={styles.divTarjeta}>
         <img src={props.image} alt='' className={styles.imagen}/>
         <div className={styles.divDatos}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <Link to={`/detail/${props.id}`}>
               <h2 className={styles.nombre}>{props.name}</h2>
            </Link>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin.name}</h2>
            {pathname !== '/favorites' && <button onClick={() => props.onClose(props.id)} className={styles.botonCerrar}>Guardar</button>}
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)