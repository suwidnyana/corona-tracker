import React, {useState, useEffect } from 'react';
import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './components';
import { fethcData } from './api'

const App = () => {

    const [country, setCountry] = useState('')
    const [data, setData] = useState({})


     useEffect(() => {
       async function fetchedData() {
          const fetch = await fethcData();
            setData(fetch);
       }
       fetchedData()
      },[])
    
    const handleCountryChange = async (country) => {
        const fetchedData = await fethcData(country);
       
       

        setData(fetchedData)
        setCountry(country)
        
    }

   

        // const { data,country } = this.state;
        return (
            <div className={styles.container}>
               <Cards data={data}/>
                <CountryPicker handleCountryChange={handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
   
}

export default App;