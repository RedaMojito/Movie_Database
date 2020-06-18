import React from 'react';
import { useSpring, animated, config } from 'react-spring';

import Movie from './MovieTitle.css';
const MovieTitle = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 3000}} );
    console.log(fade);
    return (
        <div>
            <animated.h1 className={Movie.h1} style={fade}> The Movie Database </animated.h1>
        </div>
    );
};

export default MovieTitle;