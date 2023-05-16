import React from 'react'
import axios from 'axios'
import { AppContext } from '../../App'
import ItemFavorites from './ItemFavorites'

const Favorites = (props) => {

  const context = React.useContext(AppContext)
 //Для добавления в корзину
  const onAddOverlay=(obj)=>{
  axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart',obj)
  context.setOverlayItems([...props.overlayItems, obj]);
  }
// Для удаление уз избранного
  const onDeleteFav=(id)=>{
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorite${id}`)
    context.setFavorites((fav)=>fav.filter(f=>f.id !== id));
    }
  

  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-2'>Избранные туры</h1>
      </div>
    <div>
      {
     props.favorites.map(obj =>{
      return(

        <ItemFavorites       
        key={obj.id}
        id={obj.id}
        myId={obj.myId}
        title={obj.title}
        description={obj.description}
        price={obj.price}
        img={obj.img
        }
        onDeleteFav={
          (id)=>{
            onDeleteFav(id)
          }
        }
        onPlus={(cartobj)=>{
          onAddOverlay(cartobj)
        }
        }
        />
      )

     })
    }
      
    </div>

    </div>

  )
}

export default Favorites