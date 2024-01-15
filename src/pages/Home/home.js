import React from 'react';
// import { useLocation } from 'react-router-dom';
import Navbarcomp from '../../components/navbarcomp';

function Home() {
// const location = useLocation();

// console.log("location", location);

    return (
      <div className="home">
        <Navbarcomp />
      </div>
    );
  }
  
  export default Home;