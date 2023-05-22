
// File: src/App.js
import React from 'react';
import LandingPage from './conponents/LandingPage'
import Navbar from './conponents/Navbar';
import Map from './conponents/Map'
import ProgrammingSection from './conponents/ProgrammingSection';
import CodingCommunity from './conponents/CodingCommunity';
import Footer from './conponents/Footer';
import { Spacer } from '@chakra-ui/react';

const App = () =>  {

  
  return(
    <>
    <Navbar />
    <Spacer/>
    <CodingCommunity/>
    <Spacer/>
    <LandingPage/>
    <Spacer/>
    <ProgrammingSection/>
    <Spacer/>
    <Map/>
    <Footer />
    </>
  ) 
}

export default App;
