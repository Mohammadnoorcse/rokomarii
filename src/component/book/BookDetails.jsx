import React from 'react'
import "./bookdetail.css"
import img1 from "../../image/10018.jpg"
function BookDetails() {
  return (
    <div className='bookdetail w100 div-center'>
        <div className="bookdetail-content container">
          <div className="bookdetail-content-1 ">
            <div className='div-center'>
                <img src={img1} alt="" />
            </div>
            <button>Want to read</button>
          </div>
          <div className="bookdetail-content-2">
            <div className="bookdetail-content-2-1">
                <div>
                    <img src="" alt="" />
                </div>
                <div></div>
            </div>

          </div>
          <div className="bookdetail-content-3"></div>
        </div>
    </div>
  )
}

export default BookDetails