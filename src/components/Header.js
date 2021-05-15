import React from 'react';
import '../styles/Header.css'

const Header = ({ setDarkMode, darkMode}) => {
    const handleColor = () => {
        setDarkMode(!darkMode)
        
    } 

    return ( 
        <header className={darkMode ? 'header dark-mode dark-elements' : 'header ligth-mode ligth-elements'}>
            <h4>Where in the world?</h4>
            <button className={darkMode ? ' dark-mode ' : 'ligth-mode'} onClick={() => {handleColor()}}> <i className="fas fa-moon"></i> Dark Mode</button>
        </header>
     );
}
 
export default Header;