import GiCSS from './Giphy.module.css'
import React, {useState} from 'react'
import Axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../scroll'




function Giphy() {

const [state, setState] = useState("")
const [getstate, setgetState] = useState("")

const [othergif, setOthergif] = useState("")



  const getGiph = (e) =>{
    
      if (getstate === ""){
       alert("Giphy input must be filled out")
       return false
  }

    Axios.get(`http://api.giphy.com/v1/gifs/search?q=${getstate}&api_key=dc6zaTOxFJmzC`)
    .then((inf)=>{
      setState(inf.data.data[1].embed_url)

      let alldata = inf.data.data
      
      var result = alldata.map(person => ({ value: person.embed_url}));
    
            // var result = arr.map(person => ({ value: person.id, text: person.name }));
    
            //console.log(result.map(iimgs =>({values: iimgs.value})))
     const linksdata = result.map(ll => ll.value)
     

     setOthergif(linksdata)
     console.log(setOthergif)
    } )

  
  }
 
const handleKeyPress = e =>{

  if (e.key === 'Enter'){
    getGiph()
  }
  
}

  const inputHandler = (e) =>{
    setgetState(e.target.value)
  }

  return (
    <div className={GiCSS.Giphy}>
      <BrowserRouter>
        <ScrollToTop>
     <style>{'body { background-color: black; }'}</style>
      
      <input type="text" 
      onChange = {inputHandler}
      value = {getstate}
      className={GiCSS.input}
      placeholder="SEARCH ALL GIFS AND MEMEs HERE"
      onKeyPress={handleKeyPress}
      
      />



    <button onClick={getGiph} className={GiCSS.button}> get the gify </button>
    <div className={GiCSS.all}>
      <div className={GiCSS.main_gif}>
       <iframe src={state} data-alt={state} height="200" width="300" className={GiCSS.main_frame}> </iframe>
      </div>
     

  { /*{othergif[0]} <br /> */}

    <div className={GiCSS.all_gif}>
 <div className={GiCSS.alf_gif1}>
  {<iframe src={othergif[3] } className={GiCSS.frame} data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[4] } className={GiCSS.frame} data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[6] } className={GiCSS.frame} data-alt={othergif}>  </iframe> }
  
  </div>

  <div className={GiCSS.alf_gif2}>
  {<iframe src={othergif[7] } className={GiCSS.frame} data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[8] } className={GiCSS.frame} data-alt={othergif}>  </iframe> }
  {<iframe src={othergif[9] } className={GiCSS.frame} data-alt={othergif}>  </iframe> }
  </div>


          <div className={GiCSS.alf_gif3}>
          {<iframe src={othergif[5] } className={GiCSS.frame1} data-alt={othergif}>  </iframe> }
          {<iframe src={othergif[10] } className={GiCSS.frame1} data-alt={othergif}>  </iframe> }

          </div>
  
   </div>
   

   </div>
   </ScrollToTop>
      </BrowserRouter>
</div>
  );
}

export default Giphy;
