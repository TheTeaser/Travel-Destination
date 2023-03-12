import Home from './components/home/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Tours from './components/tours/Tours';
import TourDetails from './components/TourDetails/TourDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <BrowserRouter> 
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city' element={<Tours />} />
        <Route path='/city/:id' element={<TourDetails />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;