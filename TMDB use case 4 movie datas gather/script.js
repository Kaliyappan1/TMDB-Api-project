// movie id
fetch("https://api.themoviedb.org/3/movie/changes?page=1", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0",
  },
})
  .then((movieId) => movieId.json())
  // .then(movieId => console.log(movieId))
  .then((movieId) => {
    for (let i = 0; i < movieId.results.length; i++) {
      let title = movieId.results[i].id;
      // console.log(title);

      // movie details

      fetch("https://api.themoviedb.org/3/movie/" + title + "?language=en-US", {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0",
        },
      })
        .then((movieDetails) => movieDetails.json())
        // .then(movieDetails => console.log(movieDetails.genres))
        .then((movieDetails) => {
          for (let i = 0; i < movieDetails.genres.length; i++) {
            const element = movieDetails.genres[i];
            console.log(element);
            if (element.id) {
              // console.log(element.id);
              $("#dataPrint").append(
                `<table class="table">
                  <thead>
                    <tr>
                      <th scope="col">s_no</th>
                      <th scope="col">Genre Name</th>
                      <th scope="col">Genre ID</th>
                      <th scope="col">Movie Name</th>
                      <th scope="col">Movie ID</th>
                      <th scope="col">Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>${this[element.name]}</td>
                      <td>${element.id}</td>
                      <td>${element.original_title}</td>
                      <td>${element.id}</td>
                      <td></td>
                    </tr>
                    
                  </tbody>
                </table>`
              );
            }
          }
        })
        // .then(movieDetails => {
        //     for (let i = 0; i < movieDetails.length; i++) {
        //       let genre = i.genres.id
        //           let movieid = i.id
        //           console.log(genre);
        //
        //     }
        //   })
        .catch((err) => console.error(err));
    }
  })
  .catch((err) => console.error(err));
