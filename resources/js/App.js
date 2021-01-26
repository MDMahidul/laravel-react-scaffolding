import React from 'react';
import Menu from "./components/menu";
import banner from "../images/banner.svg";
import  "../css/style.css";

function App() {
    return (
        <div>
            <Menu/>
            <img src={banner}/>
            <button className="normal-btn btn"> My Button </button>
        </div>
    );
}

export default App;
