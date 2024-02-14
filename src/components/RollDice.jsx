import styled from "styled-components"



const RollDice = ({BigDice,rollYourDice}) => {
 
  
  return (
    <>
    <Bigdice onClick={rollYourDice}>
       <img src={`./images/Bigdiceimage/dice_${BigDice}.png`} alt="" />
      <p>Click on Dice to roll</p> 
      
    </Bigdice>

</>
  )
}

export default RollDice
const Bigdice= styled.div`
font-size: 23px;
display: flex;
align-items: center;
flex-direction: column;


img{
max-width: 150px;
max-height: 1500px;
}

`