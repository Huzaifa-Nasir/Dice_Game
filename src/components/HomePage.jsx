import React from 'react'
import styled from 'styled-components'
import { Button } from './styled/Button'



const HomePage = ({toogle}) => {
  return (
    <div>
      <Container>
        <div className="image">
          <img src="./images/dices.png" alt="" />
        </div>
         <Space>
        <h1>DICE GAME</h1>
        <Button onClick={toogle} >Play Now</Button>
        </Space>
       
      </Container>
    </div>
  )
}

export default HomePage

const Container = styled.div`
display: flex;
margin: 0 auto;
justify-content: center;
align-items: center;

`;


const Space =  styled.div`
display: flex;
flex-direction: column;
h1{
  /* width: 528px;
  height: 144px; */
  font-size: 4.5rem;
  font-weight: 600;
}
`

