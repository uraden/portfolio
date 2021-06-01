import React, { Component } from 'react'
import Sk from './skills.module.css'

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";




 


function Skills() {
   
    return(
        <div className={Sk.container}>
           <div className={Sk.skillscontainer} id="skills-section">
           <h1 className={Sk.hi}> Skills </h1>
           <div className={Sk.skillsgrid}>
               
               
               <div className={Sk.maincontainer}>
                    <div className={Sk.thecard}>
               
               <div className={Sk.skill}>
               <img className={Sk.skillimg} src="https://i.ibb.co/z77qNqN/html.png" alt="html" border="0" alt="html" />
               </div>
                    <div className={Sk.theback}>
                        <h1 className={Sk.h1level}> 95%</h1>
                         <p className={Sk.overallskill}> Overall Skills on HTML </p>
                         </div>

                    </div>
               </div>





               <div className={Sk.maincontainer}>
                    <div className={Sk.thecard}>
               
               <div className={Sk.skill}>
               <img className={Sk.skillimg} src="https://i.ibb.co/ctYLJrY/css.png" alt="html" border="0" alt="css" />
               </div>
                    <div className={Sk.theback}>
                        <h1 className={Sk.h1level}> 95%</h1>
                         <p className={Sk.overallskill}> Overall Skills on CSS </p>
                         </div>

                    </div>
               </div>



               <div className={Sk.maincontainer}>
                    <div className={Sk.thecard}>
               
               <div className={Sk.skill}>
               <img className={Sk.skillimg} src="https://i.ibb.co/3cjGRJJ/js.png" alt="html" border="0" alt="javascript" />
               </div>
                    <div className={Sk.theback}>
                        <h1 className={Sk.h1level}> 80%</h1>
                         <p className={Sk.overallskill}> Overall Skills on JavaScript </p>
                         </div>

                    </div>
               </div>







               <div className={Sk.maincontainer}>
                    <div className={Sk.thecard}>
               
               <div className={Sk.skill}>
               <img className={Sk.skillimg} src="https://i.ibb.co/ZKGdkFG/graphql.png" alt="html" border="0" alt="graphql" />
               </div>
                    <div className={Sk.theback}>
                        <h1 className={Sk.h1level}> 50%</h1>
                         <p className={Sk.overallskill}> Overall Skills on GraphQL </p>
                         </div>

                    </div>
               </div>





               <div className={Sk.maincontainer}>
                    <div className={Sk.thecard}>
               
               <div className={Sk.skill}>
               <img className={Sk.skillimgreact} src="https://i.ibb.co/zmJ09Bz/react.png" alt="html" border="0" alt="react" />
               </div>
                    <div className={Sk.theback}>
                        <h1 className={Sk.h1level}> 70%</h1>
                         <p className={Sk.overallskill}> Overall Skills on React JS </p>
                         </div>

                    </div>
               </div>







               <div className={Sk.maincontainer}>
                    <div className={Sk.thecard}>
               
               <div className={Sk.skill}>
               <img className={Sk.skillimgreact} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/1024px-Python_icon_%28black_and_white%29.svg.png" alt="html" border="0" alt="react" />
               </div>
                    <div className={Sk.theback}>
                        <h1 className={Sk.h1level}> 70%</h1>
                         <p className={Sk.overallskill}> Overall Skills on Python  </p>
                         </div>

                    </div>
               </div>



             


               



               </div>


                <br />

                <br />

                <br />

           </div>

        </div>
    )
}

export default Skills;