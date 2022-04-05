

import React from 'react'
import useReview from '../../Hook/useReview'
import Card from './Card/Card'
import './Review.css'
function Review() {
    const [reviews , setReview]  = useReview()
    return (
        <div className="reviews container">
            <h1 className='review-heading'>Customer Reviews</h1>
            <div className="review">

               {
                   reviews.map(review => {
                      return(
                          <Card key={review.id} review={review}/>
                      )
                   })
               }

                
            </div>
        </div>
    )
}

export default Review