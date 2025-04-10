
// function getCustomersOp1() {
//     let xhttp = new XMLHttpRequest();
//     let file = "https://raw.githubusercontent.com/gabrieelaoliv/Projeto-Front-End-Web-Js/refs/heads/main/dados.json";

//     xhttp.onreadystatechange = function () {
//         if ((this.readyState == 4) && (this.status == 200)) {
//             printCustomers(JSON.parse(this.responseText));
//         }
//     }

//     xhttp.open("GET", file, true);
//     xhttp.send();
// }

// function getCustomersOp2() {
//     let file = "https://raw.githubusercontent.com/gabrieelaoliv/Projeto-Front-End-Web-Js/refs/heads/main/dados.json";
//     fetch(file)
//         .then(response => response.json())
// }
import reqX from './xmlHttpRequest.js';
import reqFetch from './fetch.js';


window.addEventListener("DOMContentLoaded", function () {

    reqX();
    reqFetch();

});