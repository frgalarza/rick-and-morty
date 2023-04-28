import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = (props) => {
    const { onSearch, characters } = props

 return(
    <div className={styles.nav}>
        <div className={styles.divMenu}>
            <button className={styles.btnFlex}>
                <div className={styles.divFlex}></div>
                <div className={styles.divFlex}></div>
                <div className={styles.divFlex}></div>
            </button>
            <NavLink to='/about'>
                <button className={styles.btns}>About</button>
            </NavLink>
            <NavLink to='/home'>
                <button className={styles.btns}>Home</button>
            </NavLink>
            <NavLink to='/favorites'>
                <button className={styles.btns}>To Favorites</button>
            </NavLink>
        </div>
        <SearchBar onSearch={onSearch} characters={characters}/>
    </div>
 )
}

export default Nav