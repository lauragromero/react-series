import React from 'react';

const SeriesList= (props)=>{
    return(
        <ul className="list">
            {props.dataSeries.map(serie =>{
                return(
                <li  className="list__item" key={serie.id}>
                    <span className="list__item-title" >{serie.name}</span>
                    <img className="list__item-image" src={serie.image} alt={serie.name}/>
                </li>
                )})}   
        </ul>
    )
}

export default SeriesList;