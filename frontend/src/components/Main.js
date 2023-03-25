import React from 'react';
import Header from './Header';
import '../styles/main.css';

const Main = () => {
    return (
        <div className="main">
            <hr></hr>
            <Header cssStyle={{'height': 200}}></Header>
            <hr></hr>
        </div>
    );
};

export default Main;