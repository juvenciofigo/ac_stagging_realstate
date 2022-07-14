import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '7b0657fe30mshc62384462cb3407p1c2ac9jsnd0b2c929c51c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    }) 
    return data
} 