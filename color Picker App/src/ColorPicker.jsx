import { useState } from 'react';
const ColorPicker = () => {
  const [color, setColor] = useState('#FFFFFF');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{ background: color }}>
          <p>Selected Color :{color} </p>
        </div>
        <label className='color-input'>
          Select a color :
          <input type='color' value={color} onChange={handleColorChange} />
        </label>
      </div>
    </>
  );
};

export default ColorPicker;
