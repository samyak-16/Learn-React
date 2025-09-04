function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.userName}</h2>;
  //   } else {
  //     return <h2>Please Login to Continue</h2>;
  //   }

  //!OR

  return props.isLoggedIn ? (
    <h2 className='welcome-message'>Welcome {props.userName}</h2>
  ) : (
    <h2 className='login-prompt'>Please Login to continue</h2>
  );
}

export default UserGreeting;
