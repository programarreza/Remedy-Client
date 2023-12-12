import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Theme from "./Theme";

const Nav = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar fluid rounded className="shadow-lg">
      <Navbar.Brand href="#">
        <img
          src="https://i.postimg.cc/k4RNH2Qm/Remedy.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Remedy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center gap-4 justify-center">
        {user && (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.displayName}</span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Theme />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="flex items-center gap-6 text-base">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add-blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
          }
        >
          Add Blog
        </NavLink>
        <NavLink
          to="/all-blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
          }
        >
          All blogs
        </NavLink>
        <NavLink
          to="/featured-blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
          }
        >
          Featured Blogs
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
          }
        >
          Wishlist
        </NavLink>

        </div>
        {user ? (
          ""
        ) : (
          <div className="flex justify-center items-center gap-6 text-base">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#ff4500]" : ""
              }
            >
              Register
            </NavLink>
            <div></div>
          </div>
        )}
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
