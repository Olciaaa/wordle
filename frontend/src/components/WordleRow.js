import React from 'react';
import '../styles/wordleRow.css';
import WordleLetterComponent from './OneLetter';

const WordleRowComponent = () => {
    return (
        <>
            <div className='row'>
                <WordleLetterComponent/>
                <WordleLetterComponent/>
                <WordleLetterComponent/>
                <WordleLetterComponent/>
                <WordleLetterComponent/>
            </div>
        </>
    );
};

export default WordleRowComponent;