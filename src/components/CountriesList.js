import React from 'react';
import ListElement from './ListElement';
import '../styles/CountriesList.css';
const CountriesList = ({ countriesListData, countriesDataForDisplay, setCountriesDataForDisplay, darkMode, selectValue }) => {
    

    return ( 
        <div className={darkMode ? 'countries-list dark-mode' : 'countries-list light-mode'}>
            <ListElement 
                darkMode={darkMode}
                countriesListData={countriesListData}
                countriesDataForDisplay={countriesDataForDisplay}
                setCountriesDataForDisplay={setCountriesDataForDisplay}
                selectValue={selectValue}
            />
            
        </div>
     );
}
 
export default CountriesList;