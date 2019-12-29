import React from 'react';

const SeriesList= (props)=>{
    return(
        <ul>
            {props.dataSeries.map(serie =>{
                return(
                <li key={serie.id}>
                <span>{serie.name}</span>
                <img src={serie.image} alt={serie.name}/>
            </li>
                )})}   
        </ul>
    )
}

export default SeriesList;