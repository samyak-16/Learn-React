function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
alert('Yoooo');
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);

// Here we made our own render function for our ReactLike  simple library ,
// But when we use React we render using the render function which is already provided by React , ie .render() ,which takes reactElement created using react.createElement()
