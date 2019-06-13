import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const API_KEY = "f39b77adf0514badcf2fc13d45963b2e";

export default class SingleRecipe extends Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
       const title = this.props.location.state.recipe;
     
        // I had to add https://cors-anywhere.herokuapp.com/ before the api URL because some api servers do not allow localhost call so with this we trick these type of servers
        const req= await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        // console.log(res.recipes[0]);
        this.setState({activeRecipe: res.recipes[0]})
    }

    render() {
        const recipe = this.state.activeRecipe
        return (
            <div className="container">
                <div className="active-recipe">
                    <img class="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                    <h3 class="active-recipe__title">{recipe.title}</h3>
                    <h5 class="active-recipe__publisher">{recipe.publisher}</h5>
                    <p class="active-recipe__website">Website: {recipe.publisher} <span> | <a href={recipe.publisher_ur}>{recipe.publisher_url}</a></span></p>
                    <button className="active-recipe__button">
                      <Link to="/">Home Page</Link>  
                        </button>
                </div>
            </div>
        )
    }
}