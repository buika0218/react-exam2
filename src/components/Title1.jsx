import React from "react";
import DetailData from "../data/data";
const Title1 = () => {
  const details = DetailData.map((props) => {
    if (props.id === 1) {
      return (
          <div className="w-full h-screen">
               <div className="tu">
                <h1>{props.title}</h1>
                <img src={props.img}/>
                <p>{props.description}</p>
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
export default Title1;

