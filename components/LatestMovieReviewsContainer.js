const React = require('react');
const apiKey = '9f4b0f76f0584790ba37f130ab77bacf'
const movieReviewsURL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${apiKey}`

class LatestMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      reviews: []
    }
  }
  
  componentDidMount(){
    console.log('Component did mount')
    debugger;
    // fetch()
  }
  
  render(){
    return(
      <div className='latest-movie-reviews'>
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;