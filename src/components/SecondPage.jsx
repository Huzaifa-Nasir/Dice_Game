import React, { useState } from 'react'
import NavSecond from './NavSecond'
import SideDice from './SideDice'
import RollDice from './RollDice'
import { Button, OutlineButton } from "./styled/Button"
import styled from 'styled-components'
import Rules from './Rules'

const SecondPage = () => {
  const [TotalScore,setTotalScore]=useState(0);
  const [selectedNum,setSelectedNum] = useState();
  const [BigDice,setBigDice]= useState(1);
  const[error,setError] = useState();
  const [showRules,setShowRules] = useState(false);
  const generate_num = (max,min)=>
  {
    return Math.floor(Math.random()*(max-min)+min);
  }
  function rollYourDice()
  {
    
    if(!selectedNum )
    {
      setError('You have not selected any number');
      return;
      
    }
     const random_num = generate_num(1,7);
     setBigDice(random_num);
     setError();
     if(selectedNum===random_num)
     {
       setTotalScore(TotalScore+random_num);
       setSelectedNum();
     }
     else
     {
      setTotalScore(TotalScore-2);
      setSelectedNum();
     }
  }

  function reset ()
  {
    setTotalScore(0);
  }
  
  return (
    <>
    <div className='flexi' style={{display:'flex', justifyContent:'space-between'
    ,alignItems:'end',margin:'20px', maxHeight:'130px'
}}>
      <NavSecond TotalScore={TotalScore} setTotalScore={setTotalScore} />
      <SideDice selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} setError={setError}/>
      

    </div>
    <div className="centerr" style={{display:'flex', justifyContent:'center',marginTop:'54px',cursor:'pointer'}}>
      <RollDice BigDice={BigDice} rollYourDice={rollYourDice} />
      </div>
<Btn>
<OutlineButton onClick={reset}>Reset Score</OutlineButton>
<Button onClick={()=> setShowRules((prev)=>!prev)} >{showRules?'Hide':'Show'} Rules</Button>
</Btn>

{showRules && <Rules/>}
    </>

    
  )
}

export default SecondPage

const Btn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;

`