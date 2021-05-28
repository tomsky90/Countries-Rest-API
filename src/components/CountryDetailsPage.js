/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/CountryDetailsPage.css'

const CountryDetailsPage = ({ match, darkMode, countriesListData }) => {

const [countryDetails, setCountryDetails] = useState({
    currencies: [],
    languages: [],
    borders: [],
    population: ''
});


    

    useEffect(() => {
        getCountryDetails()

    }, [match])

   
    
    const getCountryDetails = async () => {
        await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.alpha3Code}`)
        .then(response => response.json())
        .then(data => {
            setCountryDetails(data)
        })
    }
       

    return ( 
        <div className='detail-page'>
            <Link className={darkMode ? 'home-link dark-elements' : 'home-link ligth-elements' } to='/'> <i className={'fas fa-long-arrow-alt-left '}></i> Back</Link>

        

         <section key={Math.random() * 999000} >
            <img alt={`flag of ${countryDetails.name}`} src={`${countryDetails.flag}`}/>
            <h1>{countryDetails.name}</h1>
            <p>Native Name: <span>{countryDetails.nativeName}</span></p>
            <p>Population: <span>{countryDetails.population.toLocaleString()}</span></p>
            <p>Region: <span>{countryDetails.region}</span></p>
            <p>Sub Region: <span>{countryDetails.subregion}</span></p>
            <p>Capital: <span>{countryDetails.capital}</span></p>
            <p className='add-space'>Top Level Domain: <span>{countryDetails.topLevelDomain}</span></p>
            <p>Currencies: {countryDetails.currencies.map(currency => <span key={Math.random() * 999000}>{`${currency.name}`}</span>)} </p>
            <p>Languages: {countryDetails.languages.map(language => <span key={Math.random() * 999000}>{`${language.name}, `}</span>)}          </p> 

        <div className='borders-btn-container'>
             <h4>Border Countries:</h4>

            {                                                                                                         
    
            countryDetails.borders.map(border => {
               
                const displayedCountry = countriesListData.filter((country) => country.alpha3Code === border)

                const name = displayedCountry.map(country => country.name)
                const id = displayedCountry.map(country => country.alpha3Code)
            
        
             

            return(
                    <Link to={`/countriesList/${id}`}  id={id}
                    className={darkMode ? 'border-country dark-elements' : 'border-country ligth-elements' }
                    key={Math.random() * 999000}>
                    
                    {name}
                    </Link>
                )

            }
            )}
    
      
            </div>
 



            </section>

        
            
        </div>
        
     )
    
}
 
export default withRouter(CountryDetailsPage);
