import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  background-color: #2c2a2a;
  color: white;
  padding: 10px;
  nav {
    a {
      color: white;
      text-decoration: none;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 20px;
      li {
        float: left;
        list-style-type: none;
      }
    }
  }
`;

const StyledMainContainer = styled.div`
  
  padding-top: 20px;
`

const Layout = () => {
  return (
    <>
      <StyledMenu>
        <nav>
          <ul>
            <li>
              <Link to="/">All news</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
      </StyledMenu>
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
    </>
  );
};

export default Layout;
