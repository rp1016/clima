const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encondedURL = encodeURI(direccion);
    let dir = direccion;
    let latitud = "";
    let longitud = "";
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedURL}&key=AIzaSyCPw4wl_5FhIFlLsPYTXB-t_tOk-mgOPTg`)
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }

    return {
        direccion: direccion,
        latitud: resp.data.results[0].geometry.location.lat,
        longitud: resp.data.results[0].geometry.location.lng
    };
}

module.exports = {
    getLugarLatLng
}