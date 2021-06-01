import React from 'react'
import styles from './contact.css'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

  import { FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa'
  import { FiMail } from 'react-icons/fi'

  import { AiOutlinePhone } from 'react-icons/ai'
  

 




  const sty = [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0dfe0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a8a9a8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#5b5b5a"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]





function Contacts() {
    
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={9.6}
          defaultCenter={{ lat: 25.04217, lng: 121.53907 }}
          options={{
            styles: sty,
        }}
        >
          
        </GoogleMap>
      ));

    
    return(
        <div className="container-contact" id="contact-section">
                <h2 className="contact-word"> Contact </h2>
    <div className="map">    
        <div style={{
            position: "relative",
            width: "90%",
            height: "400px"}}>
                <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBPw4j4K0XHmpgaJDOqZutp2Umt3NffghQ&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                />
    
        </div>
    </div>

    <div className="skill-wrapper"> 
    <div className="social-media">

        <div className="em-icon">   <a  href="mailto:jamol.fakhriddinov@gmail.com" className="link-black email-tag" >< FiMail size="3em"/> </a>   </div> 
       <div className="tw-icon"> <a className="link-black fb-tag" href="https://www.facebook.com/jamal.fakhriddinov/" target="_blank"> < FaFacebook size="3em"/></a>  </div>
        <div className="tg-icon"> <a className="link-black tg-tag" href="https://t.me/jamalfkh" target="_blank"> < FaTelegram size="3em"/> </a> </div>
        <div className="li-icon"> <a className="link-black li-tag" href="https://www.linkedin.com/in/jamol-fakhriddinov/" target="_blank"> < FaLinkedin size="3em"/> </a> </div>

        <div className="li-icon"> <a className="link-black phone-tag" href="tel:+886905480765" alt="+886905480765"> < AiOutlinePhone size="3em"/> </a> </div>
        

    </div>
    </div>

            </div>


    )
}

export default Contacts;