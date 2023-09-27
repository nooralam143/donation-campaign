import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const menuItems = document.querySelectorAll('.menu-btn li a');

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      // Remove the 'active' class from all anchor tags
      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      // Add the 'active' class to the clicked anchor tag
      event.target.classList.add('active');
    });
  });



  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/donation">Donation</NavLink></li>
    <li><NavLink to="/statistics">Statistics</NavLink></li>
  </>
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu-btn menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <Link to="/"><img src="../../../public/Logo.png" alt=""></img></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-btn menu-horizontal px-1">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;