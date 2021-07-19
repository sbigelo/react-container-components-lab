import React from 'react';

const Review = ({
    headline,
    byline,
    link,
    summary_short
}) => {
      return(
            <div
            key={headline}
            className='review'>
                <header>
                <h1>{headline}</h1>
                <p className='author'>{byline}</p>
                <a className='review-link'
                href={link.url}>{headline}</a>
              </header>
                <p>{summary_short}</p>
            </div>
        )
    

}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>
MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews
