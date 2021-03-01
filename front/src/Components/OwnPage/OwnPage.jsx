import React from 'react';
import CardCountry from "../CardCountry/CardCountry";
import s from './OwnPage.module.css'

const OwnPage = ({t, countrysForCard, lang, inputValue}) => {


    return (
        <div className={s.ownPage}>
            {countrysForCard.map(card => <CardCountry
                t={t} key={card.id}
                id={card.id}
                lang={lang}
                country={card.country}
                capital={card.capital}
                img={card.img}
            />)}
            {/*<CardCountry t={t} lang={lang} country={countrysForCard[0].country} capital={countrysForCard[0].capital}  />*/}

        </div>
    );
};

export default OwnPage;