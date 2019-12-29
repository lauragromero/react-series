import React from 'react';
import SearchForm from './SearchForm';


const Header =props=> {
  //console.log(props.getInputValue)
    return (
      <div className="Header">
          <h1>Buscador de series</h1>
          <SearchForm 
          getInputValue={props.getInputValue}
          handlerFetch={props.handlerFetch}
          />
      </div>
    );
}

export default Header;
