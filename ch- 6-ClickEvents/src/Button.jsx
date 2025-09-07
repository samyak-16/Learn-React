// function Button() {
//   let count = 0;
//   const handleClick = (name) => {
//     count += 1;
//     if (count < 4) {
//       console.log('Thanks for clicking me', name);
//     } else {
//       console.log('Ouch Stop Clicking me ', name);
//     }
//   };
//   return <button onClick={() => handleClick('Samyak')}>Click Me</button>;
// }

// export default Button;

function Button() {
  const handleClick = (e) => {
    e.target.innerText = 'YOU CLICKED ME';
  };
  return <button onClick={handleClick}>Click Me</button>;
}

export default Button;
