import React from 'react';
import '../styles/header.css';
import logo from '../images/bit-logo-transparent-1000.png'

const Header = ({...props}) => {
    const style = {
        height: props.cssStyle.height
    };
    return (
        <div id = "header" style = {style}>
            <img src = {logo}  alt = "logo"></img>
            
            <h1>BIT Wordle</h1>
        </div>
    );
};

export default Header;