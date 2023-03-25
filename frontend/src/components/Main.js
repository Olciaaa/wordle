import React from 'react';
import '../styles/main.css';
import WordleComponent from './Wordle';
import Upload from './Upload';


const Main = () => {
    return (
        <div className="main">
        <WordleComponent />
        <Upload />
        </div>
    );
};

export default Main;