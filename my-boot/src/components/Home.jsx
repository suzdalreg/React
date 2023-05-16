import React from 'react'
import Info from './cart/Info';
import Slider from './Slider';

const Home = (props) => {
  return (
    <div>
          <Slider></Slider>
          <Info 
          item = {props.item} 
          overlayItems={props.overlayItems}
          setOverlayItems={props.setOverlayItems}
          favorites={props.favorites}
          setFavorites={props.setFavorites}
          />
    </div>
  )
}

export default Home