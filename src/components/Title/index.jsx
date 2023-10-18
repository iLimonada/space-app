import styled from 'styled-components'

const Title = styled.h2`
    color: #7B78E6;
    font-size: 2rem;
    text-align: ${props => props.$alignment ? props.$alignment : 'left'};
    font-weight: 400;
`

export default Title