import styled from "styled-components"

const HeaderOne = styled.h1`
  margin-bottom: 0;
`
const HeaderSix = styled.h6`
  margin: 0;
  margin-bottom: -10px;
`

const MaxWidthContainer = styled.div`
   max-width: 90%;
   float: left;

margin: 1% 0;
width: 100%;
text-align: left;
padding: 1% 2%;
float: left;
`

const HeaderContainer = styled.div`

width: 100%;
margin: 1% 0;
box-sizing: border-box;
display: flex;
flex-direction: column;


`

const HeaderModule = () => {
      return (
          
      <HeaderContainer>
            <MaxWidthContainer>
               <HeaderSix>OPTIONAL EYEBROW MAX 34 CHARACTERS</HeaderSix>    
               <HeaderOne>H1 title max of fourty characteres</HeaderOne> 
            </MaxWidthContainer> 
      </HeaderContainer>
                  
      )
}

export default HeaderModule
