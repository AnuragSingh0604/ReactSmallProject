import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="navbar">
      <img src="" alt=""></img>
      <ul>
        <NavLink to='/'> <li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'> <li>About</li></NavLink>

      </ul>
      <button onClick={() => Navigate('/about', { replace: true })}>Get Started</button>
    </div>
  )
}
export default Navbar;