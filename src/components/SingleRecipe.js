import React, { Component } from 'react'


const API_KEY = "18c136a87741916aaa18e2fc1ccde511";

export default class SingleRecipe extends Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
       const title = this.props.location.state.recipe;
     
        // I had to add https://cors-anywhere.herokuapp.com/ before the api URL because some api servers do not allow localhost call so with this we trick these type of servers
        const req= await fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
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
                    <h4 class="active-recipe__publisher">{recipe.publisher}</h4>
                </div>
            </div>
        )
    }
}