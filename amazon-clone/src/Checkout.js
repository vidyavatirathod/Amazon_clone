import React from 'react'
import "./Checkout.css"
import CheckouttProduct from './CheckouttProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="checkout">
        <div className ="checkout_left">
        <img className ="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/nobranding/400x39-SWM_With-Disclaimer_np._CB415424805_.jpg" alt="" />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your shopping basket</h2>
                 {basket.map(item =>(
                     <CheckouttProduct
                     id ={item.id}
                     title ={item.tilte}
                     image = {item.image}
                     price ={item.price}
                     rating = {item.rating}
                     />
                 ))}
            </div>
            </div>
            <div className ="checkout_right">
            <Subtotal />
             
        </div>   
        </div>
    )
}

export default Checkout
