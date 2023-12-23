class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search_field').value;
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('subnit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
