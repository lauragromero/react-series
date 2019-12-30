import React from 'react';
import SerieItem from './SerieItem';

const SeriesList =(props)=>{
    return(
        <ul className="list">
            {props.dataSeries.map(serie =>{
                return(
                    <SerieItem
                    keys= {serie.id}
                    id={serie.id}
                    name={serie.name}
                    image={serie.image}
                    addToFav={props.addToFav}
                    />
                )})}   
        </ul>
    )

}

export default SeriesList;