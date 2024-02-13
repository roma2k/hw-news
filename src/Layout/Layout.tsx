import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
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

        <hr />

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
