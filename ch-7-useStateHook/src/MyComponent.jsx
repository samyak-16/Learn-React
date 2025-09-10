import { useState } from 'react';

function MyComponent() {
  let [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const updateName = () => {
    setName('Samyak');
  };
  const updateAge = () => {
    setAge(age + 1);
  };

  return (
    <>
      <p>Name : {name}</p>
      <button onClick={updateName}>setName</button>
      <p>Age : {age}</p>
      <button onClick={updateAge}>addAgee</button>
    </>
  );
}

export default MyComponent;
