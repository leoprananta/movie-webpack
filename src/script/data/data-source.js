class DataSource{
	static searchMovie(title){
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ae97036adbb287e6dafd2036c3011004&query=${title}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.results){
				return Promise.resolve(responseJson.results);
			}else{
				return Promise.reject(`${title} is not match with any movies, try search another title`)
			}
		})
	}
}

export default DataSource;