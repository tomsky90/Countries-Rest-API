import React from 'react';
import '../styles/Form.css'
const Form = ({ setInputValue, inputValue, darkMode}) => {

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }
    return ( 
        <form className={darkMode ? 'dark-mode' : 'ligth-mode'}>
            <div className='input-wrapper'> 
                <button className={darkMode ? 'dark-mode dark-elements' : 'ligth-mode ligth-mode-input'} type='submit'>
                <i className="fas fa-search"></i>
                </button>
                <input
                className={darkMode ? 'dark-mode dark-elements' : 'ligth-mode ligth-elements'}
                 placeholder= ' Search for a country...' 
                 type='text' 
                 value={inputValue} 
                 onChange={(e) => {handleInputValue(e)}} />
            </div>
            <div className='select-wrapper'>
            <select className={darkMode ? 'dark-mode dark-elements' : 'ligth-mode ligth-elements'} name='regions' id='region-select'>
                <option value='' selected> Filter by Region</option>
                <option value='all'>All</option>
                <option value='africa'>Africa</option>
                <option value='america'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
            </div>
        </form>
     );
}
 
export default Form;