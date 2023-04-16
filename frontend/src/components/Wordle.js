import React, { useEffect, useState, useMemo } from 'react';
import '../styles/wordle.css';
import WordleRowComponent from './WordleRow';
import { GameService } from '../services/Game';

const WordleComponent = () => {

    const [words, setWords] = useState([]);
    const [answers, setAnswers] = useState([]);

    const retrieveWords = () => {
        GameService.getWords().then((res) => {
            setWords(res.data.words);
            setAnswers(res.data.answers);
        })
    }

    useEffect(() => {
        retrieveWords();
        const interval = setInterval(() => {
            retrieveWords();
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    const wordleRows = useMemo(() => {
        const components = [];
        for(let i = 0; i < words.length; i++) {
            components.push(
                <WordleRowComponent word={words[i]} answer={answers[i]}/>
            )
        }
        return components;
    }, [words, answers]);
    
    return (
        <div className='frame'>
            <div className='box'>
                {wordleRows}
            </div>
        </div>
    );
};

export default WordleComponent;