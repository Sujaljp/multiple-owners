import './Navbar2.css'

export  const Navbar = () => {
  return (
    <nav className="navbar2">
        <h1 className="header">Navbar</h1>
        <ul className="nav-links">
            <li className="contact">Projects</li>
            <li className="sevice">Services</li>
            <li className="about">About</li>
        </ul>
        <a href="#"><button>Contacts</button></a>
    </nav>
  )
}

export default Navbar