import React from 'react'

const Content = ({ wordData }) => {
    console.log(wordData);

    const audio = (word) => {
        return word.phonetics.map((phonetic, idx) => {
            return phonetic.audio ? <audio controls key={idx} src={phonetic.audio}></audio> : '';
        })
    }

    const meanings = (word) => {
        return word.meanings.map((meaning, idx) => {
            const partOfSpeech = <li key={idx} className="partOfSpeech">{meaning.partOfSpeech}</li>;


            const definitions = meaning.definitions.map(({definition, example = ''}, idx) => {
                const item = <li key={idx} value={idx+1} className="meaning">
                    {definition} 
                    {example && <span className="example">Exemple: {example}</span>}
                </li>

                return item;
            });

            return <ul>{[partOfSpeech, definitions]}</ul>;
        })
    }

    return ( 
        <div className="container">
            <h4>Results:</h4>
            <div className="content">
                {wordData.map((word, idx) => {
                    return (
                        <div key={idx}>
                            <div>
                                <strong className="word">{word.word}</strong>
                                <span className="phonetic">{word.phonetic}</span>
                            </div>
                            <div>
                                <h4>Pronounciation:</h4>
                                {audio(word)}
                            </div>
                            <div>
                                <h4>Meanings:</h4>
                                {console.log(meanings(word))}
                                <ul>
                                    {meanings(word)}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Content