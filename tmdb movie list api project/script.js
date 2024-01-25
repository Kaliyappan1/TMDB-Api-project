var new_url;
function myfunction() {
  // document.getElementById("data_print").innerHTML=("success");
  var a = document.getElementById("startdate").value;
  var b = document.getElementById("enddate").value;
  new_url =
    "https://api.themoviedb.org/3/movie/changes?page=1" +
    "&startdate=" +
    a +
    "&enddate=" +
    b;
  console.log(new_url);
  // document.getElementById("demo").innerHTML=(new_url);

  fetch(new_url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0",
    }
  })
    .then(response => response.json())
    .then(data => {
      const list = data.results;
      list.map((item) => {
        const id = item.id;
        const adult = item.adult;
        $("#data_print").append(
          `<tr>
            <td>${id}</td>
            <td>${adult}</td>
            </tr>`
        );
      })
      })

    .catch((err) => console.error(err));
};










