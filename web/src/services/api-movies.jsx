// login

let movieList = [];

const getMoviesFromApi = (params) => {
  console.log('Se están pidiendo las películas de la app');
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  const filterGenre = `?genre=${params.genre}`;
  console.log(filterGenre);
  return fetch('//localhost:4000/movies' + filterGenre, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
