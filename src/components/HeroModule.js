import CardModule from './CardModule'

import styled from 'styled-components'

const ImageContainer = styled.div`
  display:block;
  position: relative;
  width: 90%;
  margin: 0 0;
  box-sizing: border-box;
  overflow: hidden;
 background: Darkred;

 margin: 1% 0;
width: 100%;
text-align: left;
padding: 1% 2%;
float: left;
`

const HeroContainer = styled.div`

width: 100%;
margin: 1% 0;
box-sizing: border-box;
display: flex;
flex-direction: column;


`

const HeroModule = () => {
      return (

             <HeroContainer>
                 <ImageContainer>
                     <CardModule /> 
                 </ImageContainer>
             </HeroContainer>
    )
}

export default HeroModule;