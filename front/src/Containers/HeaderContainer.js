import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";


import Header from "../Components/Header/Header";
import {editLang} from "../redux/reducers/LangReducer";
import {editArr} from "../redux/reducers/CountryCardsReducer";
import {withRouter} from "react-router-dom";

const HeaderContainer = (props) => {


    useEffect(() => {
        if (props.lang === 'Русский') {
            props.i18n.changeLanguage('ru')
        } else if (props.lang === 'English') {
            props.i18n.changeLanguage('en')
        } else if (props.lang === 'Deutsche') {
            props.i18n.changeLanguage('gr')
        }

    }, [props.lang, props.i18n])


    return (
        <Header {...props} />
    );
};


const mapStateToProps = (state) => {
    return {

    }
};


export default compose(
    connect(mapStateToProps, {
        editLang,
        editArr,
    }),
    withRouter
) (HeaderContainer);