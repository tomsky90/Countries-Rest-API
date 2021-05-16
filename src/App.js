import React, { useState }from 'react';
import { BrowserRoute as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import CountriesList from './components/CountriesList';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('Filter by Region')

  return (
    <div className={darkMode ? 'App dark-mode' : 'App ligth-mode' }>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      < Form 
        selectValue={selectValue} 
        setSelectValue={setSelectValue} 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        darkMode={darkMode}/>
      <CountriesList 
        inputValue={inputValue} 
        selectValue={selectValue}
        darkMode={darkMode}
      />
     
    </div>
  );
}

export default App;
