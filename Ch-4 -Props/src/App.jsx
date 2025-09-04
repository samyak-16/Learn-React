import Student from './Student';
function App() {
  return (
    <>
      <Student name='Samyak' age={30} isStudent={false}></Student>
      <Student name='Suyash' age={27} isStudent={false}></Student>
      <Student name='Sambhav' age={25} isStudent={15}></Student>
      <Student></Student>
    </>
  );
}

export default App;
