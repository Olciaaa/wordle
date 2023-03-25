import React from 'react';
import '../styles/wordleLetter.css';

const WordleLetterComponent = ({color, letter, ...props}) => {
    return (
        <>
            <div className='letter' style={{backgroundColor: color}}>
                {letter.toUpperCase()}
            </div>
        </>
    );
};

export default WordleLetterComponent;