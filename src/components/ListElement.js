import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListElement.css';

const ListElement = ({  countriesDataForDisplay, darkMode }) => {

     const countryElement = countriesDataForDisplay.map(country => 
     < article className={darkMode ? 'dark-elements' : 'ligth-elements'} key={country.name}>
            <img className='flag-img' alt={`flag of ${country.name}`} src={`${country.flag}`}/>
        <div className='text-wrapper'>
            <Link to={`/${country.alpha3Code}`}><h2 className={darkMode ? 'dark-elements' : 'ligth-elements'}>{country.name}</h2></Link>
            <p>Population: <span>{country.population.toLocaleString()}</span></p>
            <p>Region: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
        </div>
    </article>)
    return ( 
    <div className='countries-wrapper'>
        {countryElement}
    </div> );
}
 
export default ListElement;