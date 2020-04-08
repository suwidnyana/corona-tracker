import React, {useState, useEffect} from 'react';
import styles from './CountryPicker.module.css'
import { NativeSelect, FormControl} from '@material-ui/core'


import {fethcCountries} from '../../api'
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchCountries ] =  useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountries(await fethcCountries());
        }
        
        fetchAPI();
     }, [setFetchCountries]);
    return (
     <FormControl className={styles.formControl}>
         <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
             <option value="">Global</option>
    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
         </NativeSelect>
     </FormControl>
    )
}

export default CountryPicker;