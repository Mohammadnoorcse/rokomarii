import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./thirdslide.css";
import img1 from "../../../image/10017.jpg"

const card = [
  {
    id: 1,
    color: "#96ADDB",
    title: "ফিকশন বই",
    subtitle: "All Fictions Book",
    subcard:[
       {
        id:1,
        img:img1,
        title:"aminur",
        subtitle:"aminur"
       },
       {
        id:2,
        img:img1,
        title:"aminur",
        subtitle:"aminur"
       },
       {
        id:3,
        img:img1,
        title:"aminur",
        subtitle:"aminur"
       }
     
    ]
  },
  {
    id: 1,
    color: "#96ADDB",
    title: "ফিকশন বই",
    subtitle: "All Fictions Book",
    subcard:[
      {
        id:1,
       img:img1,
       title:"aminur",
       subtitle:"aminur"
      },
      {
        id:2,
       img:img1,
       title:"aminur",
       subtitle:"aminur"
      },
      {
        id:3,
       img:img1,
       title:"aminur",
       subtitle:"aminur"
      }
      
   ]
  },
  {
    id: 3,
    color: "#96ADDB",
    title: "ফিকশন বই",
    subtitle: "All Fictions Book",
    subcard:[
      {
        id:1,
       img:img1,
       title:"aminur",
       subtitle:"aminur"
      },
      {
        id:2,
       img:img1,
       title:"aminur",
       subtitle:"aminur"
      },
      {
        id:3,
       img:img1,
       title:"aminur",
       subtitle:"aminur"
      }
    
   ]
  },
];

const Thirdslide = () => {
  const [useBtn, setBtn] = useState(true);
  const [useTextBtn, setTextBtn] = useState(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {card.map((value) => {
        return (
          <div className="card">
            <h4>{value.title}</h4>
            <div className="btn">
              <span
                onClick={() => {
                  setBtn(true);
                }}
              >
                বই
              </span>
              <span
                onClick={() => {
                  setBtn(false);
                }}
              >
                লেখক
              </span>
            </div>
            <div className={useBtn ? "btn-1" : "btn-2"}></div>
            
            <div className="selector">
              <select name="cars" id="cars">
                <option value="volvo">{value.title}</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
             <div className="text-btn">
              <span onClick={() => {setTextBtn(true);}}>Today</span>
              <span onClick={()=>{setTextBtn(false)}}>All</span>
             </div>
             <div className="text-btn-border"></div>
             <div className={useTextBtn?"text-btn-border-left-half":"text-btn-border-right-half"}></div>

           <div className="card-horizentalbar">
           {
              value.subcard.map((subvalue)=>{
                return(
                  <div className="sub-card">
                     <div className="sub-card-value-1">
                      {subvalue.id}
                     </div>
                     <div className="sub-card-value-2">
                      <img src={subvalue.img} alt="" />
                     </div>
                     <div className="sub-card-value-3">
                      <span>{subvalue.title}</span>
                      <span>{subvalue.subtitle}</span>
                     </div>
                  </div>
                )
              })
             }
           </div>

           <a href="/book">সব দেখুন</a>
          </div>
        );
      })}
    </Slider>
  );
};

export default Thirdslide;
