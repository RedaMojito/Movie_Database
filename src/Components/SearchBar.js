import React from 'react';

import classes from './SearchBar.module.css';

const searchBar= (props)=>{
    return (
        <React.Fragment>
            <input type='text'
             className={classes.SearchBar} 
             placeholder='Enter movie name...' 
             onChange={props.typedMovie} 
             value={props.text}
            onKeyPress={props.search}
         
              />
           
        </React.Fragment>
    )
}

export default searchBar;