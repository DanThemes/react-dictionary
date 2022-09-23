import axios from 'axios';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const fetchWord = async (word) => {
    try {
        const { data } = await axios.get(`${API_URL}${word}`);

        return data;
    } catch (e) {
        return e.response.data.title;
    }
}

export default fetchWord;