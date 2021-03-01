import React from 'react';
import {Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {useAuth} from "./hooks/auth.hook";

import HeaderContainer from "./Containers/HeaderContainer";

import { useTranslation } from "react-i18next";
import OwnPageContainer from "./Containers/OwnPageContainer";
import CountryPage from "./Components/CountryPage/CountryPage";
import CountryPageContainer from "./Containers/CountryPageContainer";


function App({lang}) {

    console.log('langApp', lang)
    const { t, i18n } = useTranslation();


    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token


    return (
        <div className="App">
            <HeaderContainer i18n={i18n} lang={lang}  />
{/*            <div><h1>{t("title")}</h1></div>
            <div>{t("description.part1")}</div>
            <div>{t("description.part2")}</div>*/}
            <Route path={'/'} exact render={() => <OwnPageContainer lang={lang} t={t} />} />
            <Route path={'/country/:id'}  render={() => <CountryPageContainer />} />
{/*
            <h1 className={s.h1}>Hello {!!userId && userId}</h1>
*/}
            <Route path={'/register'} render={() => <RegisterPage login={login}/>}/>
            <Route path={'/login'} render={() => <LoginPage login={login}/>}/>
        </div>
    );
}

export default App;
