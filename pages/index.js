import React from "react";
import Link from "next/link";

// import "./index.css";
// import "./App.css";

import Nav from "../components/Nav";

import Bgbottom from "../public/images/bg-bottom.svg";
import { Userform } from "../form/UserForm";
import Logo from "../public/images/logo.svg";
import Bgtop from "../public/images/bg-top.svg";

function App() {
  return (
    <div className="container h-auto relative overflow-hidden  mx-auto flex px-5 py-24 items-center justify-center flex-col bg-white">
      <div className="app ">
        <div className="flex justify-items-center  bg-yellow-500">
          <Logo />
        </div>{" "}
        <Bgtop />
        {/* <div className="img-div-bottom  object-left-bottom"> */}{" "}
        {/* <img src={Bgbottom} alt="image" /> */} <Bgbottom /> {/* </div> */}{" "}
        {/* <div className="logoBox">
                        <img src={Logo} alt="" className="logo" />
                       
                      </div> */}
        <Userform />
        <Nav />
      </div>
    </div>
  );
}

export default App;
