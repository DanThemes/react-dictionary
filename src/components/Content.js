import React from 'react'

const Content = ({ wordData }) => {
    console.log(wordData)
    return ( 
        wordData && (
            <div>
                Results for word: <span>{wordData[0].word}</span>
                {/* <span>{wordData[0].phonetic}</span> */}
            </div>
        )
    )
}

export default Content