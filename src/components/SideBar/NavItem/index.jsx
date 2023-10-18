import React from 'react'
import { styled } from 'styled-components'

const StyledListItem = styled.li`
    font-size: 24px;
    line-height: 28.8px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B38E5' : '#D9D9D9' };
    font-family: ${ props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular' };
    display: flex;
    align-items: center;
    gap: 22px;
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