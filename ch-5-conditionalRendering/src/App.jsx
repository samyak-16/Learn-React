import UserGreeting from './UserGreeting';
function App() {
  return (
    <>
      <UserGreeting
        isLoggedIn={false}
        userName='Samyak Raj Subedi'
      ></UserGreeting>
    </>
  );
}

export default App;
