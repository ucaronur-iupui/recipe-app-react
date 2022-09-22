import React from "react";
export default class RecipeSearch extends React.Component {

    state = {
        recipes: [
            "Apple pie",
            "Cherry pie",
            "Orange pie",
            "Pumpkin pie",
            "Hamburger",
            "Ham steak",
            "Psuedocode",
            "Abstraction",
            "Polymorphism",
            "Encapsulation",
            "Lentil"
        ],
        searchTerm: "",
    }
    // 8.27

    render() {
        // get matching recipes
        // filter looks for any matching recipe that returns true
        let matchedRecipes = this.state.recipes.filter((recipe) => {
            return recipe.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase());
        });

        console.log(this.state.searchTerm)

        let recipeList = matchedRecipes.map(recipe => {
            return <li>{recipe}</li>;
        });


        return (
            <div className="recipe-search">
                <h2>Recipes</h2>
                <input 
                    value = {this.state.searchTerm} 
                    onChange = {(event) => {this.updateSearch(event);
                    }} 
                />
                <ul>{recipeList}</ul>
            </div>
        );
    }

    updateSearch(event) {
        this.setState({searchTerm: event.target.value});
    }

}