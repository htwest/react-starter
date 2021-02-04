import React from 'react';
import sampleMovies from '../data/sampleData.js'
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
import AddToMovieList from '../components/AddToMovieList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  onSearchClick(inputText) {
    var searchedList = [];
    var textArr = inputText.split(' ');

    this.state.movies.forEach(movie => {
      var movieText = movie.title.split(' ');
      for (var i = 0; i < textArr.length; i++) {
        for (var j = 0; j < movieText.length; j++) {
          if (textArr[i] === movieText[j] && !searchedList.includes(movie)) {
            searchedList.push(movie);
          }
        }
      }
    })

    if (searchedList.length < 1) {
      searchedList[0] = {title: 'Not Found'};
    }

    this.setState({
      movies: searchedList
    })
  }

  onAddClick(inputText) {
    var updatedList = this.state.movies
    var newMovie = {title: inputText}
    updatedList.unshift(newMovie)

    this.setState({
      movies: updatedList
    })
  }



  render(){
    return(
    <div className='container'>
      <div className='add-box'>
      <AddToMovieList add={this.onAddClick.bind(this)}/>
      </div>
      <div className='search-box'>
      <Search search={this.onSearchClick.bind(this)}/>
      </div>
      <div className='list-box'>
      <MovieList movies={this.state.movies}/>
      </div>
    </div>
  )}
};

export default App;
