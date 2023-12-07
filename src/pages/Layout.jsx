import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";

function Layout(){

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>Autos del Sur SA</footer>
        </div>
    )
}

export default Layout;