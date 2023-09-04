import { styled } from "styled-components"
import TextField from "../TextField"

const StylzedHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    
    img {
        max-width: 212px;
    }
`

const Header = () => {
  return (
    <StylzedHeader>
        <img src="/img/logo.png"/>
        <TextField/>
    </StylzedHeader>
  )
}

export default Header