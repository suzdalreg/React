import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'



const Info = (props) => {
//функция добавления в корзину
 const onAddOverlay=async(obj)=>{
  try{
    //проверяем есть ли в корзине это
    const findOverlay = props.overlayItems.find(objOver=>objOver.myId ===obj.myId)
  if(findOverlay){
    //если есть удаляем
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findOverlay.id}`)
    props.setOverlayItems((over)=>over.filter(o=>o.myId !== obj.myId))
  }
  else{
    //если нет в корзине добавляем
    const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart',obj)
    props.setOverlayItems([...props.overlayItems,data])
  }  
  }
  catch{
    alert('Произошла ошибка')
  }
 }

 //функция добавления в избранное
 const onAddFav=async(obj)=>{
  try{
    //проверяем есть ли в избранном это
    const findFavorites = props.favorites.find(objFav=>objFav.myId ===obj.myId)
  if(findFavorites){
    //если есть удаляем
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
    props.setFavorites((over)=>over.filter(o=>o.myId !== obj.myId))
  }
  else{
    //если нет  добавляем
    const {data} = await axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites',obj)
    props.setFavorites([...props.favorites,data])
  }  
  }
  catch{
    alert('Произошла ошибка')
  }
 }



  return (

   <div> 
    <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-4 row-cols-sm-2 text-center mt-md-4'>
    <Link exact to={'../form'}>
    <Button className='butt' variant="info"> Обратная связь </Button>
    </Link>
    </div>

 {
  props.item.map(obj=>{
  return(    
    <Item
    key={obj.id}
    id={obj.id}
    myId={obj.myId}
    title={obj.title}
    description={obj.description}
    price={obj.price}
    img={obj.img}    

    favBtn={(favObj)=>{
    onAddFav(favObj)
    }
  }
   //не понятно что это
  onPlus={(cartObj)=>{  
  onAddOverlay(cartObj)
  }}

    />
  )
  })  
 }
 </div>
  )
}

export default Info