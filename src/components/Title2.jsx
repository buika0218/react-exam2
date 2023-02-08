import React from "react";
import DetailData from "../data/data";
const Title2 = () => {
  const details = DetailData.map((props) => {
    if (props.id === 1) {
      return (
          <div className="w-full h-screen">
               <div className="tu">
                <h1>{props.title1}</h1>
                <img src={props.img1}/>
                <p>{props.description1}</p>
               </div>
          </div>
      );
    } else {
      return;
    }
  });
  return (
    <>
      {details}
    </>
  );
};
export default Title2;

