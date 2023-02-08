import React from "react";
import DetailData from "../data/data";
const Title3 = () => {
  const details = DetailData.map((props) => {
    if (props.id === 1) {
      return (
          <div className="w-full h-screen">
               <div className="tu">
                <h1>{props.title2}</h1>
                <img src={props.img2}/>
                <p>{props.description2}</p>
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
export default Title3;

