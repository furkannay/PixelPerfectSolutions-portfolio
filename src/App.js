

import React from 'react';
import './App.css';
import CompanyName from './companyname';
import NavigationBar from './navigationbar'; 
import './PressStart2P-Regular.ttf'; 
import Services from './services'; 
import AboutUs from './aboutus'; 
import Footer from './footer'; 
import ContactUs from './contactus'; 






function App() {
    return (
        <div className="app">
            <NavigationBar /> 
            <CompanyName />
            <AboutUs />
            <Services />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default App;