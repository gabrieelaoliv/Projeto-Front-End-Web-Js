// GET Request.

function reqFetch() {


    fetch('https://raw.githubusercontent.com/madu-silva/PFJS-IFTM/refs/heads/main/atividade-em-sala1/dados.json')
        // Handle success
        .then(response => response.json())  // convert to json
        .then(json => console.log(json))    //print data to console
        .catch(err => console.log('Request Failed', err)); // Catch errors

}