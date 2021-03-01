const EDIT_ARR = 'EDIT_ARR/CountryCardsReducer'

const initialState = {
    countrysForCard: [
        {   id: 0,
            country: {
                en:'Belarus',
                ru:'Беларусь',
                gr:'Weißrussland'
            },
            capital: {
            en: 'Minsk',
            ru: 'Минск',
            gr: 'Minsk'
            },
            img:'https://poznamka.ru/wp-content/uploads/2014/05/biblioteka_minsk_belarus_01.jpg'

        },
        {
            id:1,
            country: {
                en:'Ukraine',
                ru:'Украина',
                gr:'Ukraine',
            },
            capital: {
                en:'Kiev',
                ru:'Киев',
                gr:'Kiew'
            },
            img:'https://epifora.by/wp-content/uploads/2016/06/kiev-aerial-e-kskursii-po-Kievu.jpg'
        },
        {
            id:2,
            country: {
                en:'Russia',
                ru:'Россия',
                gr:'Russland',
            },
            capital: {
                en:'Moscow',
                ru:'Москва',
                gr:'Moskau'
            },
            img:'https://cdnimg.rg.ru/img/content/197/76/83/iStock-614724736_d_850.jpg'
        },
        {
            id:3,
            country: {
                en:'Brazil',
                ru:'Бразилия',
                gr:'Brasilien',
            },
            capital: {
                en:'Brasilia',
                ru:'Бразилиа',
                gr:'Brasilia'
            },
            img:'https://www.tourprom.ru/site_media/images/upload/2016/9/2/countryimage/braziliya.jpg'
        },
        {
            id:4,
            country: {
                en:'Great Britain',
                ru:'Великобритания',
                gr:'Großbritannien',
            },
            capital: {
                en:'London',
                ru:'Лондон',
                gr:'London'
            },
            img:'https://cdn21.img.ria.ru/images/155635/45/1556354505_0:477:2000:1602_1920x0_80_0_0_0afea3afd84c951d4ab9fd42bc97224d.jpg'
        },
        {
            id:5,
            country: {
                en:'USA',
                ru:'США',
                gr:'USA',
            },
            capital: {
                en:'Washington',
                ru:'Вашингтон',
                gr:'Washington'
            },
            img:'https://thebell.io/wp-content/uploads/2018/12/1617790_607000759380445_1130267168_o.jpg'
        },
        {
            id:6,
            country: {
                en:'Deutschland',
                ru:'Германия',
                gr:'Germany',
            },
            capital: {
                en:'Berlin',
                ru:'Берлин',
                gr:'Berlin'
            },
            img:'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Germany-1-Cologne-Cathedral-e1492727734625.jpg'
        },
        {
            id:7,
            country: {
                en:'Australia',
                ru:'Австралия',
                gr:'Australien',
            },
            capital: {
                en:'Canberra',
                ru:'Канберра',
                gr:'Canberra'
            },
            img:'https://rossaprimavera.ru/static/files/fbb556f4c69c.jpg'
        },
        {
            id:8,
            country: {
                en:'France',
                ru:'Франция',
                gr:'Frankreich',
            },
            capital: {
                en:'Paris',
                ru:'Париж',
                gr:'Paris'
            },
            img:'https://tripmydream.cc/travelhub/travel/blocks/20/5779/block_205779.jpg'
        },
/*
        {
            id:1,
            country: {
                en:'',
                ru:'',
                gr:'',
            },
            capital: {
                en:'',
                ru:'',
                gr:''
            },
            img:''
        }
*/
    ],
    countryAfterInput: [],
    inputValue:'',
}

const CountryCardsReducer = (state = initialState, action) => {

    switch (action) {
        case EDIT_ARR: {

            let first = state.countrysForCard.filter(el => (el.country.ru.toLowerCase().indexOf(action.value) >= 0));
            let second = state.countrysForCard.filter(el => (el.capital.ru.toLowerCase().indexOf(action.value) >= 0));
            let Dima = [];
            Dima = first.concat(second);

            function unique(arr) {
                let result = [];

                for (let str of arr) {
                    if (!result.includes(str)) {
                        result.push(str);
                    }
                }

                return result;
            }



            return {
                ...state,
                countryAfterInput:unique(Dima)
            }
        }

        default: return state
    }
}

export const editArr = (value) => ({type:EDIT_ARR, value})
export default CountryCardsReducer;