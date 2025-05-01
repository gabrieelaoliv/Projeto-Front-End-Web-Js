//import getMovie from "./movie";

const inicio = document.getElementById("inicio");

window.addEventListener("DOMContentLoaded", () => {
    getMovie();
});

const generos = {
    28: "Ação",
    12: "Aventura",
    16: "Animação",
    35: "Comédia",
    80: "Crime",
    99: "Documentário",
    18: "Drama",
    10751: "Família",
    14: "Fantasia",
    36: "História",
    27: "Terror",
    10402: "Música",
    9648: "Mistério",
    10749: "Romance",
    878: "Ficção científica",
    10770: "Cinema TV",
    53: "Thriller",
    10752: "Guerra",
    37: "Faroeste",
};


const getMovie = async () => { //preciso passar o id dentro do ()?

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e9ea260b8acaf1985d3247bb66b83f4b&language=pt-BR&page=1')
        const data = await response.json();
        const top10 = data.results.slice(0, 10);
        top10.forEach(movie => loadMovie(movie));
    }
    catch (error) {
        console.log(error)
        return [];
    }
}

const loadMovie = async (movie) => {
    let date = new Date(movie.release_date);
    const genreNames = movie.genre_ids.map(id => generos[id]).join(", ");

    inicio.innerHTML += `
     <div class="movie" onclick="getMovie(${movie.id})">
            <div class="movie_img">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
            </div>
            <div class="movie_infos">
                <p class="movie_title"> <b>${movie.title}</b></p>
                  <p class="movie_vote"><b><svg width="12" height="12" viewBox="0 0 24 24" fill="#f5c518">
                    <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                </svg> ${movie.vote_average}</b></p>
                <p class="movie_date"> ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</p>
                <p class="movie_genero"><b>${genreNames}</b></p>
                <p class="movie_overview">${movie.overview}</p>
                
            </div>
        </div>`;
}