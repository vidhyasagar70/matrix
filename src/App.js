import React, { useState } from 'react';

const Matrix = ()=>{
  const [colors, setColors] = useState(Array(9).fill(null));
  const [clickOrder,setClickOrder]= useState([]);
  
  const handleClick = (index) =>{
    if(colors[index] === 'green') return;

    const updatedColors =[...colors];
    updatedColors[index]='green';
    setColors(updatedColors);

    const newClickOrder=[...clickOrder,index];
    setClickOrder(newClickOrder);

    if(index === 8){
      let delay = 0;
      newClickOrder.forEach((i,idx)=>{
        setTimeout(()=>{
          const sequenceColors=[...colors];
          sequenceColors[i] = "orange";
          setColors(sequenceColors);
        },delay);
        delay +=500;
      });
    }
  };
return(
  <div style={{display:"grid",gridTemplateColumns:"repeat(3,100px)",gap:"10px"}}>

    {
      Array(9).fill(null).map((_,index)=>(
        <div
            key={index} onClick={()=> handleClick(index)}
            style={{
              width:"100px",
              height:"100px",
              backgroundColor:colors[index] || "lightgray",
              display:"flex",
              justifyContent:"center",
              border:"1px solid black",
              cursor:"pointer",
            }}>
            {index+1}
          </div>

      ))
    }
  </div>

 );
};
export default Matrix;