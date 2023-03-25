import React from 'react';
import '../styles/wordle.css';
import WordleRowComponent from './WordleRow';

const WordleComponent = () => {
    return (
        <>
        <div className='frame'>
            <div className='box'>
                <WordleRowComponent word="guess" answer="CWPWC"/>
                <WordleRowComponent word="which" answer="WWWWW"/>
                <WordleRowComponent word="craze" answer="WWPWP"/>
                <WordleRowComponent word="joins" answer="WWWWC"/>
                <WordleRowComponent word="times" answer="WWCCC"/>
                <WordleRowComponent word="games" answer="CCCCC"/>
            </div>

            </div>
        </>
    );
};

export default WordleComponent;