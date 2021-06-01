import React, { useState, useEffect }from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import CountryDetailsPage from'./components/CountryDetailsPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [error, setError] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('Filter by Region')
  const [countriesListData, setCountriesListData] = useState([]);
  const [countriesDataForDisplay, setCountriesDataForDisplay] = useState([]);
  

    useEffect(() => {
        getCountriesData()
    },[])

  
    
    const getCountriesData = async () => {
     
        await fetch('https://restcountries.eu/rest/v2/all')
        .then(response => {
          if(response.ok){
            return response
          } 
          else {
            throw Error('somthing went wrong')
          }
        })
      .then(response => response.json())
      .then(data => {
        setCountriesListData(data)
        setCountriesDataForDisplay(data)
        setError(false)
      })
      .catch(error => {
        setError(true)
        setCountriesDataForDisplay([])
      })
      
    }

  
      

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className={darkMode ? 'App dark-mode' : 'App ligth-mode' }>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Switch>
        <Route path='/' exact>
        <HomePage
          error={error}
          setError={setError}
          darkMode={darkMode}
          countriesListData={countriesListData}
          countriesDataForDisplay={countriesDataForDisplay}
          setCountriesDataForDisplay={setCountriesDataForDisplay}
          selectValue={selectValue}
          inputValue={inputValue} 
          setSelectValue={setSelectValue}
          setInputValue={setInputValue}
        />
        </Route>
    
        <Route path='/:alpha3Code' exact > 
      
          <CountryDetailsPage  
            darkMode={darkMode}
            countriesListData={countriesListData}
            setSelectValue={setSelectValue}
          
          />
        </Route>
       
        </Switch>

      
      
    </div>
    </Router>
  );
}

export default App;
