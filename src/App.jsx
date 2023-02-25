import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



export default function App() {
  return (
    <div>
       <div className="bg-[url('./img/bg.png')]">
        <Navbar />  
        <Hero />
        <Footer />
       </div>
    </div>
   
  )
}