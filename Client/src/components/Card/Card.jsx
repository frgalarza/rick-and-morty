import { addFav, removeFav } from '../../redux/action';
import styles from './Card.module.css'
import { useLocation, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { TiDelete } from 'react-icons/ti'
import { FaHeart } from 'react-icons/fa'
import { FaHeartCircleCheck } from 'react-icons/fa6'


function Card(props) {

   let [ isFav, setIsFav ] = useState(false)

   const location = useLocation()
   const pathname = location.pathname

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if(fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, []);


   const handleFavorite = (event) => {
      event.preventDefault()
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
         <div className={styles.buttons}>
            {
               isFav ? (
                  <button className={styles.buttonFav} onClick={handleFavorite}><FaHeartCircleCheck style={{color: "#FF1493", fontSize: "1.2rem"}}/></button>
               ) : (
                  <button className={styles.buttonFav} onClick={handleFavorite}><FaHeart style={{color: "#fff", fontSize: "1.2rem"}}/></button>
               )
            }
         {pathname !== '/favorites' && <button onClick={() => props.onClose(props.id)} className={styles.botonCerrar}><TiDelete style={{fontSize: '1.5rem'}}/></button>}
         </div>
         <img src={props.image} alt='' className={styles.imagen}/>
            <NavLink to={`/detail/${props.id}`} className={styles.link}>
               <h2 className={styles.nombre}>{props.name}</h2>
            </NavLink>

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