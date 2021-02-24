import CardModule from './CardModule'
import {HeroContainer,ImageContainer} from './styles/styledHeroModule'
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