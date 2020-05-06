import React, {useState, useEffect} from 'react';
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Placeholder from "./Placeholder";
import Card from "./Card";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as instaLogo from "./instagram.json";
function App() {
//Loading will hold the state information and execute the Card after the timeout.
const [loading, setLoading]=useState(false);
const instagram = {
  loop: false,
  autoplay: true,
  animationData: instaLogo.default,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
  }
//Correct way to use fetch with use effect.
useEffect(()=>{
    setTimeout(()=>{
        const fetcheddata = async() =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            setLoading(response);     
          }
             fetcheddata();
    },3000);
   
},[]);

return (
  <div className="App">
    <header className="App-header">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="card shadow-lg p-3">
          <div style={{ width: "317.75px" }}>
            {!loading ? (
              <>
                <Placeholder />
                <Placeholder />
                <Placeholder />
              </>
            ) : (
              <FadeIn>
                <Card
                  song={"God's Plan"}
                  artist={"Drake"}
                  image={
                    "https://i.pinimg.com/originals/e3/f2/0f/e3f20f0243a2102b5d8de3c7d44bcc14.jpg"
                  }
                />
                <Card
                  song={"One Dance"}
                  artist={"Drake"}
                  image={
                    "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"
                  }
                />
                <Card
                  song={"Hotline Bling"}
                  artist={"Drake"}
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png"
                  }
                />
              </FadeIn>
            )}
          </div>
        </div>
          <FadeIn>
            <div>
            <br/>
                Follow me on Instagram for more.
                <a href="https://www.instagram.com/yeahthatnerd">
                <Lottie options={instagram} height={80} width={80} />
                </a>
            </div>
            </FadeIn>
      </div>
    </header>
  </div>
);
}

export default App;
