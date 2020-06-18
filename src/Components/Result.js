import React from 'react';
import classes from './Result.module.css';
const result = (props)=>{
    return (
        <div className={classes.Result}  >
            <img className={classes.MovieImage} src={props.result.Poster} onClick={props.re} />
             <h3 className={classes.H3}>{props.result.Title}</h3>
        </div>
    )
}

export default result;