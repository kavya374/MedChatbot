import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar'; 
import Body from './Components/Body/Body';
function App() {
  return (
    <div>
      <Navbar />
      <Body activeTab="home" />

    </div>
  );
}

export default App; 
