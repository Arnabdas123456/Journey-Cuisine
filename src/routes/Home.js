import React from "react";
import Navbar from "../component/Navbar/Navbar";
import HomeFont from "../component/HomeFont";
import Image from "../component/Assets/A pulsating video montage of euphoric.jpg"

function Home (){
return(
<>
<Navbar/>
<HomeFont
cName="hero"
heroImg={Image}
title="Your Journey Your Story"
text="Choose Your Favourite Destination"
buttonText="Travel Plan"
url="/"
btnClass="show"
/>
</>
);
}
export default Home;