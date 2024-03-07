import React from 'react'
import { useTimer } from  "reactjs-countdown-hook";
import "./bookdetail.css"
import img1 from "../../image/10018.jpg"
import img2 from "../../image/10015.png"
function BookDetails() {

  const {
    seconds,
    minutes,
    hours,
    days
    } = useTimer(1728000);
  return (
    <div className='bookdetail w100 div-center'>
        <div className="bookdetail-content">
          <div className="bookdetail-content-1 ">
            <div className='div-center'>
                <img src={img1} alt="" />
            </div>
            <button>Want to read</button>
          </div>
          <div className="bookdetail-content-2">
            <div className="bookdetail-content-2-1">
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                 <span>ends</span>
                 <span>{`${days} days : ${hours}  hour: ${minutes} mint : ${seconds} s` }</span>
                </div>
            </div>

          </div>
          <div className="bookdetail-content-3"></div>
        </div>
    </div>
  )
}

export default BookDetails