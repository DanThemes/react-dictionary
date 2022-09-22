import React, { useEffect, useState } from 'react';
import fetchWord from './apis/dictionaryApi';
import Content from './components/Content';
import Header from './components/Header';

const App = () => {
    const [word, setWord] = useState('star');
    const [wordData, setWordData] = useState({});

    useEffect(() => {
        if (!word) return;

        const fetch = async () => {
            const data = await fetchWord(word);

            setWordData(data);
        };
        
        fetch();
    }, [])

    return (
        <div>
            {/* {console.log(wordData)} */}
            <Header setWord={setWord} />
            <Content wordData={wordData} />
        </div>
    )
}

export default App