import React from 'react'
import HeCSS from  './header.module.css'



import { Link } from 'react-scroll'


function Header() {
    return(
        <div className={HeCSS.container}>

            <div  className={HeCSS.navbarwrapper}>

                    <div className={HeCSS.name}> Portfolio. </div>

                    <div className={HeCSS.linkswrapper}>
                        <button className={HeCSS.btnheader} > <Link to="work-section" smooth={true} duration={1000} className={HeCSS.linkst}> Work </Link></button>
                        <button className={HeCSS.btnheader}> <Link to="aboutme-section" smooth={true} duration={1500}className={HeCSS.linkst} > About </Link></button>
                        <button className={HeCSS.btnheader}><Link to="skills-section" smooth={true} duration={1500} className={HeCSS.linkst}>  Skills  </Link>  </button>
                        <button className={HeCSS.btnheader}><Link to="contact-section" smooth={true} duration={1500} className={HeCSS.linkst} >  Contact  </Link>  </button>

                    </div>
                    
            </div>



        </div>
    )
}

export default Header;
