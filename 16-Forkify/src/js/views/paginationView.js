import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 import

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    const markup = `
    
    `;
    // Page 1, with other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'Page 1 and other pages';
    }

    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return 'Last page';
    }
    // Pages outside of the first and last page
    if (this._data.page < numPages) {
      return 'Other pages';
    }
    // Page 1, with NO other pages
    return 'Only 1 page';
  }
}

export default new PaginationView();
