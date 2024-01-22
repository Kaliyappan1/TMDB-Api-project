$(document).ready(function(){
    

  // api key list
  // let movie_list = 'https://api.themoviedb.org/3/movie/changes?page=1';
  // let movie_details = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
  // let movie_genre = 'https://api.themoviedb.org/3/genre/movie/list?language=en' ;
    
  // api key loop


    // fetchMovieGenre();
    // fetchMovieList();
    // fetchMovieDetails();

    // movie list api
    const movieList = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0'
        }
      };

      
      
      fetch('https://api.themoviedb.org/3/movie/changes?page=1', movieList)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
        //  for (let i = 0; i < response.length+1; i++) {
        //   const element = response[i];
        //   console.log(element);
          
        //  }
          $.each(response,function(item){
            $.each(item,function (key,value){

              console.log(key, value);
            })
          })
            
          
        })
        .catch(err => console.error(err));
    
        // movie details
    
        // const details = {
        //     method: 'GET',
        //     headers: {
        //       accept: 'application/json',
        //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0'
        //     }
        //   };
          
        //   fetch(movie_details, details)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));


    // movie genre api
    // const movieGenre = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0'
    //     }
    //   };
      
    //   fetch(movie_genre, movieGenre)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    

})