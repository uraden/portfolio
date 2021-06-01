import React from 'react';
import styles from './work.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import {Link} from 'react-router-dom'

function Work() {
    return(
        <div className="container-work">

            <div  className="work-wrapper" id="work-section">
                <h1 className="react-reveal " > Work </h1>

                <div className="grid">
                
                
                <div className="react-reveal card1">
                    
                
                        <div className="card-des">
                            <img className="image--img" src="https://i.ibb.co/7C7mB7Y/yuwe.png" />
                            <div className="image--overlay">
                                <div className="image--title"> QUIZ </div>
                                <button className="btn-project" ><Link to='/quiz' style={{ textDecoration: 'none', color: 'white'}} > EXPLORE </Link> </button>
                                <p className="image--description"> You will be asked differnt questions</p>
                            </div>
                        
                        </div>
                  
                    
                </div>


                    <div className="react-reveal card">
                    
                        <div className="card-des">
                            <img className="image--img" src="https://i.ibb.co/6FkPQCq/Webp-net-resizeimage.jpg" />
                            <div className="image--overlay">
                                <div className="image--title"> OBJECT DETECTION </div>
                                <button className="btn-project"> <Link to='/detectobject' style={{ textDecoration: 'none', color: 'white'}} > EXPLORE </Link>  </button>
                                <p className="image--description"> This app will help you to detect the object</p>
                            </div>
                        
                        </div>
                    </div>



                    <div className="react-reveal card">
                    
                        <div className="card-des">
                            <img className="image--img" src="https://i.ibb.co/J5ww92t/Webp-net-resizeimage-1.jpg" />
                            <div className="image--overlay">
                                <div className="image--title"> Tic-Tac-Toe </div>
                                <button className="btn-project"> <Link to='/tictactoe' style={{ textDecoration: 'none', color: 'white'}} > EXPLORE </Link></button>
                                <p className="image--description"> You can play tic-tac-toe game here </p>
                            </div>
                        
                        </div>
                    </div>



                    <div className="react-reveal card">
                    
                    <div className="card-des">
                        <img className="image--img" src="https://i.ibb.co/zfRn4pq/Webp-net-resizeimage-2.jpg" />
                        <div className="image--overlay">
                            <div className="image--title"> GIPHY </div>
                            <button className="btn-project"> <Link to='/giphy' style={{ textDecoration: 'none', color: 'white'}} > EXPLORE </Link></button>
                            <p className="image--description"> Find the gif you like </p>
                        </div>
                    
                    </div>
                </div>
                   

                <div className="react-reveal card">
                    
                    <div className="card-des">
                        <img className="image--img" src="https://i.ibb.co/s9mrFps/Webp-net-resizeimage-3.jpg" />
                        <div className="image--overlay">
                            <div className="image--title"> Google Map </div>
                            <button className="btn-project"> <Link to='/map' style={{ textDecoration: 'none', color: 'white'}} > EXPLORE </Link></button>
                            <p className="image--description"> You can find the any distination you want with drag ad drop</p>
                        </div>
                    
                    </div>
                </div>


                   
                <div className="react-reveal card">
                    
                    <div className="card-des">
                        <img className="image--img" src="https://i.ibb.co/VNXLdHD/Webp-net-resizeimage-4.jpg" />
                        <div className="image--overlay">
                            <div className="image--title"> Drag & Drop </div>
                            <button className="btn-project"> <Link to='/dnd' style={{ textDecoration: 'none', color: 'white'}} > EXPLORE </Link></button>
                            <p className="image--description"> Drag and Drop your Tasks</p>
                        </div>
                    
                    </div>
                </div>

             


                    
                
                
                
                </div>    

                </div>   
            </div>


    )
}

export default Work;