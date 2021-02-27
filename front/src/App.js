import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";


function App() {

    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token


    return (
            <div className="App">
                <h1>Hello {!!userId && userId}</h1>
                <Route path={'/register'} render={() => <RegisterPage login={login} />}/>
                <Route path={'/login'} render={() => <LoginPage login={login} />}/>
            </div>
            );
            }

            export default App;
