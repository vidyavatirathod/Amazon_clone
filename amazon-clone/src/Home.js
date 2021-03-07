import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home"> 
        <div className ="home-container">
        <img className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_NP._CB657651956_.jpg" alt="" />      
       <div className="home_row">
        <Product  
        id="4903850"
        title="Style for Women | Up to 70% off"
        price ={29.99}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/WRS_Dec/GW/BTF/PC/WF-372-232/186-116/1._SY116_CB413571277_.jpg"
        rating={5}
        />

        <Product  
        id="4903851"
        title="Top picks for your home"
        price ={99.99}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"
        rating={3}
        />

         <Product  
        id="4903852"
        title="For a productive home office"
        price ={39.99}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Dashboard/WFH2_GW_DC_379x304._SY304_CB661185471_.jpg"
        rating={4}
        />

         <Product  
        id="4903853"
        title="Amazon Pay | Buy Google Play recharge code now"
        price ={0.00}
        image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/GPRC/GPRC_Desktop_CC_379x304._SY304_CB659214458_.jpg"
        rating={5}
        />
       </div>

       <div className="home_row">
       <Product />
        <Product />
        <Product />
        <Product />
       </div>

       <div className="home_row">
           
       </div>
        </div>
        </div>
    )
}

export default Home
