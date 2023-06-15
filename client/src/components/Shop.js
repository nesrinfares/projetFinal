
import React from 'react'
import './shop.css'
import { Link } from 'react-router-dom'
function Shop() {
    
  return (
<div>

    <div className='carouselshop'>
        <img  
        src="shopcarousel.png" alt='img1' />
        <div className='text'>

        <h1>Meilleure Collection D'été</h1>
        <h3>Tendances de la nouvelle saison !</h3>
        <button> Achetez maintenant </button>
       
        </div>
    </div>
     <h1 style={{marginTop:"36px",marginLeft:"500px" , fontFamily:"cursive",fontWeight:"bold",padding:"35px"}}>Produits Populaires</h1>
    <div>
        
        <div className='shop1'>
            <div className='grpcarte'>
                <Link style={{textDecoration:"none",color:"black"}} to="/Vetements">
                <img src='https://img.freepik.com/free-photo/flat-lay-woman-style-accessories-red-knitted-sweater-checkered-shirt-denim-jeans-black-leather-boots-hat-autumn-fashion-trend-view-from-vintage-photo-camera-passport_285396-5098.jpg?w=740&t=st=1685896484~exp=1685897084~hmac=b6fab6a7c97e10b9e263241a9a3e699a8540c52e06f8265f61f08c415db2c664' alt='vetement'></img>
                <button className='btn'> voir Article </button>
                
               </Link>
                <h2 style={{marginTop:"28px",fontFamily:"cursive",fontWeight:"bold",fontStyle:'italic',fontSize:"25px"}}> VETEMENTS </h2>
               
            </div>

            <div className='grpcarte'>
               <Link style={{textDecoration:"none",color:"black"}} to="/cuisine">
                <img src='https://img.freepik.com/premium-photo/restaurant-waiter-serves-offsite-banquet-officexa_110955-1608.jpg' alt=''></img>
                <button className='btn'> voir Article </button>
                
                </Link>
                <h2 style={{marginTop:"28px",fontFamily:"cursive",fontWeight:"bold",fontStyle:'italic',fontSize:"25px"}}> CUISINS </h2>
            </div>

            <div className='grpcarte' >
                <Link to="/Electronique" style={{textDecoration:"none",color:"black"}}>
                <img src='https://img.freepik.com/premium-photo/flat-lay-top-view-traveler-accessories-white-wooden-background-dslr-action-camera-blue-headphones-passport-tripod-flash-laptop-smartphone_482257-25541.jpg?w=740' alt=''></img>
                <button className='btn'> voir Article </button>
                <h2 style={{marginTop:"28px",fontFamily:"cursive",fontWeight:"bold",fontStyle:'italic',fontSize:"25px"}}> ELECTRONIC </h2>
                </Link>
            </div>





        </div>
    </div>


















</div>

  )
}

export default Shop