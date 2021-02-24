 import HeaderModule from './HeaderModule'
 import TextModule from './TextModule'
 import ButtonsModule from "./ButtonsModule";

 import styled from "styled-components"
 const PrymaryColor = 'rgb(17,119,104)'

 const StyledHr = styled.hr`
  border: none;
  height: 6px;
  width: 10%;
  background:${PrymaryColor};
  margin: 0;
  margin-left: 2%;
  margin-bottom: 2%;
 `
 const HeaderComponent = styled.div`
    max-width: 96%;
    text-align: left;
    color: #444;
    width: 100%;
    float: left;
    box-sizing:border-box;
    padding:1.4%;
    margin:2%;
    background:rgb(231, 230, 230);
    border-radius: 1%;

  @media (max-width: 768px){
      width: 58.5%
  }

  @media (max-width: 575px){
      width: 100%
  }

  @media (min-width: 768px) {
      width: 50%;
  }

  @media (min-width: 1024px){
      width:42%
  }
`


const CardModule = () => {
      return (
          
       <HeaderComponent> 
         <HeaderModule />

          <StyledHr></StyledHr>

         <TextModule />
         <ButtonsModule /> 
       </HeaderComponent> 
               
     )
}

export default CardModule
