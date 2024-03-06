import React from 'react';
import "./book.css";
import img1 from "../../image/10017.jpg";
import {Link} from "react-router-dom"
const bookcard=[
  {
    img:img1,
    title:"আমি আবু বকর",
    writer:" আসিফ নজরুল",
    price:180
  },
  {
    img:img1,
    title:"আমি আবু বকর",
    writer:" আসিফ নজরুল",
    price:180
  },
  {
    img:img1,
    title:"আমি আবু বকর",
    writer:" আসিফ নজরুল",
    price:180,
  },
  {
    img:img1,
    title:"আমি আবু বকর",
    writer:" আসিফ নজরুল",
    price:180
  },
  {
    img:img1,
    title:"আমি আবু বকর",
    writer:" আসিফ নজরুল",
    price:360
  },
]
const Book = () => {
  return (
    <div className='book w100 div-center'>
         <div className="book-content container">
          {bookcard.map((value)=>{
            return(
              <div className="bookcard div-center" >
                
                  <img src={value.img} alt="" />
                   <span>{value.title}</span>
                   <span>{value.writer}</span>
                   <span>{value.price}</span>
                
                
                
                <Link to="/book/detail">
                <div className='cart'>
                  <span>Add to Cart</span>
                </div>
                </Link>
              
              </div>
            )
          })}

         </div>
    </div>
  )
}

export default Book