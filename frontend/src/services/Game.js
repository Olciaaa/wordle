import axios from 'axios';

const URL = "http://localhost:4000";

const GameService = {
    sendImage: (selectedFile) => {
        const formData = new FormData();
        formData.append("image", selectedFile);
        
        return axios({
            method: 'POST',
            url: `${URL}/game/upload`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    },

    getWords: () => {
        return axios({
            method: 'GET',
            url: `${URL}/game/retrieve`,
        })
    }
}

export { GameService }
