fetch("https://api.themoviedb.org/3/movie/popular?api_key=c4f8d079b343ad7a1698d342eb31c929")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));