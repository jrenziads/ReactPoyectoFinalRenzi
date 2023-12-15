import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
function NavBar(){

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="galeria">Galeria</Link>
            <Link to="productos">Productos</Link>
            <CartWidget/>
        </nav>


    )


}

export default NavBar;