import React from "react";
import DetailData from "../data/data";
import Button from "../components/button";
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const details = DetailData.map((props) => {
      if (props.id === 1) {
        return (
       <div className="twa">
            <div className="tu">
                <h1>{props.title}</h1>
                <img src={props.img}/>
                <p>{props.description}</p>
                <Link to={'/title1'}><Button variant='blue' text='more' /></Link>
            </div>
            <div className="tu">
                <h1>{props.title1}</h1>
                <img src={props.img1}/>
                <p>{props.description1}</p>
                <p>{props.description1}</p>
                <Link to={'/title2'}><Button variant='red' text='more' /></Link>
            </div>
            <div className="tu">
                <h1>{props.title2}</h1>
                <img src={props.img2}/>
                <p>{props.description2}</p>
                <p>{props.description2}</p>
                <Link to={'/title3'}><Button variant='black' text='more' /></Link>
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
export default Home;























// const Home1 = ()=>{
//     return(
//         <div className="body">
//                 <div className="aa">
//                 <Link to={"/red"}><Button variant='red' text='READ MORE' img={Zurag1} /></Link>

//                 <Link to={"/"}><Button variant='image' text='READ MORE' img={Zurag1} /></Link>
   
//             </div>
//             <div className="aa">  
//                 <Link to={"/lime"}><Button variant='lime' text='READ MORE' img={Zurag1} /></Link>
                
//                 <Link to={"/blue"}><Button variant='blue' text='READ MORE' img={Zurag1} /></Link>
             
//             </div>
//         </div>
//     );
// };
// export default Home1;