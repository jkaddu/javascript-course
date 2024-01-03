import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2 import

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto; // + symbol converts it from a string to a number

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const nextButton = `
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;

    const prevButton = `
    <button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    `;

    // Page 1, with other pages
    if (curPage === 1 && numPages > 1) {
      return nextButton;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return prevButton;
    }
    // Pages outside of the first and last page
    if (curPage < numPages) {
      return `${prevButton}${nextButton}`;
    }
    // Page 1, with NO other pages
    return '';
  }
}

export default new PaginationView();
