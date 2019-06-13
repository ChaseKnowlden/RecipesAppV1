import React from 'react';
import {Link} from 'react-router-dom'


// as we have a stateless component we can not use ""this.state"" We need to replase it with ""props"" 
const Recipes = (props) =>(
    <div className="container">
        <div className="row">

            {props.recipes ? props.recipes.map((recipe)=>{
          return(
     <div  key={recipe.recipe_id} className="col-md-4" style={{marginBottom : "2rem"}}>
     <div className="recipes__box">

            <div>
            <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title}/>
    <div className="recipe__text">     
    {/* I have added this if condition to preven long title from continue after 25 caracters */}
           <h5 className="recipes__title"> {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0 , 25)}...`}
           </h5>
           <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
    </div>
    <button className="recipe_buttons"><Link to={{pathname:`/recipe/${recipe.recipe_id}`, state:{recipe:recipe.title}}}>Veiw this recipe</Link></button>
    </div>
    </div>
            </div>
            )}) : <p>Loading ...</p>}

            
        </div>
    </div>
);

export default Recipes;




