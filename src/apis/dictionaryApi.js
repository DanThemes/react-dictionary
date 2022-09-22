import axios from 'axios';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const fetchWord = async (word) => {
    try {
        const response = await axios.get(`${API_URL}${word}`);
        const { data } = await response;

        // console.log(data);
        return data;
    } catch (e) {
        console.log(e);
    }
}

export default fetchWord;