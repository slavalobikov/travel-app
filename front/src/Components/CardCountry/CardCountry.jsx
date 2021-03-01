import React from 'react';
import s from './CardCountry.module.css'
import {NavLink} from "react-router-dom";

const CardCountry = ({t, lang, country, capital, img, id}) => {

    return (
        <NavLink to={`/country/${id}`}>
            <div className={s.card}>
                <div className={s.country}><h2>{t("countryCard.name")}</h2></div>
                <div className={s.country}><h2>
                    {lang === 'Русский' && country.ru}
                    {lang === 'English' && country.en}
                    {lang === 'Deutsche' && country.gr}

                </h2></div>
                <div className={s.country}>{t("countryCard.capital")}:
                    {lang === 'Русский' && capital.ru}
                    {lang === 'English' && capital.en}
                    {lang === 'Deutsche' && capital.gr}
                </div>
                <img className={s.img}
                     src={img}
                     alt="photo_country"/>
            </div>
        </NavLink>
    );
};

export default CardCountry;