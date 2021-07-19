import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Z5c5bQzFVaiw4TxKT5EChyCMc85RpYZT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }



    handleSubmit = event => {
        event.preventDefault();
debugger
        fetch(URL.concat(this.state.searchTerm)) 
        .then(resp => resp.json())
        .then(data => data.setState({reviews: data.results}))

    } 

    handleSearchChange = event => {
        this.setState({searchTerm: event.target.value})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.searchTerm} 
                onChange={this.handleSearchChange}></input>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
                
            </div>
        )
    }


}

export default SearchableMovieReviewsContainer 