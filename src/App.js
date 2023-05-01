import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from './components/Series';
import Films from './components/Films';
import New from './components/New';
import List from './components/List';
import Browse from './components/Browse';

function App() {
  return (
    <>
    <BrowserRouter>


    <Navbar />

    <Routes classname="pt-10">
    <Route path='/' element={<Home/>}></Route>
      
    <Route path='/series' element={<Series />}></Route>


    <Route path='/Films' element={<Films />}></Route>


  <Route path='/new' element={<New />}></Route>


  <Route path='/list' element={<List />}></Route>


  <Route path='/browse' element={<Browse />}></Route>
     
     
     
    </Routes>
    </BrowserRouter>
 
    
    <Footer />
    </>
  );
}

export default App;


