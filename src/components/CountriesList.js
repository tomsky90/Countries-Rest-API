import React, { useState, useEffect} from 'react';
import ListElement from './ListElement';
import '../styles/CountriesList.css';
const CountriesList = ({ inputValue, selectValue, darkMode }) => {
    const [countriesListData, setCountriesListData] = useState([]);

    useEffect(() => {
        getCountriesData()
    },[])
    
    const getCountriesData = () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            if(response.ok){
                return response
            } else {
                throw Error('somthing went wrong')
            }
        })
        .then(response => response.json())
        .then(data => {
            
            setCountriesListData(data)

        })
        .catch((error => {
            console.log('sorry could not find data')
        }))
    }

    return ( 
        <div className={darkMode ? 'countries-list dark-mode' : 'countries-list light-mode'}>
            <ListElement 
                darkMode={darkMode}
                countriesListData={countriesListData}
                
            />
            
        </div>
     );
}
 
export default CountriesList;