import React from 'react';
import sampleMovies from '../data/sampleData.js'
import MovieList from '../components/MovieList.jsx'
import Search from '../components/Search.jsx'
import AddToMovieList from '../components/AddToMovieList.jsx'
import ListButtons from '../components/ListButtons.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      toWatch: [],
      watched: []
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
    var updatedList = this.state.toWatch
    var newMovie = {title: inputText}
    updatedList.unshift(newMovie)

    this.setState({
      movies: updatedList,
      toWatch: updatedList
    })
  }

  setToWatch(){
    this.setState({
      movies: this.state.toWatch
    })
    $('.watch-toggle').show()
  }

  setWatched(){
    this.setState({
      movies: this.state.watched
    })
    $('.watch-toggle').hide()
  }

  haveWatched(name) {
    var updatedToWatchList = this.state.toWatch
    var updatedWatchedList = this.state.watched

    updatedToWatchList.forEach((movie, i) => {
      if (movie.title === name) {
        updatedWatchedList.unshift(movie)
        updatedToWatchList.splice(i, 1)
      }
    })

    this.setState({
      toWatch: updatedToWatchList,
      watched: updatedWatchedList
    })

  }

  this.props.searchMovieDatabase(options, callback)



  render(){
    return(
    <div className='container'>
      <div className='add-box'>
        <AddToMovieList add={this.onAddClick.bind(this)}/>
      </div>
      <div className='search-box'>
        <Search search={this.onSearchClick.bind(this)}/>
      </div>
      <div>
        <ListButtons toWatch={this.setToWatch.bind(this)} watched={this.setWatched.bind(this)}/>
      </div>
      <div className='list-box'>
        <MovieList movies={this.state.movies} haveWatched={this.haveWatched.bind(this)}/>
      </div>
    </div>
  )}
};

export default App;
