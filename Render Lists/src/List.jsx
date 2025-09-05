// function List() {
//   const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];
//   return (
//     <ol>
//       {fruits.sort().map((fruit) => (
//         <li>{fruit}</li>
//       ))}
//     </ol>
//   );
// }
// export default List;

// function List() {
//   const fruits = [
//     { id: 1, name: 'apple', calories: 95 },
//     { id: 2, name: 'orange', calories: 62 },
//     { id: 3, name: 'banana', calories: 105 },
//     { id: 4, name: 'coconut', calories: 354 },
//     { id: 5, name: 'pineapple', calories: 452 },
//   ];

//   //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
//   //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
//   fruits.sort((a, b) => a.calories - b.calories); // Accending order by calories
//   //   fruits.sort((a, b) => b.calories - a.calories); // Deconding order by calories

//   const lowCaloriesFruits = fruits.filter((fruit) => fruit.calories < 100);
//   const highCaloriesFruits = fruits.filter((fruit) => fruit.calories > 100);

//   return (
//     <ol>
//       {highCaloriesFruits.map((fruit) => (
//         <li key={fruit.id}>
//           Name : {fruit.name} &nbsp;Calories : <b>{fruit.calories}</b>
//         </li>
//       ))}
//     </ol>
//   );
// }
// export default List;

function List({ fruits = [] }) {
  fruits.sort((a, b) => a.calories - b.calories); // Accending order by calories

  return (
    <div>
      {fruits.length ? (
        <ol className='list-items'>
          {fruits.map((fruit) => (
            <li>
              name : {fruit.name} calories : {fruit.calories}
            </li>
          ))}
        </ol>
      ) : (
        'No fruits'
      )}
      {/* <ol className='list-items'>
        {fruits.map((fruit) => (
          <li>
            name : {fruit.name} calories : {fruit.calories}
          </li>
        ))}
      </ol> */}
    </div>
  );
}

export default List;
