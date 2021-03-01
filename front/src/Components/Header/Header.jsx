import React, {useState} from 'react';
import s from './Header.module.css'
import { Input } from 'antd';


const Header = ({lang, editLang, i18n, editArr, location}) => {

    const [value, setValue] = useState('')


    const { Search } = Input;
    const onSearch = value => console.log(value);
    return (
        <div className={s.header}>
            <select value={lang} onChange={(e) => {
                editLang(e.target.value)

            }}>
                <option>Русский</option>
                <option>English</option>
                <option>Deutsche</option>
            </select>
            {location.pathname === '/' && <div>
                <Search value={value} onChange={(e) => {
                    setValue(e.currentTarget.value)
                    editArr(value)
                }}
                        placeholder="input search text" allowClear  style={{ width: 200 }} />
            </div>}
        </div>
    );
};

export default Header;