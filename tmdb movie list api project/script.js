const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/changes?end_date=2024-01-10&page=1&start_date=2024-01-01', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => {
        let data = response

        $.each(data, function(){
            console.log(response["results"][this]);
        })
    })
    .catch(err => console.error(err));



