import React from 'react';

import Result from './Result';
import classes from './Results.module.css';

const results = (props)=>{

        
    return(
        <div className={classes.Results}>
          {
           props.movieResults? props.movieResults.map(result=>{
                return <Result result={result}
                                key={result.imdbID}
                                re={()=>props.open(result.imdbID)} 
                                />
            }) : 'Loading...'
          }  
        </div>
    )
}

export default results;