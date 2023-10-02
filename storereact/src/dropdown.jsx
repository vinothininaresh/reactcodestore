import React, { useState } from "react";
export default function Dropdown(){
   const [color,setcolor] = useState('');
   const changeColor = (newColor) =>{
    const newColors = newColor.target.value;
    setcolor(newColors);
   };
   return (
    <div>
     <h2>color change</h2>
     <select onChange={changeColor} value={color}>
        <option value=""> select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
     </select>
     <p style={{color:color}}> This is a colored paragraph.</p>
        {/* <button onClick={() => changeColor('red')}>Red</button> */}
      {/* <button onClick={() => changeColor('blue')}>Blue</button> */}
      {/* <button onClick={() => changeColor('green')}>Green</button>  */}
      
    </div>
  );
}