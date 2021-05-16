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
                <button 
                className={darkMode ? 'dark-mode dark-elements' : 'ligth-mode ligth-mode-input'} 
                type='submit'>
                    <i className="fas fa-search"></i>
                </button>
                <input
                 aria-label='search'
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
                <option aria-label='option' value='Filter by Region'> Filter by Region</option>
                <option aria-label='option' value='all'>All</option>
                <option aria-label='option' value='africa'>Africa</option>
                <option aria-label='option' value='america'>America</option>
                <option aria-label='option' value='asia'>Asia</option>
                <option aria-label='option' value='europe'>Europe</option>
                <option aria-label='option' value='oceania'>Oceania</option>
            </select>
            </div>
        </form>
     );
}
 
export default Form;