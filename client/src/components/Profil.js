import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../JS/userSlice/userSlice';
import "./profil.css"
function Profil() {
    const user= useSelector((state)=> state.user.user);
    console.log(user)
    const navigate=useNavigate();
    const dispatch=useDispatch();
  return (
    <div>
        {/* <h1>hello {user?.name}</h1> */}
     










       
  <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ="
      crossOrigin="anonymous"
    />
    <div className="container">
      <div className="team-single">
        <div className="row">
          <div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
            <div className="team-single-img">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt=""
              />
            </div>
            <div className="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
              <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">
                developpeuse web 
              </h4>
              <p className="sm-width-95 sm-margin-auto">
                We are proud of child student. We teaching great activities and
                best program for your kids.
              </p>
              <div className="margin-20px-top team-single-icons">
                <ul className="no-margin">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="team-single-text padding-50px-left sm-no-padding-left">
              <h4 className="font-size38 sm-font-size32 xs-font-size30">
              {user?.name}
              </h4>
              <p className="no-margin-bottom">
              Une développeuse web est une professionnelle qui crée et développe des sites web, 
              des applications et d'autres solutions en ligne. Elle est responsable de la conception, 4
              du développement et de la maintenance des composants techniques nécessaires au bon fonctionnement d'un site web.
              Les développeurs web peuvent travailler sur une variété de langages de programmation tels que HTML, CSS, JavaScript, PHP, Python, Ruby, etc., en fonction des besoins spécifiques du projet.
              </p>
              <div className="contact-info-section margin-40px-tb">
                <ul className="list-style9 no-margin">
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-graduation-cap text-orange" />
                        <strong className="margin-10px-left text-orange">
                          Degree:
                        </strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>Master's Degrees</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="far fa-gem text-yellow" />
                        <strong className="margin-10px-left text-yellow">
                          Exp.:
                        </strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>5 Year in Education</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="far fa-file text-lightred" />
                        <strong className="margin-10px-left text-lightred">
                          Courses:
                        </strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>Developpement web </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-map-marker-alt text-green" />
                        <strong className="margin-10px-left text-green">
                          Address:
                        </strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>tunisie, Gabes . </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-mobile-alt text-purple" />
                        <strong className="margin-10px-left xs-margin-four-left text-purple">
                          Phone:
                        </strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>(+216) 51 13 21 94</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-md-5 col-5">
                        <i className="fas fa-envelope text-pink" />
                        <strong className="margin-10px-left xs-margin-four-left text-pink">
                          Email:
                        </strong>
                      </div>
                      <div className="col-md-7 col-7">
                        <p>
                          <a href="javascript:void(0)">nesrinhiba@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <h5 className="font-size24 sm-font-size22 xs-font-size20">
                Professional Skills
              </h5>
              <div className="sm-no-margin">
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">PHP</div>
                    <div className="col-5 text-right" style={{marginLeft:"10px"}}>40%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "40%" }}
                    className="animated custom-bar progress-bar slideInLeft bg-sky"
                  />
                </div>
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">HTML</div>
                    <div className="col-5 text-right" style={{marginLeft:"10px"}}>50%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "50%" }}
                    className="animated custom-bar progress-bar slideInLeft bg-orange"
                  />
                </div>
                <div className="progress-text">
                  <div className="row" style={{marginLeft:"10px"}}>
                    <div className="col-7">REACT JS </div>

                    <div className="col-5 text-right">60%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "60%" }}
                    className="animated custom-bar progress-bar slideInLeft bg-green"
                  />
                </div>
                <div className="progress-text">
                  <div className="row">
                    <div className="col-7">CSS</div>

                    <div className="col-5 text-right" style={{marginLeft:"10px"}}>80%</div>
                  </div>
                </div>
                <div className="custom-progress progress">
                  <div
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                    className="animated custom-bar progress-bar slideInLeft bg-yellow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12"></div>
        </div>
      </div>
    </div>
  </>
)














                    <button onClick={()=>{dispatch(logout());navigate("/")}}>logout</button>
 </div>
  )
}

export default Profil

   //  <button  onClick={() => {
        //             setTimeout(() => {localStorage.removeItem("token");
                     
        //               navigate("/logi");
        //             }, 1000);}} >logout</button> 