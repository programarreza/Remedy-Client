import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar fluid rounded className="shadow-lg">
      <Navbar.Brand href="#">
        <img
          src="https://i.postimg.cc/PfCX7Sxy/Remedy_I2.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Remedy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
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

        <div className="flex justify-center items-center gap-5">
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
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
