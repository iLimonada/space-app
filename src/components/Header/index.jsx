import { styled } from "styled-components";
import TextField from "../TextField";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

const Header = ({ filter, setFilter }) => {
  return (
    <StyledHeader>
      <img src="/img/logo.png" />
      <TextField filter={filter} setFilter={setFilter} />
    </StyledHeader>
  );
};

export default Header;
