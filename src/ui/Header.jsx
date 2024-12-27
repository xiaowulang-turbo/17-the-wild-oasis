import styled from "styled-components";
import Logout from "./Logout";

const StyleHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyleHeader>
      <Logout />
    </StyleHeader>
  );
}

export default Header;
