function Button() {
  const buttonStyle = {
    backgroundColor: 'hsl(200, 100%, 50%)',
    color: 'whitesmoke',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <>
      <button style={buttonStyle}>Click Me</button>
    </>
  );
}

export default Button;
