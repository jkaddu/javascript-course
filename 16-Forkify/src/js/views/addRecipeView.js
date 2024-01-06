import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 import

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _generateMarkup() {}
}

export default new AddRecipeView();
