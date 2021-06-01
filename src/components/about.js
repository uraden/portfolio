import React from 'react'
import styles from './about.css'


function About() {
   
   
    return(
        <div className="container">
            <div className="header-wrapper"> 
                <h2 className='react-reveal'>
                    "hi,  I am jamal "
                    <span role="img" aria-label="Emoji">👋</span>
                </h2>
                <br/>

                <div className="react-reveal heading-wrapper">
                    <h1 className="head-disc1">  front-end developer</h1>
                    <h1 className="head-disc2"> building web applications</h1>
                    <h1 className="head-disc3"> and experience</h1>
                </div>

                <p className="react-reveal basic-bio">self-taught and experienced front-end developer who is comfortable working with JavaScript, HTML, CSS, React, and GraphQL to deliver exceptional customer experiences.</p>

                <a href="mailto:jamol.fakhriddinov@gmail.com" className="react-reveal primary-btn" target="_blank" rel="noreferrer" >CONNECT WITH ME</a>

            </div>
        </div>
    )
}

export default About;
