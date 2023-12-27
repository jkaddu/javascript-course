import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 import

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1, with other pages
    const markup = `
    
    `;
    // Page 1, with no other pages

    // Last page

    // Pages outside of the first and last page
  }
}

export default new PaginationView();
