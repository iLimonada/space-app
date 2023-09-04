import React from 'react'
import { styled } from 'styled-components'

const StyledListItem = styled.li`
    font-size: 1.5rem;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7b38e5' : '' };
    
`

const NavItem = ({children, ActiveIcon, InactiveIcon, active = false}) => {
  return (
  <StyledListItem $active={active}>
        <img src={active ? ActiveIcon : InactiveIcon} alt="" />
        {children}
  </StyledListItem>
  )
}

export default NavItem