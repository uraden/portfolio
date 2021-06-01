import Header from "./components/header";
import About from "./components/about";
import Work from "./components/work";
import Myslef from './components/myself';
import Skills from './components/skills';
import Contacts from './components/contact'


function AppComponent() {
  
  
    return (
      <div className="App">
      
      <Header/>
      <About  />
      <Work  />
      <Myslef />
      <Skills />
      <Contacts />
      
      
      </div>
    );
  }
  
  export default AppComponent;