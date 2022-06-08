export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(item) {
    const renderedCard = this._renderer(item)
    this._container.append(renderedCard);
  }

  prependItem(element) {
    this._container.prepend(element);
  }
}