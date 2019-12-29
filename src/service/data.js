const formatSerieItem = seriesItem => {
    //seriesItem.show.image = seriesItem.show.image === null
    //   ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'
    //   : seriesItem.show.image.medium;
    // return seriesItem;
    const image = seriesItem.show.image === null
      ? 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'
      : seriesItem.show.image.medium;
    return {
      id: seriesItem.show.id,
      name: seriesItem.show.name,
      image: image
    };
  };
  
  const getDataFromApi = nameSerie => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${nameSerie}`)
      .then(response => response.json())
      .then(series => series)
        .then(series => series.map(item => formatSerieItem(item)));
  };
  
  //el reuturn es muy importante porque, se retorna el fetch, por lo tanto luego se puede hacer un then cuando utilizas la funcion otra vez en APP, para alli guardar esos datos en el estado del array de la api
  export default getDataFromApi;