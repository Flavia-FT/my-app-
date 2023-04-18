import React from 'react';
import PropTypes from 'prop-types';

const Button2 = ({message = "Click Me"}) =>{
    return (
        <button>{message}</button>
    )
    }
// const Button2=() => {
//     return(
//         <button>Button2</button>
//     )
// }

export default Button2;