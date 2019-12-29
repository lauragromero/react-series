import React from 'react';

class SearchForm extends React.Component {
constructor(props){
    super(props);
    this.getInputValue= this.getInputValue.bind(this)
    this.handlerFormSubmit = this.handlerFormSubmit.bind(this)
    
}


    handlerFormSubmit(event){
        event.preventDefault()
        this.props.handlerFetch()
    }

   getInputValue(event){
    this.props.getInputValue(event.target.value)
   } 

  render() {
    return (
          <form onSubmit={this.handlerFormSubmit}>
            <input  onKeyUp={this.getInputValue} type="text" placeholder="Nombre de tu serie"/>
            <input  type="submit" value="search"/>
          </form>

    );
  }
}

export default SearchForm;