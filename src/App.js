import React from "react";
// import Home from "./routes/Home";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import Detail from "./routes/Detail";

function App() {
  // 라우터는 Route 모두를 보니까 화면에 둘 모두 나온다.
  return (
    <HashRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
export default App;
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };

//   // getMovies함수는 시간이 필요하고 async axios.get()의 실행을 기다려달라고 말한다. await
//   getMovies = async () => {
//     // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get(
//       "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
//     );
//     console.log(movies);
//     // this.setState({ movies: movies }); //아래는 축약형태
//     this.setState({ movies, isLoading: false });
//     console.log(this.state.movies);
//   };

//   componentDidMount() {
//     // // 렌더되고 이후에 실행되는 함수니까...
//     // setTimeout(() => {
//     //   this.setState({ isLoading: false });
//     //   // this.setState((cur) => (cur.isLoading = false));
//     // }, 6000);
//     // axios.get("https://yts-proxy.now.sh/list_movies.json");
//     this.getMovies();
//   }

//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader__text">Loading...</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map((movie) => {
//               return (
//                 <Movie
//                   key={movie.id}
//                   year={movie.year}
//                   title={movie.title}
//                   summary={movie.summary}
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                 />
//               );
//             })}
//           </div>
//         )}
//       </section>
//     );
//   }
// }
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello");
//   }
//   state = {
//     count: 0,
//   };

//   add = () => {
//     // setState함수에 새로운 객체를 전달하면 리액트가 자동으로 state에 반영
//     // this.state.count++ 은 안 됨 직접 변경이니까.
//     // this.setState({ count: this.state.count + 1 });
//     this.setState((cur) => ({ count: cur.count + 1 }));
//     // cur 이름이 뭐든 state를 객체로 받아서 함수를 실행 (더 나은 방법)
//   };
//   minus = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   componentDidMount() {
//     console.log("component rendered");
//   }

//   componentDidUpdate() {
//     console.log("i just updated");
//   }

//   componentWillUnmount() {
//     // 컴포넌트가 화면에서 떠날 때 실행
//     console.log("goodbye, cruel world");
//   }
//   // 렌더 함수는 리액트가 자동으로 실행시켜 준다.
//   // 렌더 함수는 state가 변경되면 다시 렌더함수를 실행하여 변경된 state를 화면에 출력한다.
//   render() {
//     console.log("i am rendering");
//     return (
//       <div>
//         <h1>The number is : {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// import logo from './logo.svg';
// import './App.css';
// import Potato from "./Potato";
// import PropTypes from "prop-types";

// props는 매개변수?
// function Food({ fav }) {
//   return <h3> I love {fav}</h3>;
// }

// Food.propTypes = {
//   fav: PropTypes.string.isRequired,
// };

// function App() {
//   // ( 괄호는 태그가 두개 이상일 때.
//   // 데이터가 문자일 때를 제외하고는 {}안에
//   return (
//     <div>
//       <h1>Hello !!!</h1>
//       <Food fav="jadoo" />
//     </div>
//   );
// }
