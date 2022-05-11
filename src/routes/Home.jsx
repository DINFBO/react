import  React from 'react';
import {useState, useEffect} from 'react';
import Movie from "../components/Movie";
import '../App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await( 
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year')
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  
  useEffect(() => {
    getMovies();
    
  },[])
  
  return (
    <main>
      <h1>
        영화리스트 ({movies.length})
      </h1>
      { loading ? (
        <h1>loading...</h1>
      ): (
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title}
            summary={movie.summary}
            />  
        ))}
      </div>
      )}
    </main>
  );
}

export default App;