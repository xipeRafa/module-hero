import styled from "styled-components";

const TextBannerP = styled.p`     
   font-size: 14px;
   margin-top: 0;
   margin-bottom: 1.2%;
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

const TextContainer = styled.div`
   width: 100%;
   margin: 1% 0;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
`

const TextModule = () => {
      return (

      <TextContainer>
            <MaxWidthContainer>
                  <TextBannerP>This is where the optional description goes whit a limit of 145 characteres, we use the body font in size 5 what an awesome description this is
                  </TextBannerP> 
            </MaxWidthContainer> 
      </TextContainer>
           
      )
}

export default TextModule
