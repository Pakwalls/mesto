export default class Section {
  constructor(renderer , containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(data) {
    data.forEach(itemData => {
      this.addElement(this._renderer(itemData));
    });
  }

  addElement(element) {
    this._container.append(element);
  }

  prependItem(item) {
    this._container.prepend(this._renderer(item));
  }
}