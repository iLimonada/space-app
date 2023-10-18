import React from 'react'
import { styled } from 'styled-components'
import NavItem from './NavItem'

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;   
`

const SideBar = () => {
  return (
    <aside>
        <nav>
            <StyledList>
                <NavItem
                    ActiveIcon="/icons/home-ativo.png"
                    InactiveIcon="/icons/home-inativo.png"
                    active={true}
                >
                    Inicio
                    </NavItem>
                    <NavItem
                    ActiveIcon="/icons/mais-vistas-ativo.png"
                    InactiveIcon="/icons/mais-vistas-inativo.png"
                >
                    Mais Vistas
                    </NavItem>
                    <NavItem 
                        ActiveIcon="/icons/mais-curtidas-ativo.png" 
                        InactiveIcon="/icons/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </NavItem>
                    <NavItem 
                        ActiveIcon="/icons/novas-ativo.png" 
                        InactiveIcon="/icons/novas-inativo.png"
                    >
                        Novas
                    </NavItem>
                    <NavItem 
                        ActiveIcon="/icons/surpreenda-me-ativo.png" 
                        InactiveIcon="/icons/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </NavItem>
            </StyledList>
        </nav>
    </aside>
  )
}

export default SideBar