// login

let movieList = [];

// const getMoviesFromApi = () => {
//   console.log('Se están pidiendo las películas de la app');
//   // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
//   return fetch('//localhost:4000/movies', { method: 'GET' })
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     });
// };
async function getMoviesFromApi() {
  //async/await
  const response = await fetch("http://localhost:4000/movies", {
    method: "GET",
  });
  const data = await response.json();
  movieList = data;
  //renderMovies();
  console.log(data);
}

//loadData();


const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
