import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import getDataFromApi from '../service/data'
import SeriesList from './ SeriesList'
import Loader from './Loader';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSeries: [],
      nameSerie : '', 
      fav:[], 
      loading: false
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.handlerFetch = this.handlerFetch.bind(this);
    this.addToFav = this.addToFav.bind(this);
  }
  
 addToFav(favId){
  const numberFavId = parseInt(favId) 
   const favList = this.state.dataSeries.find(Serie => Serie.id === numberFavId);

   this.setState(prevState=>{
      prevState.fav.push(favList)
     return{
      fav: prevState.fav}
     
    })

 }


  getInputValue(nameSerieValue){
      this.setState({
        nameSerie : nameSerieValue,
        loading: false
      })
      
  } 
  
  handlerFetch(){
    console.log("Buscando...", this.state.nameSerie);
    this.setState({
      loading:true
    })
    getDataFromApi(this.state.nameSerie)
    .then(data => {
      this.setState({
        dataSeries: data, 
        loading: false
      });
      // console.log(this.state.dataSeries)
    });
  
   }


  render() {
    return (
      <div className="App">
        <Loader isLoading={this.state.loading}/>
        <Header 
        getInputValue = {this.getInputValue}
        handlerFetch={this.handlerFetch}
        />
        <SeriesList
        dataSeries ={this.state.dataSeries}
        addToFav={this.addToFav}/>
        <SeriesList
        dataSeries={this.state.fav}/> 
        
      </div>
    );
  }
}

export default App;
