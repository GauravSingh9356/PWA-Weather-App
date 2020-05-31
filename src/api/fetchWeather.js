import axios from 'axios'

const API_KEY='ab90b6e68654598d61e3a74c2ecc16d8'
const URL='https://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
    return data;
}