import React from 'react';

class SerieItem extends React.Component{
 constructor(props){
     super(props)
     this.addToFav=this.addToFav.bind(this)
 }

addToFav(event){
   this.props.addToFav(event.target.id)
}
render(){
    
    return(
        <li className="list__item" key={this.props.keys} >
            <span className="list__item-title" >{this.props.name}</span>
            <img className="list__item-image" src={this.props.image} alt={this.props.name}/>
            <button  id={this.props.id} onClick={this.addToFav} type="button" >Añadir</button> 
        </li>
              
        
    )
}
}

export default SerieItem;