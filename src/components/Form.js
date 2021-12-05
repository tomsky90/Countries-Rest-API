import React, {useEffect} from 'react';
import '../styles/Form.css'
const Form = ({ setInputValue, setError, inputValue, darkMode, selectValue, setSelectValue, countriesListData,setCountriesDataForDisplay, countriesDataForDisplay }) => {

    const handleSelect = (e) => {
        setSelectValue(e.target.value)
    }
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    
    useEffect(() => {
        const searchText = selectValue.toLowerCase()
        if(selectValue === 'all' || selectValue === 'Filter by Region'){
            setCountriesDataForDisplay(countriesListData)
        } else{
            setCountriesDataForDisplay(countriesListData.filter(country => country.region.toLowerCase().includes(searchText)))
        }
    
    }, [selectValue])

    useEffect(() => {

        if(inputValue ===''){
            setCountriesDataForDisplay(countriesListData)
            setError(false)
        } else{
            const searchCountry = inputValue.toLowerCase()
            setCountriesDataForDisplay(countriesListData.filter(country => country.name.toLowerCase().includes(searchCountry)))

            setSelectValue('Filter by Region')
            
            if(countriesDataForDisplay.length <= 0 ){
                setError(true)
            } else if(countriesDataForDisplay.length >= 0 ){
                setError(false)
            }
        }
        
        
    
    }, [inputValue])

    return ( 
        <form className={darkMode ? ' dark-mode' : ' ligth-mode'}>
            <div className='input-wrapper'> 
                
                    <i className={darkMode ? 'fas fa-search dark-mode dark-elements' : 'fas fa-search ligth-mode ligth-elements'}></i>
            
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
                <option aria-label='option' value='americas'>Americas</option>
                <option aria-label='option' value='asia'>Asia</option>
                <option aria-label='option' value='europe'>Europe</option>
                <option aria-label='option' value='oceania'>Oceania</option>
            </select>
            </div>
        </form>
     );
}
 
export default Form;