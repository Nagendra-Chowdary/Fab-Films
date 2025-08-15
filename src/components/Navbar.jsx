import { Link } from "react-router-dom"
import '../styles/navbar.css'
export default function Navbar(){
    return(
        <nav className="navbar">
       <div className="navbar-brand">
        <Link to='/' >Fab Films</Link>
       </div>
       <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favourites" className="nav-link">Favourites</Link>
       </div>
        </nav>
    )
}