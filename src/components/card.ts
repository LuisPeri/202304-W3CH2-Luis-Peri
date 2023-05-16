export abstract class Component {

  selector!: string;
  element: Element;
  template: string;

  constructor(selector: string) {
    this.selector = selector;

  }

  render() {
    const element = document.querySelector(this.selector);
    if (!element) throw new Error("invalid selector");
    this.element = element;

    this.element.innerHTML = this.template;
  }
}
