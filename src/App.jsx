import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
// import AboutUs from './pages/About us';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            {/* <AboutUs /> */}
            {/* Other components can go here */}
            <Footer />

        </div>
    );
};

export default App;
