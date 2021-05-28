import React from 'react';
import Form from './Form';
import CountriesList from './CountriesList';
import ErrorPage from './ErrorPage'

const HomePage = ({
    error,
    setError,
    darkMode,
    countriesListData,
    countriesDataForDisplay,
    setCountriesDataForDisplay,
    selectValue, 
    setSelectValue,
    inputValue,
    setInputValue
}) => {
    return ( 
        <div>
            <Form  
                setError={setError}
                darkMode={darkMode}
                countriesListData={countriesListData}
                countriesDataForDisplay={countriesDataForDisplay}
                setCountriesDataForDisplay={setCountriesDataForDisplay}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                inputValue={inputValue} 
                setInputValue={setInputValue}
            />

            {error ? <ErrorPage/> :
            
            <CountriesList 
                darkMode={darkMode}
                countriesListData={countriesListData}
                countriesDataForDisplay={countriesDataForDisplay}
                setCountriesDataForDisplay={setCountriesDataForDisplay}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
            />
}
            
            
        </div>
     );
}
 
export default HomePage;