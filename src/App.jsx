import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import "./App.css";
import Layout from "./pages/Layout";
import Producto from "./pages/Producto";

function App() {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="galeria" element={<Galeria/>}/>
          <Route path="productos" element={<Productos/>}/>
          <Route path="productos/:productoId" element={<Producto/>}/>
          <Route path="*" element={<Error/>}/>     
        </Route>
          
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
