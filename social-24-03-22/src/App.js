import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/home"
import FeedPage from "./Pages/feed"
import NotFoundPage from "./Pages/NotFound"
import LoginPage from "./Pages/login"
import RegisterPage from "./Pages/register"
import PerfilPage from "./Pages/perfil"

import { UserContext } from "./auth";

export default function App(){
    const { currentUser } = React.useContext(UserContext);

    if(!currentUser){
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={ <LoginPage/> }></Route>
                    <Route path="/register" element={ <RegisterPage/> }></Route>
                    <Route path="*" element={ <Navigate to="/login" /> }></Route>
                </Routes>
            </BrowserRouter>
        )
    }else{
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <FeedPage/> }></Route>
                    <Route path="/explorar" element={ <HomePage/> }></Route>
                    <Route path="/perfil" element={ <PerfilPage/> }></Route>
                    <Route path="*" element={ <NotFoundPage /> }></Route>
                </Routes>
            </BrowserRouter>
        )
    }
    

}