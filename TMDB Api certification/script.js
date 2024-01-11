const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGE3ZDNmOGNiZmNiYTMwMjFjOGQwYTBkNTA1MDM2ZSIsInN1YiI6IjY1OWI1MTdiYTEwNzRiMDBlZWIwZmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLIYRQxwOX_1f3Pb4o332V5FQeZSMiae5EDo5Cuub_0",
  },
};

fetch("https://api.themoviedb.org/3/certification/movie/list", options)
  .then((response) => response.json())
  .then((response) => {
    const country_list = Object.keys(response["certifications"]);

    $.each(country_list, function () {
      console.log(response["certifications"][this]);

      const country_name = this;
      const certification_list = response["certifications"][this];
      console.log(`certification_list -->`, certification_list);
      $.each(certification_list, function () {
        console.log(`this inside list -->`, this);
        $("#table_body").append(
          `<tr>
            <td>${country_name}</td>
            <td>${this["certification"]}</td>
            <td>${this["meaning"]}</td>
            <td>${this["order"]}</td>
          </tr>`
        );
      });
    });
  })
  .catch((err) => console.error(err));
