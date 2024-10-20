import React, { useState } from 'react';
import './Home1.css'
import Header from '../../Components/Header/Header';
import Exploremenu from '../../Components/Exploremenu/Exploremenu';
import Fooddisplay from '../../Context/Fooddisplay/Fooddisplay';
const Home1 = () => {
    const [category,setCategory]=useState("All");
    return (
        <div>
            <Header/>
            <Exploremenu category={category} setCategory={setCategory}/>
            <Fooddisplay category={category}/>
        </div>
    );
}

export default Home1;
