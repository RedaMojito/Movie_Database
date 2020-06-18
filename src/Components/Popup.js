import React from 'react';

import classes from './Popup.module.css';

const popup =(props)=> {
    return (
        <div className={classes.Popup}>     
             <div className={classes.PopupChild1}>
            <h2 className={classes.h2}>{props.selected.Title} <span className={classes.span}>({props.selected.Year})</span></h2>
            <p className={classes.Rating} >Rating: {props.selected.imdbRating}</p>
            <div className={classes.PopupChild2} >
                <img className={classes.img} src={props.selected.Poster}/>
                <p className={classes.Plot}>{props.selected.Plot}</p>
            </div>
            <button className={classes.button} onClick={props.close}>Close</button>
        </div>
            
        </div>
  
    );
}

export default popup;
