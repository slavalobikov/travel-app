import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";

import {compose} from "redux";
import {connect} from "react-redux";


import CountryPage from "../Components/CountryPage/CountryPage";


const CountryPageContainer = (props) => {



    return (
        <CountryPage {...props} />
    );
};


const mapStateToProps = (state) => {
    return {

    }
};


export default compose(
    connect(mapStateToProps, {

    }),
    withRouter,
) (CountryPageContainer);