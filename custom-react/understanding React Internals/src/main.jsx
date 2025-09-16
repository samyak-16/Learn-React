import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';

const MyApp = () => {
  return (
    <>
      <p>Hello Worlld I'm Returned by MyApp Function</p>
      <p>Variable : {variable}</p>
    </>
  );
};

// test
// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit google',
// };

const anotherElenent = <p>I am another test Element </p>;
const variable = 'Injected as a Variable';

const reactElement = React.createElement(
  'a',
  {
    href: 'https://youtube.com',
  },
  'Click Me to visit Google',
  variable // Variables are added like this : Under the hood  : )
);
console.log('React Element  ;  ', reactElement);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <MyApp /> "This is same as calling MyApp function as {MyApp()}" */}
//     {/* Let's Try it  */}
//     { MyApp() }
//      {/* It stil works same as <MyApp/> */}
//   </StrictMode>
// );

createRoot(document.getElementById('root')).render(
  // MyApp() //  Works Fine
  // anotherElenent // Renders  anotherElement :This too  Works fine
  reactElement
);
