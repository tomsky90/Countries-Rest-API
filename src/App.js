import React, { useState }from 'react';
import { BrowserRoute as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={darkMode ? 'App dark-mode' : 'App ligth-mode' }>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      < Form inputValue={inputValue} setInputValue={setInputValue} darkMode={darkMode}/>
     <h1>hello world</h1>
    </div>
  );
}

export default App;
