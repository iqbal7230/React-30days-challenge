import './App.css';


function App() {
  return (
    <nav className="nav">
    <ul className="nav__menu">
      <li className="nav__menu-item"><a>Home</a></li>
      <li className="nav__menu-item"><a>Services</a>
        <ul className="nav__submenu">
          <li className="nav__submenu-item"><a>Web Design</a></li>
          <li className="nav__submenu-item"><a>Web Development</a></li>
          <li className="nav__submenu-item"><a>Web Hosting</a></li>
        </ul>
      </li>
      <li className="nav__menu-item"><a>About</a>
        <ul className="nav__submenu">
          <li className="nav__submenu-item"> <a>Our Company</a></li>
          <li className="nav__submenu-item"> <a>Our Team</a></li>
          <li className="nav__submenu-item"> <a>Our Reach</a></li>
        </ul>
      </li>
      <li className="nav__menu-item"><a>Blog</a></li>
      <li className="nav__menu-item"><a>Contact</a></li>
      
      
    </ul>
  </nav>
  );
}

export default App;
