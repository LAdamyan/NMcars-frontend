import React from 'react';
import { useTranslation } from 'react-i18next';
import enFlag from '../../assets/eng.jpg';
import nlFlag from '../../assets/nl.jpg';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <img src={enFlag} alt="English" onClick={() => changeLanguage('en')} />
            <img src={nlFlag} alt="Dutch" onClick={() => changeLanguage('nl')} />
        </div>
    );
}
