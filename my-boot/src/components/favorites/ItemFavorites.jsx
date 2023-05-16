import React,{useState} from 'react'

const ItemFavorites = (props) => {
  

  const [added,setAdded]= useState(false)  

  const onClickAdd=()=>{
      setAdded(!added);
      let id = props.id;
      let myId = props.myId;
      let title= props.title;
      let description = props.description;
      let price = props.price;
      let img = props.img;
      props.onPlus({title, description, price, img,id, myId});
  }

  const onDelete = ()=>{
    props.onDeleteFav(props.id)
  }

  return (
    <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-4 row-cols-sm-2 text-center'>
            <div className='col px-3 py-3'>
                <div className='card md-6 rounded'>
                    <div className='card-header py-2 px-3'>                     
                        <button type='button' className='w-80 btn  btn-primary' onClick = {onDelete}>
                           X
                        </button>
                       
                        <p>{props.description}</p>                        
                        <img className='rounded' src={props.img} width={'45%'}></img>
                        <p>{props.title}</p>
                        <p>{props.price}</p>
                        <div>
                          <button type='button' className='w-100 btn btn-lg btn-primary' onClick ={onClickAdd}>
                            { added ?
                            <img width ={15} src={added ?'/img/icon.png':''}
                            alt=""/>: 'Добавить в корзину'
                             }                          
                          </button>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
  )
}

export default ItemFavorites