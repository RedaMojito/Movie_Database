import React, { Component } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';


import Results from '../Components/Results';
import Popup from '../Components/Popup';
import SearchBar from '../Components/SearchBar';
import MovieTitle from './MovieTitle';

class MovieHome extends Component {
    
    constructor(props){
        super(props);
        this.state={
          s:'',
          results:[],
          selected:{},
        }
        this.handleInput = this.handleInput.bind(this);
        this.search= this.search.bind(this);
        this.openPopup= this.openPopup.bind(this);
        this.closePopup= this.closePopup.bind(this);
      }
      
    
        handleInput(e){
          let s = e.target.value;
          let search= this.state.s;
          search= s;
          this.setState({s:search});
          console.log(this.state.s);
        };
        
       search(e){
          if(e.key === 'Enter'){
              axios.get( 'http://www.omdbapi.com/?apikey=f8e19b82' + '&s=' + this.state.s).then(response=>{
                let res= response.data.Search;
                this.setState({results:res});      
                console.log(response.data);       
              });
          }
        };
    
        openPopup(id){
          axios.get('http://www.omdbapi.com/?apikey=f8e19b82' + '&i=' + id).then(response=>{
            let sel = response.data;
            console.log(response.data);
            this.setState({selected:sel});
          })
        };
    
        showSomth(){
          console.log('working');
        };
        closePopup(){
          this.setState({selected:{}});
        };
    
    render() {
        return (
            <div>
                <MovieTitle />
                <SearchBar typedMovie={this.handleInput} text={this.state.s} search={this.search} />
                <Results movieResults={this.state.results} open={this.openPopup} show={this.showSomth}/>
                {(typeof this.state.selected.Title != 'undefined') ?
                <Popup close={this.closePopup} selected={this.state.selected}/> :
                false
                } 
            </div>
        );
    }
}

export default MovieHome;