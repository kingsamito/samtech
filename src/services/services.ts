import axios from "axios";


const getParam = (query:string) => {
    return {
        method: 'GET',
        url: 'https://youtube-v2.p.rapidapi.com/search/',
        params: {
            query: query, //i can use just query instead of query:query cos dey have same varaible name
            lang: 'en',
            order_by: 'this_year',
            country: 'us'
        },
        headers: {
            'X-RapidAPI-Key': 'e9e6ff7b49mshe3d7e3710341df8p17b2d6jsnde64eeb109ab',
            'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
        }
    }
}

const options = getParam("popular programming courses")

export const getSearch = async () => {
    try {
        const response = await axios.request(options);
        return response.data.videos;
    } catch (error) {
        console.error(error);
    }
}




