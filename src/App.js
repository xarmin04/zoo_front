import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"

import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Education from './Pages/Education';
import Login from './Pages/Login';
import TermsAndCondition from './Pages/TermAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ContactUs from './Pages/ContactUs';
import Hotel from './Pages/Hotel';
import ZooTickets from './Pages/ZooTickets';
import Maps from './Pages/Maps';
import { useTheme } from './Context/Themecontext';
import BasketPage from './Pages/BasketPage.js'
import Animals from './Pages/Animals.js';

function App() {
  const { theme } = useTheme();
  return (
    
    <div className={`App ${theme}`}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/AboutPage' element={<AboutPage/>}/>
        <Route path='/Education' element={<Education/>}/>   
        <Route path="/Login" element={<Login/>} />
        <Route path='/Terms&Condition' element={<TermsAndCondition/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path= '/Hotel' element={<Hotel/>}/>
        <Route path= '/ZooTickets' element={<ZooTickets/>}/>
        <Route path= '/Maps' element={<Maps/>}/>
        <Route path='/Basket' element={<BasketPage/>}/>
        <Route path='/Animals' element={<Animals/>}/>
      </Routes>

  
    </div>

  );
}

export default App;
