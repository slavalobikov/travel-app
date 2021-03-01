import OwnPage from "../Components/OwnPage/OwnPage";
import {compose} from "redux";
import {connect} from "react-redux";


const OwnPageContainer = (props) => {

/*
    let first = props.countrysForCard.filter(el => (el.country.ru.toLowerCase().indexOf('') >= 0))
    let second = props.countrysForCard.filter(el => (el.capital.ru.toLowerCase().indexOf('') >= 0))
    let Dima = [];

    Dima = first.concat(second)

    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    console.log(unique(Dima))
    console.log(Dima)
*/


    return (
        <OwnPage {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        countrysForCard:state.CountryCardsReducer.countrysForCard,
        inputValue:state.CountryCardsReducer.inputValue,
        countryAfterInput:state.CountryCardsReducer.countryAfterInput,
    }
};

export default compose(
    connect(mapStateToProps, {

    })
) (OwnPageContainer);