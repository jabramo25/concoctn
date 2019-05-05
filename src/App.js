import React from 'react';
import SearchBar from './components/SearchBar';

import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  calculateTimeOfDay() {
    let currentHours = new Date().getHours();
    if (currentHours < 10) {
        return {
          label: "It's morning, start your day off with one of these breakfast options.",
          typeOfMeal: "breakfast"
        };
    } else if (currentHours < 17) {
      return {
        label: "It's afternoon, here's some quick lunch ideas.",
        typeOfMeal: "lunch"
      };
    } else if (currentHours < 22) {
        return {
          label: "It's evening, here's some tasty dinner ideas.",
          typeOfMeal: "dinner"
        };
    } else if (currentHours < 25) {
       return {
        label: "It's late, let's get some snacks, drinks, or dessert.",
        typeOfMeal: "snack"
      };
    }
  }

  getRecommendedItems() {
    let typeOfMeal = this.calculateTimeOfDay().typeOfMeal;
    //send ajax call to fetch recommended meals
    let recommendedMeals = [
      {
        "recipeId": "56",
        "recipeName": "Gin Fizz",
        "description": "Gin, citrus, syrup and soda water is all you need to create this simple but delicious cocktail.",
        "timeToMake": "5 Minutes"
      },
      {
        "recipeId": "653",
        "recipeName": "Vegan Nachos",
        "description": "These nachos use daiya cheese and soy based sour cream to make a delicious vegan treat.",
        "timeToMake": "25 Minutes"
      },
      {
        "recipeId": "5588",
        "recipeName": "Vegan Banana Bread",
        "description": "A few simple substitutions make this classic an easy-to-make vegan favorite.",
        "timeToMake": "55 Minutes"
      }        
    ];
    return recommendedMeals; 
  }

  render() {
    return (
      <div id="mainContent">
        <div id="searchContainer">
          <SearchBar searchId="homePageSearch" searchLabel="What do you feel like making today?"></SearchBar>
        </div>
        <div id="recommendations">
          <h3 className="recommendation-text">{this.calculateTimeOfDay().label}</h3>
          <div id="recommendedRecipeList">
            {this.getRecommendedItems().map((item, key) => 
              <div class="recommended-recipe">
                <Link to={"/recipe/" + item.recipeId}>{item.recipeName}</Link>
                <div>{item.description}</div>
                <span class="bold">Time to make: </span><span>{item.timeToMake}</span>
              </div>
            )}
          </div>
        </div> 
      </div>

    )
  }
}
export default App
