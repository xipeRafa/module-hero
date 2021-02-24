 import HeaderModule from './HeaderModule'
 import TextModule from './TextModule'
 import ButtonsModule from "./ButtonsModule";

 import { StyledHr,HeaderComponent} from "./styles/styledCardModule";

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
