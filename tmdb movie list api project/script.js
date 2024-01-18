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

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0",
    },
  };

  fetch(new_url, options)
    .then((response) => response.json())
    // .then(response => console.log(response["results"]))
    .then((response) => {
      // let data = response
      // $("#submit").click(function(){
      //   let success= $(this).attr('submit')
      //     $(this).attr()
      // })
      const data = Object.keys(response["results"]);
      $.each(data, function () {
        const outerKey = this;
        const outerObject = response["results"][outerKey];
    
        // Assuming each outer object has inner objects
        const innerKeys = Object.keys(outerObject);
    
        $.each(innerKeys, function () {
            const innerKey = this;
            const innerValue = outerObject[innerKey];
          $("#data_print").append(
            `<tr>
								<td>${this["outerKey"]}</td>
								
								<td>${this["innerValue"]}</td>
														
						</tr>`
          );
        });
        console.log(newdata[this]);
      });
    })

    .catch((err) => console.error(err));
}
