import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 import

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    const markup = `
    
    `;
    // Page 1, with other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button> 
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      `;
    }
    // Pages outside of the first and last page
    if (curPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button> 
      `;
    }
    // Page 1, with NO other pages
    return '';
  }
}

export default new PaginationView();
