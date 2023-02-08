import React from "react";
import styles from '../components/style.module.css';
import {getClasses} from '../components/getClasses'

const Button = ({variant, text})=>{
    const ButtonTypes = {
        blue: 'blue',
        red: 'red',
        black: 'black',
    }
    return(
        
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${ButtonTypes[variant]}`]]
        )}>

            
            {text}
        </button>
    );
};
export default Button;