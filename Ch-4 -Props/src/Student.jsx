import PropTypes from 'prop-types';

// function Student(props) {
//   return (
//     <div className='studentCard'>
//       <p>Name : {props.name}</p>
//       <p>Age : {props.age}</p>
//       <p>Student : {props.isStudent ? 'Yes' : 'No'}</p>
//     </div>
//   );
// }

// Type Defination for props
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};
//! Deprecated

// Student.defaultProps = {
//   name: 'Adam Joe',
//   age: 0,
//   isStudent: false,
// };

//! Instead use object destructuring :

function Student({ name = 'Adam Joe', age = 0, isStudent = false }) {
  return (
    <div className='studentCard'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default Student;
