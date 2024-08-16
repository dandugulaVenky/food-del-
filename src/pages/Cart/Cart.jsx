import './Cart.css'
import { food_list } from './../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from './../../context/StoreContext';

const Cart = () => {

  const {cardItems,food_list,removeFromCart} = useContext(StoreContext);




  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cardItems[item._id]>0)
            {
              return (
               <div>
                 <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cardItems[item._id]}</p>
                <p>${item.price*cardItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
               </div>
              )
            }
        })}
      </div>

    </div>
  )
}

export default Cart