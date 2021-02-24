import styled from "styled-components"

export const PrymaryColor = 'rgb(17,119,104)'

export const PrimaryButton = styled.button`
  height: 32px;
  padding: 0 30px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid ${PrymaryColor};
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 2%; 
  margin-bottom: 2%; 
  color: #FFF;
  background-color: ${PrymaryColor};
  border-color: rgb(73, 173, 158);
  outline: 0;

  &:hover{
    background-color: rgba(17, 119, 104, 0.878);
    border-color: rgb(73, 173, 158);
  } 

  &:focus{
      background-color: rgba(17, 119, 104, 0.678);
     }
`

 export const SecondaryButton = styled.button`
  height: 32px;
  padding: 0 30px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 2%; 
  margin-bottom: 2%; 
  background-color: transparent;
  outline: 0; 

  &:hover{
     color: #444;
     border-color: #888;
  } 

  &:focus{
     border-color: #666;
  }
`
export const ButtonsContainer = styled.div`
   display: flex;
   flex-direction: row;
`
