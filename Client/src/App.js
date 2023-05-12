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

   async function login(userData) {
      try {
        const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const QUERY = `?email=${email}&password=${password}`
      const { data } = await axios (URL + QUERY)
         const { access } = data;
         setAccess(data);
         access && navigate('/home'); 
      } catch (error) {
         return {error: error.message}
      }
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async(id) => {
      try {
         const url = `http://localhost:3001/rickandmorty/character/` + id
         
         const { data } = await axios(url)
         const character = characters?.find(char => Number(char.id) === Number(data.id))
         
         if (character) {
            window.alert('Ya se ingreso el personaje que posee este id')
         }else if(data.id !== undefined){
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         } 
      } catch (error) {
         return {error: error.message}
      }
      
   };

   const onClose = (id) => {
      setCharacters(characters.filter(character => Number(character.id) !== Number(id)))
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
