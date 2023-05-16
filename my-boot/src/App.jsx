import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import'./App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Favorites from './components/favorites/Favorites';
import Home from './components/Home';
import Description from './components/Description';
import Form from './components/Form';
import React from 'react';
import Basket from './components/basket/Basket';

export const AppContext = React.createContext({})

function App() {
  //сами туры
  const [turs, setTyrs] = useState([]) 
  //избранное
  const [favorites, setFavorites] = useState([]) 
  //корзина
  const [overlayItems, setOverlayItems] = useState([])
useEffect (()=>{
 async function axiosData(){
   const turData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/tyrs')
   const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
   const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')

   setTyrs(turData.data)
   setFavorites(favoritesData.data)
   setOverlayItems(cartData.data)
 }
 axiosData();
},[])
  
 const deleteItems =(id)=>{
  //удаление из базы
  axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
  //обновление корзины после удаления из базы
  setOverlayItems((objDelete)=>objDelete.filter(item=> item.id !== id))
 }

 const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=>objIsAdded.myId === myId)
 }

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}


  return (
    <AppContext.Provider
    value={
      {
        turs,
        setTyrs,
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        isAdded,
        isFav
      }
    }>
    <div>
      <Router>        
        <Header/>
          <Routes>
             <Route path='/favorites'
             element={
             <Favorites
             favorites={favorites}
             setFavorites={setFavorites}
             item ={turs}
             overlayItems={overlayItems}
             setOverlayItems={setOverlayItems}             
             />
             }
             />
             <Route path='/'
             element={
              <Home
               item ={turs}
               overlayItems={overlayItems}
               setOverlayItems={setOverlayItems} 
               favorites={favorites}
               setFavorites={setFavorites}              
              />  
             }
             />
              <Route path='/desc'
             element={
              <Description/> 
             }
             />
              <Route path='/form'
             element={
              <Form />  
             }
             />
                <Route path='/cart'
             element={
              <Basket
              totalPrice={
                overlayItems.reduce((element = overlayItems.length,obj)=> element+obj.price,0)
              }
              overlayProp = {overlayItems}
              deleteItems={deleteItems}            
              />  
             }
             />
                    
          </Routes>
      </Router>
       <Footer/>
    </div>
     </AppContext.Provider>
  );
}

export default App;
