import React from 'react';
import './App.css';
import HomeHeader from './Components/HomeHeader'
import SearchForm from './Components/SearchForm'
import HomeFeature from './Components/HomeFeature'
import HomeWhy from './Components/HomeWhy'
import HomeNews from './Components/HomeNews'
import HomeOccasion from './Components/HomeOccasion'
import Footer from './Components/Footer'
import FooterBottom from './Components/FooterBottom'

function App() {
  return (
    <div className="App">
          <HomeHeader />
          <SearchForm />
          <HomeFeature />
          {
            // <HomeFeature2 />
          }
          <HomeWhy />
          <HomeNews />
          <HomeOccasion />
          <Footer />
          <FooterBottom />
    </div>
  );
}

export default App;
