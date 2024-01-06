import icons from 'url:../../img/icons.svg'; // How to import using Parcel 2

export default class View {
  _data;

  render(data, render = true) {
    // Checks for undefined/null and if theres an empty array
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(); // Guard clause for unmatched searches

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError(); // Guard clause for unmatched searches

    this._data = data;
    const newMarkup = this._generateMarkup();

    // Converts HTML aka markup into DOM nodesList
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    // Converts the new elements and current elements into an array
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Updates changed text
      // compares if new node does not have the same content as the current node and to make sure the node
      // value contains text. trim() eliminates white space, ? is optional chaining so if there isn't a child element/node //
      // it'll go with the parents element/node text content
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed attributes
      // compares if new node does not have the same content as the current node
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> 
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="success">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> 
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
