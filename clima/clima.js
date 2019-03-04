const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5c1e4eb39849b5315ae8376ba2a8a44e&units=metric`)

    return resp.data.main.temp;
}

module.exports = { getClima };