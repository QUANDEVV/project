import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from './pages/Series';
import Films from './pages/Films';
import New from './pages/New';
import List from './pages/List';
import Browse from './pages/Browse';

import Enter from './pages/Enter';
import LandingPage from './pages/LandingPage';
import React, { useState } from 'react'; // import the useState hook from React

function App() {
  const [selectedProfile, setSelectedProfile] = useState(
    JSON.parse(localStorage.getItem('selectedProfile'))
  );

  const setProfile = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem('selectedProfile', JSON.stringify(profile));
  };

  return (
    <>
      {!selectedProfile ? (
        <LandingPage setProfile={setProfile} />
      ) : (
        <>
          <BrowserRouter>
            <Navbar />
            <Routes className="pt-10">
              <Route path='/' element={<Home />}></Route>
              <Route path='/Enter' element={<Enter />}></Route>
              <Route path='/series' element={<Series />}></Route>
              <Route path='/Films' element={<Films />}></Route>
              <Route path='/new' element={<New />}></Route>
              <Route path='/list' element={<List />}></Route>
              <Route path='/browse' element={<Browse />}></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
