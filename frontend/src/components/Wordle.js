import React from 'react';
import '../styles/wordle.css';
import WordleRowComponent from './WordleRow';

const WordleComponent = () => {
    return (
        <>
        <div className='frame'>
            <div className='box'>
                <WordleRowComponent className="item item-1"/>
                <WordleRowComponent className="item item-2"/>
                <WordleRowComponent className="item item-3"/>
                <WordleRowComponent className="item item-4"/>
                <WordleRowComponent className="item item-5"/>
                <WordleRowComponent className="item item-6"/>
            </div>

            </div>
        </>
    );
};

export default WordleComponent;