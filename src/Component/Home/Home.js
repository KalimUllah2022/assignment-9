import React from 'react'
import { Link } from 'react-router-dom'
import useReview from '../../Hook/useReview'
import Card from '../Review/Card/Card'
import './Home.css'
import product from './images/headset.jpg'
function Home() {
    const [reviews , setReview]  = useReview()
    return (
        <section className='container'>
           <div className="header">
           <div className='header-content '>
                <h1>Product Name Here</h1>
                <h2>Product Description</h2>
                <button className='header-btn'>Live Demo</button>
            </div>
            <div className='image'>
                <img src={product} alt="" />
            </div>
           </div>
            {/* Review Section Start  */}

            <div className="reviews container">
            <h1 className='review-heading'>Customer Reviews</h1>
            <div className="review">

               {
                   reviews.slice(0,3).map(review => {
                      return(
                          <Card key={review.id} review={review}/>
                      )
                   })
               }

                
            </div>
            <Link className='btn btn-primary  mt-5' to="/review">See All Reviews</Link>
        </div>
        </section>
    )
}

export default Home