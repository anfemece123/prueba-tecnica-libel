import React, {useEffect}  from "react";
import "./Carousel.css";
// import { Carousel } from "react-responsive-carousel";
import ReactSwipe from "react-swipe";

export const Carousel1 = ({style, id, data}) => {

  let carousel;
  let countClick = 0;
  let countClickLeft = 0;
  
  const slideRight = () => {
    countClick++;
      const num = countClick* 100;
      carousel.style.transform = `translateX(-${num}px)`;
    
  }

  const slideLeft = () => {
    ///700
    countClickLeft++;
    const num = countClickLeft* 100;
    carousel.style.transform = `translateX(${num}px)`;
  }

  useEffect(()=>{
 
      carousel = document.querySelector(`[data-target='${id}']`);
     
  },[]); 

  return (
    <>
      <div className={style}>
        <div className="wrapper">
          <div className="carousel-sections">
            <div className="carousel-categories">
                <ul>
                  <li className="active">Today</li>
                  <li>Last week</li>
                  <li>Last 30 days</li>
                </ul>
            </div>
            <ul className="carousel" id="carousel" data-target={id}>
              {console.log('la data',data)}
              {
                data.map(film => (
                  <li className="card" data-target="card">
                    <div className="image-card">

                    </div>
                    <h3>{film.genre}</h3>
                    <h4>{film.title}</h4>
                  </li>
                ))
              }
              
            </ul>
          </div>

          <div className="button-wrapper">
            <h3>Action, Drama & Movie</h3>
            <div className="buttons">
              <button className="button-slider left" onClick={() => slideLeft()} data-action="slideLeft"><p></p></button>
              <button className="button-slider right" onClick={() => slideRight()}  data-action="slideRight"> <p></p></button>
            </div>
            <a className="see-more" >ver mas</a>
          </div>
        </div>
      </div>
     
    </>
  );
};
