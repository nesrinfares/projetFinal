import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='fotter'>

       {/*Important link source from https://bootsnipp.com/snippets/ooa9M*/}
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- Include the above in your HEAD tag --------*/}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <footer id="dk-footer" className="dk-footer" style={{backgroundColor:" #bbb6b6", color:"black",padding:"95px 0 0 "}}>
    <div className="container">
      <div className="row">
      
        <div className="col-md-12 col-lg-4">
          <div className="dk-footer-box-info" style={{marginTop: "37px",backgroundColor:"#bbb6b6", color:"black", height:"265px"}}>
            <a href="index.html" className="footer-logo">
              <img src="icon.png" alt="footer_logo" className="img-fluid" style={{maxWidth:"75%"}} />
            </a>
            <p className="footer-info-text">
              Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </p>
            <div className="footer-social-link" style={{marginTop:"-29px"}}>
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            {/* End Social link */}
          </div>
          {/* End Footer info */}
          <div className="footer-awarad">
            <img src="" alt />
          </div>
        </div>
        {/* End Col */}
        <div className="col-md-12 col-lg-8">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-us">
                <div className="contact-icon">
                  <i className="fa fa-map-o" aria-hidden="true" />
                </div>
                {/* End contact Icon */}
                <div className="contact-info">
                  <h3>Gabes</h3>
                  <p>  14 Avenue Farhatt Hached</p>
                </div>
                {/* End Contact Info */}
              </div>
              {/* End Contact Us */}
            </div>
            {/* End Col */}
            <div className="col-md-6">
              <div className="contact-us contact-us-last">
                <div className="contact-icon">
                  <i className="fa fa-volume-control-phone" aria-hidden="true" />
                </div>
                {/* End contact Icon */}
                <div className="contact-info">
                  <h3> 39 143 900</h3>
                  <p  className="p4">Give us a call</p>
                </div>
                {/* End Contact Info */}
              </div>
              {/* End Contact Us */}
            </div>
            {/* End Col */}
          </div>
          {/* End Contact Row */}
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="footer-widget footer-left-widget">
                <div className="section-heading">
                  <h3>Useful Links</h3>
                  <span className="animate-border border-black" />
                </div>
                <ul style={{color:"black",fontStyle:"italic" }}>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                </ul>
                <ul style={{color:"black" }}>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
            {/* End col */}
            <div className="col-md-12 col-lg-6">
              <div className="footer-widget">
                <div className="section-heading">
                  <h3>Subscribe</h3>
                  <span className="animate-border border-black" />
                </div>
                <p  className="p4">{/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
                  Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                <form action="#">
                  <div className="form-row">
                    <div className="col dk-footer-form">
                      <input type="email" className="form-control" placeholder="Email Address" />
                      <button type="submit">
                        <i className="fa fa-send" />
                      </button>
                    </div>
                  </div>
                </form>
                {/* End form */}
              </div>
              {/* End footer widget */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Col */}
      </div>
      {/* End Widget Row */}
    </div>
    {/* End Contact Container */}
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span>Copyright © 2023, All Right Reserved </span>
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="copyright-menu" style={{color:"black" }}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">shops</a>
                </li>
                <li>
                  <a href="#">promo</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* End col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Copyright Container */}
    </div>
   
  </footer>

    </div>
  )
}

export default Footer