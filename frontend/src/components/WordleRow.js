import React from 'react';
import '../styles/wordleRow.css';
import WordleLetterComponent from './OneLetter';

const assignColor = (letter) => {
    switch (letter) {
        case "C": return "#00874B"
        case "P": return "#D62429"
        case "U": return "#151515"
        default: return "#3a3a3c"
    }
}

const WordleRowComponent = ({ word, answer, ...props }) => {
    const letters = word.split("")
    const colors = answer.split("").map(assignColor)

    const genLetterComponents = () => {
        const letterComponents = [];
        for(let i = 0; i < letters.length; i++){
            letterComponents.push(<WordleLetterComponent key={i} color={colors[i]} letter={letters[i]} />)
        }
        return letterComponents
    }

    return (
        <>
            <div className='row'>
                {genLetterComponents()}
            </div>
        </>
    );
};

export default WordleRowComponent;