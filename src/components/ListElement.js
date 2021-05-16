import React from 'react';
import '../styles/ListElement.css'

const ListElement = ({ countriesListData, darkMode }) => {
    

     const countryElement = countriesListData.map(country => 
     < article className={darkMode ? 'dark-elements' : 'ligth-elements'} key={country.name}>
        <div className='flag-img-container'>
            <img alt={`flag of ${country.name}`} src={`${country.flag}`}/>
        </div>
        <div className='text-wrapper'>
            <h2>{country.name}</h2>
            <p>Population: <span>{country.population.toLocaleString()}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
        </div>
    </article>)
    return ( 
    <div>
        {countryElement}
        
    </div> );
}
 
export default ListElement;