import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import getDataFromApi from '../service/data'
import SeriesList from './ SeriesList'





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSeries: [],
      nameSerie : ''
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.handlerFetch = this.handlerFetch.bind(this);
  }
  
 


  getInputValue(nameSerieValue){
      this.setState({
        nameSerie : nameSerieValue
      })
      
  } 
  
  handlerFetch(){
    console.log("Buscando...", this.state.nameSerie);
    getDataFromApi(this.state.nameSerie)
    .then(data => {
      this.setState({
        dataSeries: data
      });
      console.log(this.state.dataSeries)
    });
  
   }


  render() {
    return (
      <div className="App">
        <Header 
        getInputValue = {this.getInputValue}
        handlerFetch={this.handlerFetch}
        />
        <SeriesList
        dataSeries ={this.state.dataSeries}/>
        
        
      </div>
    );
  }
}

export default App;
