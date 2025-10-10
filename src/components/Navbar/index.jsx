import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        
        <nav className="flex gap-4 p-4 border-b">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">Sobre</Link>
            <Link to="/contact" className="hover:underline">Contato</Link>
        </nav>
    )
}