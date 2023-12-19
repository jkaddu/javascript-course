import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // Polyfiller
import 'regenerator-runtime/runtime'; // Polyfiller for async functions

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

////////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(id);

    recipeView.renderSpinner();
    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Render recipe
    recipeView.renderRecipe(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

['hashchange', 'load'].map(ev => window.addEventListener(ev, controlRecipes)); //
