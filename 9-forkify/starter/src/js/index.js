import Search from "./models/Search";
import Recipes from "./models/Recipes";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import { elements, renderLoader, clearLoader } from "./views/base";

/** Global state of the app
 *  search object
 * current recipe
 * shopping list object
 * liked recipes
 */

const state = {};

/**
 * Search controller
 */
const controlSearch = async () => {
  // 1) get query from view
  const query = searchView.getInput();

  if (query) {
    // 2) new search object and add to state
    state.search = new Search(query);

    // 3) prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) search for recipes
      await state.search.getResults();

      // 5) render results on UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      alert("Trouble with search");
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPage.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/**
 * Recipe controller
 */
const controlRecipe = async () => {
  // get ID from url
  const id = window.location.hash.replace("#", "");
  console.log(id);

  if (id) {
    // prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // highlight selected search item
    if (state.search) searchView.highLightSelected(id);

    // create a new recipe object
    state.recipe = new Recipes(id);

    try {
      // get recipe data and parse ingredients
      await state.recipe.getRecipe();
      console.log(state.recipe.ingredients);
      state.recipe.parseIngredients();

      //calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();
      // render recipe
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (error) {
      alert("Error getting recipe");
      console.log(error);
    }
  }
};

//window.addEventListener("hashchange", controlRecipe);
//window.addEventListener('load', controlRecipe);

//another way to write whats on line 80 and 81
["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

// handling recipe button clicks
elements.recipe.addEventListener("click", e => {
  if (e.target.matches(".btn-decrease, .btn-decrease *")) {
    // decrease button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-increase, .btn-increase *")) {
    // increase button is clicked
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  }
  console.log(state.recipe);
});
