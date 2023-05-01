import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Series from './pages/Series';
import Films from './pages/Films';
import New from './pages/New';
import List from './pages/List';
import Browse from './pages/Browse';

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


