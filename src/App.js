
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contacts";
import { Route } from "react-router-dom";
import { Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path="/" element= {<Home/>}></Route>
    <Route path="/about" element= {<About/>}></Route>
    <Route path="/contact" element= {<Contact/>}></Route>
   </Routes>
 
   
        </BrowserRouter>
    )


}

export default App;
