import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./home.css"
function Home() {
     const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
       setIndex(selectedIndex);
    };
  return (
    

  <div style={{marginTop:"20px"}}>
  <div class="pic-ctn"> 

    <img src="https://img.freepik.com/photos-premium/couple-du-moyen-orient-posant-sacs-provisions-dans-mains-fond-jaune_116547-35623.jpg?size=626&ext=jpg" style={{width:"1180px ",marginLeft:"--350",filter:"blure(0)"}} alt="" class="pic"/>
    <img src="https://img.freepik.com/photos-gratuite/femme-aux-cheveux-noirs-sourires-rouge-levres-s-appuie-support-vetements-detient-paquet-fond-rose_197531-17609.jpg?w=740&t=st=1685616352~exp=1685616952~hmac=27678a93734c53fdb922ce3e6236ff55165febc6ceef7063684a889129635b54" style={{width:"1180px ",marginLeft:"---350",filter:"blure(0)"}} alt="" class="pic"/>
    <img src="https://img.freepik.com/photos-gratuite/image-touriste-verifiant-quelque-chose-cool-lunettes-soleil-au-decollage-disent-wow-regardant-cote-impressionne_1258-159739.jpg?size=626&ext=jpg" style={{width:"1180px ",marginLeft:"---350",filter:"blure(0)"}} alt="" class="pic"/>
 

  </div>


    
<div className='container' style={{display:"flex", justifyContent:"space-around" , justifyItems:"center",width:"100%" , margin:"50px" }}> 
    <div className='class1'>
    
      <img  
          className="box1" 
          src="https://img.freepik.com/photos-gratuite/femme-aux-yeux-verts-coiffure-lumineuse-regarde-camera-surprise-pointe-ses-doigts-vers-gauche-fond-rose_197531-17561.jpg?size=626&ext=jpg"
          alt="image1"
          style={{minWidth:"100%",maxWidth:"100%",minHeight:"270px",borderRadius:"20px",maxHeight:"270px", margin:"25px"}}
        />
        
        <div className='desc1' style={{marginTop:"-273px",marginLeft:"44px", fontWeight:"bold" }}>
        <h3>Nouvelle collection</h3>
          <p>Super vente </p>
          <p>Achetez maintenant </p>
          </div>
    </div>
    <div className='class2'>
    
       <img  
          className="box2" 
          src="https://img.freepik.com/photos-premium/homme-pointant-cote-montrant-espace-copie-vierge-pour-texte-commercial-presentation-idees-souriant-joyeusement_416530-31111.jpg?size=626&ext=jpg"
          alt="image2"
          style={{minWidth:"100%",maxWidth:"100%",minHeight:"270px",maxHeight:"270px",borderRadius:"20px" , margin:"25px"}}
        />
       
        <div className='desc2' style={{marginTop:"-275px",marginLeft:"265px",marginBottom:"150px",fontWeight:"bold"}}>
        <h3>Nouvelle saison</h3>
          <p>Vente 30 % de réduction </p>
          <p>Achetez maintenant </p>
        </div>
     </div>
    </div>
   

    <h1 className='titlee'>Our Products</h1>

   <div className='main-box'>
    <>
    <Card style={{ margin:"30px", boxShadow:" 0px 0px 10px grey " , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/15702685/pexels-photo-15702685/free-photo-of-femme-pull-over-debout-visage.jpeg?auto=compress&cs=tinysrgb&w=400"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body style={{width:"250px" , height:"50px", padding:"10px" }} >
        <Card.Text>
         <h3>Pull femme </h3> 
        <p>65,00</p> 
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
        </Card.Text>
        
      </Card.Body>
    </Card>




    <Card style={{  margin:"30px"    , boxShadow:" 0px 0px 10px grey" , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&w=400"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
        <Card.Text>
        <h3>Shoes </h3>
        <p>65,00</p> 
        </Card.Text>
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
      </Card.Body>
    </Card>
  
    <Card style={{margin:"30px"    , boxShadow:" 0px 0px 10px grey " , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://www.exist.com.tn/95343-large_default/t-shirt.jpg"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
       
        <Card.Text>
          <h3>Pull homme</h3>
          <p>45,500</p>
        </Card.Text>
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
      </Card.Body>
    </Card>

    
   
    


    <Card style={{  margin:"30px"    , boxShadow:" 0px 0px 10px grey" , backgroundColor:"white"}}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
        <Card.Text>
        <h3>PC </h3>
        <p>1455,00</p> 
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </>


    <h1 className='new'> new collections </h1>


    <>
      
    <Card style={{ margin:"30px"    , boxShadow:" 0px 0px 10px grey " , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhkMfgGryS67xmItScXCvFQxiNq2VB5hXhw&usqp=CAU"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
        
        <Card.Text>
        <h3>Iphone </h3>
        <p>4555,00</p> 
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
        </Card.Text>
      </Card.Body>
    </Card>





    <Card style={{ margin:"30px"    , boxShadow:" 0px 0px 10px grey" , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://johnlewis.scene7.com/is/image/JohnLewis/tv-carousel3-070922"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
        <Card.Text>
        <h3>Tv Smart</h3>
        <p>980,00</p> 
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
        </Card.Text>
      </Card.Body>
    </Card>






  
    <Card style={{ margin:"30px"    , boxShadow:" 0px 0px 10px grey" , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1657378/pexels-photo-1657378.jpeg?auto=compress&cs=tinysrgb&w=600"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
        
        <Card.Text>
        <h3>Article deco</h3>
        <p>46,00</p> 
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
        </Card.Text>
      
      </Card.Body>
    </Card>



 
    <Card style={{ margin:"30px"    , boxShadow:" 0px 0px 10px grey " , backgroundColor:"white"}}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=400"    style={{width:" 250px" , height: "250px",borderRadius:"5px 5px 5px 5px"}} />
      <Card.Body>
       
        <Card.Text>
        <h3>Plante</h3>
        <p>35,00</p> 
        </Card.Text>
        {/* <ReactStars count={5}  size={24} activeColor="#ffd700" /> */}
      </Card.Body>
    </Card>
    </>

</div>
    



   
  



{/* brands */}

        <h1 className ="titlee" > Our Brands</h1>
        <div class="carousel-containerrr">
  <div class="carousel-slider1">
    <div class="carousel-slidee"><img src="https://www.1min30.com/wp-content/uploads/2017/04/Symbole-Zara.jpg" style={{width:"100px",height:"70px"}} alt="Zara"/></div>
    <div class="carousel-slidee"><img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://hpmbeauty.com/wp-content/uploads/2022/07/logo-website.png" style={{width:"100px",height:"70px"}} alt="HPM"/></div>
    <div class="carousel-slidee"><img src="https://www.exist.com.tn/img/exist-logo-1516979989.jpg" style={{width:"100px",height:"70px"}} alt="Existe"/></div>
    <div class="carousel-slidee"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/7a/f8/14/7af814d0-4865-7548-eb5b-b032cda2e572/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/1200x630wa.png" style={{width:"100px",height:"70px"}} alt="Jumia"/></div>
    <div class="carousel-slidee"><img src="https://mallofsousse.tn/public/storage/boutiques/November2019/sv0a2erdbe3CCSEibkrw.png" style={{width:"100px",height:"70px"}} alt="Joliesse"/></div>
    <div class="carousel-slidee"><img src="https://images.zen.com.tn/medias/folder_0/Sans_titre_8_01_f474b6acb5.png" style={{width:"100px",height:"70px"}} alt="Zen"/></div>
    <div class="carousel-slidee"><img src="https://hamedia.b-cdn.net/skin/frontend/ha_new/default/images/logo.png" style={{width:"100px",height:"70px"}} alt="Hamedi Abid"/></div>
    <div class="carousel-slidee"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkhL8i5x7oYJxFtmn_Usujg-UDfp6QgESuw&usqp=CAU" style={{width:"100px",height:"70px"}} alt="Louis Vuitton"/></div>
    <div class="carousel-slidee"><img src="https://cdn4.vectorstock.com/i/1000x1000/92/13/crystal-logo-six-pointed-blue-letters-vector-21989213.jpg" style={{width:"100px",height:"70px"}} alt="Crystal"/></div>
    <div class="carousel-slidee"><img src="https://logos-marques.com/wp-content/uploads/2022/04/iPhone-Logo-2007.png" style={{width:"100px",height:"70px"}} alt="iphone"/></div>
  </div>
</div>












</div>
  )
}

export default Home