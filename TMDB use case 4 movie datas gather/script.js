// movie id
fetch('https://api.themoviedb.org/3/movie/changes?page=1', {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0'
  }
})
  .then(movieId => movieId.json())
  // .then(movieId => console.log(movieId))
  .then(movieId => {
    for (let i = 0; i < movieId.results.length; i++) {
      let title= movieId.results[i].id;
      // console.log(title);

      // movie details

      fetch("https://api.themoviedb.org/3/movie/"+title+"?language=en-US", {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0'
        }
      })
        .then(movieDetails => movieDetails.json())
        // .then(movieDetails => console.log(movieDetails))
        .then(movieDetails => {
          for(i in movieDetails){
            for(j in movieDetails[i].genres){
              console.log(movieDetails.title);
            }
          }
          
        })
        .catch(err => console.error(err));
    }
    
  })
  .catch(err => console.error(err));
