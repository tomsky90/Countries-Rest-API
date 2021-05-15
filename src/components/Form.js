import React from 'react';
import '../styles/Form.css'
const Form = ({ setInputValue, inputValue, darkMode, selectValue, setSelectValue}) => {

    const handleSelect = (e) => {
        setSelectValue(e.target.value)
    }
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
            <select
                onChange={(e) => {handleSelect(e)}}
                value={selectValue}
                className={darkMode ? 'dark-mode dark-elements' : 'ligth-mode ligth-elements'} name='regions' id='region-select'>
                <option value='Filter by Region'> Filter by Region</option>
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