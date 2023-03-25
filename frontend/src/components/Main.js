import React from 'react';
import Header from './Header';
import '../styles/main.css';
import WordleComponent from './Wordle';
import Upload from './Upload';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <hr />
            <Header cssStyle={{'height': 200}}></Header>
            <hr />
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Upload />}/>
                    <Route path = "/host" element = {<WordleComponent />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Main;