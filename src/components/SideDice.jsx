// import { useState } from "react";
import styled from "styled-components"

const SideDice = ({selectedNum,setSelectedNum,error}) => {
    const arr=[1,2,3,4,5,6];
  
    
   
   
    
  return (
    <>
    <Main>
      <div className="red" style={{color:'red'}}>
     {error}
     </div>
    <div className="flex" style={{display:'flex',gap:'8px'}}>
           { arr.map((value,i)=>
           (
            
             <Box key={i} onClick={()=>setSelectedNum(value) && error()} isSelected={value===selectedNum}  > {value}</Box>
           ))}
           </div>
           <p>Select Number</p>
           </Main>
           </>
  )
}

export default SideDice

const Box = styled.div`
   height: 72px;
   width: 72px;
   display: grid;
   place-items: center;
   font-size: 24px;
   font-weight: 600;
    border: 2px solid black;
    cursor: pointer;
    background-color: ${(props)=> (props.isSelected? 'black':'white')};
    color: ${(props)=> (!props.isSelected? 'black':'white')};

 
`
const Main = styled.div`

p{
    font-size:24px;
    
}
`
