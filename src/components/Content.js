import React from 'react'

const Content = ({ wordData }) => {
    // console.log(wordData);

    const audio = (word) => {
        return word.phonetics.map((phonetic, idx) => {
            const country = phonetic.audio.split(`${word.word}-`)[1]?.split('.')[0].toUpperCase();

            return (
                phonetic.audio ? 
                    <div className="pronounciation" key={idx}>
                        <p className="country">{country || ''}</p>
                        <audio controls src={phonetic.audio}></audio>
                    </div>
                : ''
            );
        })
    }

    const meanings = (word) => {
        return word.meanings.map((meaning, idx) => {
            const partOfSpeech = <li key={idx} className="partOfSpeech">Part of speech: {meaning.partOfSpeech}</li>;

            const definitions = meaning.definitions.map(({definition, example = ''}, idx) => {
                const item = <li key={idx} value={idx+1} className="meaning">
                    {definition} 
                    {example && <span className="example">Exemple: {example}</span>}
                </li>

                return item;
            });

            return <ul key={idx}>{[partOfSpeech, definitions]}</ul>;
        })
    }

    return ( 
        <div className="container">
            <h4>Results:</h4>
            <div className="content">
                {typeof wordData == 'string' && <p>{wordData}</p>}
                {typeof wordData == 'object' && wordData.map((word, idx) => {
                    return (
                        <div key={idx} className="wordWrapper">
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
                                {/* {console.log(meanings(word))} */}
                                <div className="meaningsWrapper">
                                    {meanings(word)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Content