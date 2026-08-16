import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Collections from './Pages/Collections/Collections';
import SingleProduct from './Pages/SingleProduct.jsx/SingleProduct';
// import { LuSearch } from 'react-icons/lu';


function App() {
    return (
        // <LuSearch/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/shop' element={<Shop/>}></Route>
                <Route path='/shop/:category' element={<Shop/>}></Route>
                <Route path='/shop/:category/:product_id' element={<SingleProduct/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/collections' element={<Collections/>}></Route>
                {/* <Route path='/' element={<Home/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
