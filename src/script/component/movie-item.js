class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set movie(movie) {
        this._movie = movie;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: inline-flex;
            margin-bottom: 18px;
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            overflow: hidden;
        }
       
        .poster {
            max-width: 200px;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 4px 0px 6px 0 rgba(0.2, 0, 0, 0.2);
        }
       
        .movie-info {
            padding: 24px;
            margin-left: 10px;
        }
       
        .movie-info > h2 {
            font-weight: bold;
        }

        .movie-info > h4 {
            font-weight: bold;
            margin-top: 5px;
        }

        .movie-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: grey;
            font-size: 15px;
            text-align: justify;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 8;
        }

        @media screen and (max-width: 550px){
            .movie-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                color: grey;
                font-size: 15px;
                text-align: justify;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
        }
    </style>
    <img class="poster" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="Movie Poster">
    <div class="movie-info">
        <h2>${this._movie.title}</h2>
        <h4>⭐ ${this._movie.vote_average}/10</h4>
        <h4>Release ${this._movie.release_date}</h4>
        <h4>Overview : </h4>
        <p>${this._movie.overview}</p>
    </div>`;
}
}
  
 customElements.define("movie-item", MovieItem);