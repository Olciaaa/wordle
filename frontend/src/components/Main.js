import React from 'react';
import Header from './Header';
import '../styles/main.css';
import WordleComponent from './Wordle';
import Upload from './Upload';


const Main = () => {
    return (
        <div className="main">
            <hr />
            <Header cssStyle={{'height': 200}}></Header>
            <hr />
            <WordleComponent />
            <Upload />
        </div>
    );
};

export default Main;