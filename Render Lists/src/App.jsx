import List from './List';

function App() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 62 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 354 },
    { id: 5, name: 'pineapple', calories: 452 },
  ];
  return (
    <div>
      <List fruits={fruits}></List>
      <List></List>
    </div>
  );
}

export default App;
