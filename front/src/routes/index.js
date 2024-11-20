import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Index from '../Pages/Index'
import Livro from "../Pages/Livro";
import Home from "../Pages/Home";


// const Private = ({ Item }) => {
//     const login = false;

//     return login > 0 ? <Item /> : <Login />;
// };

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes> 
                {/* <Route exact path="/home" element= {<Private Item={Home}/> }/> */}
                <Route path="/login" element= {<Login/>} />
                <Route exact path="/cadastro" element= {<Cadastro/>}/>
                <Route path="/" element={<Home />} />
                <Route path="/livro" element={<Livro />} />
            </Routes>
        </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;