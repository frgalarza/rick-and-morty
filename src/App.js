import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   // Estados locales
   let [ characters, setCharacters ] = useState([]) //Personajes
   let [ access, setAccess ] = useState(false)
   //Simulacion base de datos
   const EMAIL = 'francig4444@gmail.com'
   const PASSWORD = '23deEnero'

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){ 
         setAccess(true)
         navigate('/home')
      }
      else window.alert('Usuario y/o contraseña incorrecta')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== Number(id)))
   }

   return (
   <div className='App'>
      { location.pathname !== '/' && <Nav characters={characters} onSearch={onSearch} /> }
      <Routes>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/detail/:id' element={<Detail/>} />
         <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
   </div>      
   );
}


export default App;
