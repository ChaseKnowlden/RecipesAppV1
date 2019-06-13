import React, {Component} from 'react';
import './App.css';

import Form from './components/Form'
import Recipes from './components/Recipes'

const api_key="18c136a87741916aaa18e2fc1ccde511";

class App extends Component {
  state={
    recipes : [],

  }

getRecipe = async (event) =>{
  const recipeName = event.target.elements.recipeName.value;
  event.preventDefault();
// I had to add https://cors-anywhere.herokuapp.com/ before the api URL because some api servers do not allow localhost call so with this we trick these type of servers
  const api_call= await fetch(`http://food2fork.com/api/search?key=${api_key}&q=${recipeName}`);
  const data = await api_call.json();
  console.log(data);
  this.setState({recipes:data.recipes});
  console.log(this.state.recipes)
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
