import styled from "styled-components"
import SideDice from "./SideDice";

const NavSecond = ({TotalScore}) => {
 

  return (
   <div className="flexi" style={{display:'flex', justifyContent:'space-between'}}>
    <Heads>
        <div>
        <h1>{TotalScore}</h1>
        <p>Total Score</p>
        </div>
    </Heads>
    
      </div>
  )
}

export default NavSecond

const Heads = styled.div`
max-width: 200px;
text-align: center;
position: absolute;
top: 20px;




h1{
   font-size: 70px;
  font-weight: 600;
  margin-bottom: 0px;
   
}
p{
    font-size: 24px;
    margin-top: 0;
}

`
