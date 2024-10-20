import React, { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home1 from './pages/Home/Home1';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [tableNo, setTableNo] = useState(''); // State for table number

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/cart" element={<Cart setTableNo={setTableNo} />} />
          <Route path="/order" element={<Placeorder tableNo={tableNo} />} />
          {/* Redirect any unknown routes to the Home page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
