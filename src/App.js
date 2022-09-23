import React, { useEffect, useState } from 'react';
import fetchWord from './apis/dictionaryApi';
import Content from './components/Content';
import Header from './components/Header';
import './app.css';

const App = () => {
    const [word, setWord] = useState('');
    const [wordData, setWordData] = useState({});

    useEffect(() => {
        if (word) {
            const fetch = async () => {
                const data = await fetchWord(word);

                setWordData(data);
            };
            
            fetch();
        }
    }, [word])

    return (
        <div className="wrapper">
            <Header setWord={setWord} />
            {wordData.length && <Content wordData={wordData} />}
        </div>
    )
}

export default App