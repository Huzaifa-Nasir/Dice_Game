import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesHa>
      <h3>How to play dice game</h3>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then  2 point will be dedcuted </p>
      </RulesHa>
  )
}

export default Rules

const RulesHa = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; */
    margin: 0 auto;
    width: 798px;
    height: 208px;
    padding: 20px;
    margin-top: 30px;
    background-color: rgba(251, 241, 241, 1);
    border-radius: 5px;
   
`