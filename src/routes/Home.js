import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // getMovies함수는 시간이 필요하고 async axios.get()의 실행을 기다려달라고 말한다. await
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    // this.setState({ movies: movies }); //아래는 축약형태
    this.setState({ movies, isLoading: false });
    console.log(this.state.movies);
  };

  componentDidMount() {
    // // 렌더되고 이후에 실행되는 함수니까...
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    //   // this.setState((cur) => (cur.isLoading = false));
    // }, 6000);
    // axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
