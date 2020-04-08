import axios from 'axios'



const url = 'https://covid19.mathdro.id/api'

export const fethcData = async (country) => {
    let changeAbleUrl = url;
    
    if(country) {
        changeAbleUrl = `${url}/countries/${country}`
    }
    try {
        // const hasil = await axios.get(url);
        // return hasil;

        const { data: { confirmed, recovered, deaths, lastUpdate} } =  await axios.get(changeAbleUrl);
        return { confirmed, recovered, deaths, lastUpdate };
       
    }
    catch (error) {
        console.log(error)
    }
}


export const fethcDailyDate = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
       const modifiedData = data.map((dailydata) => ({
           confirmed: dailydata.confirmed.total,
           deaths: dailydata.deaths.total,
           date: dailydata.reportDate,
       }))
        return modifiedData;
    } catch(error) {
        console.log(error)
    }
}

export const fethcCountries = async () => {
    try {
        const {data: { countries }} =  await axios.get(`${url}/countries`)
        return countries.map((country) => country.name);
    }
    catch (error) {
        console.log(error)
    }
}