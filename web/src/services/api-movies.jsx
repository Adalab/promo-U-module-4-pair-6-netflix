// login

const getMoviesFromApi = (params) => {
  console.log(params);
  console.log('Se están pidiendo las películas de la app');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC

  return fetch(
    // `//localhost:4000/movies?genre=${params.genre}&sort=${params.sort}`
    'http://localhost:4000/movies_all_mongo'
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
