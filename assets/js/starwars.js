const API = "https://swapi.dev/api/people/";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json.results), paginacion(json);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 15rem;">';
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">Status: ${pj.height}</p>`;
    html += `<p class="card-text">Status: ${pj.mass}</p>`;
    html += `<p class="card-text">Status: ${pj.gender}</p>`;
    html += `<p class="card-text">Specie: ${pj.birth_year}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

const paginacion = (data) => {
  let prevDisabled = "";
  let nextDisabled = "";

  data.previous == null ? (prevDisabled = "disabled") : (prevDisabled = "");
  data.next == null ? (nextDisabled = "disabled") : (nextDisabled = "");

  let html = `<li class="page-item ${prevDisabled}" ><a class="page-link" onclick="getData('${data.previous}')">Previous</a></li> <li class="page-item ${nextDisabled}" ><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;

  document.getElementById("paginacion").innerHTML = html;
};

getData(API);
