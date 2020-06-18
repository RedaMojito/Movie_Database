import React from 'react';
import AboutImage from './Logimage/myke-simon-atsUqIm3wxo-unsplash.jpg'
import classes from './About.module.css';

const About = props => {
    return (
        <div className={classes.Main}>
            <h1>About Page</h1>
            <div className={classes.container}>
                <p className={classes.About}>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
             quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
              Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
             Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
            </p>
            <img className={classes.img} src={AboutImage} alt="MovieTheater"/>
            </div>
       
        </div>
    );
};



export default About;