import React from "react";
import { useTranslation } from 'react-i18next';

export default function WorkingHours() {
    const { t } = useTranslation();
    return (
        <div className="working-hours">
            <ul>
                <p>{t('hoursWeekdays')}</p>
                <p>{t('hoursSaturday')}</p>
                <p>{t('hoursSunday')}</p>
            </ul>
        </div>
    );
}
