export default function SearchPage(){
    return(
        <>
            <section className="search">
                <div className="search__header">
                    <h3 className="search__header-title">Поиск пациента</h3>
                    <button className="search__header-regis">Регистрация пациента</button>
                </div>

                <div className="search__inputs">
                    <input type="text" className="search__inputs-input" placeholder="Фамилия"/>
                    <input type="text" className="search__inputs-input" placeholder="Имя"/>
                    <input type="text" className="search__inputs-input" placeholder="Отчество"/>
                    <input type="text" className="search__inputs-input" placeholder="Дата Рождения"/>

                    <button className="search__inputs-btn">Найти</button>
                </div>

                <div className="search__table">
                    <div className="search__table-titles">
                        <p className="search__table-titles-title">Фамилия</p>
                        <p className="search__table-titles-title">Имя</p>
                        <p className="search__table-titles-title">Отчество</p>
                        <p className="search__table-titles-title">Дата Рождения</p>
                        <p className="search__table-titles-title">Действия</p>
                    </div>

                    <div className="search__table-item">
                        <p className="search__table-item-content">Зубенко</p>
                        <p className="search__table-item-content">Михаил</p>
                        <p className="search__table-item-content">Петрович</p>
                        <p className="search__table-item-content">13.08.1991</p>

                        <a href="patient.html" className="search__table-item-edit">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <div className="search__table-item-btn">
                            <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#FF0000"/>
                                <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div className="search__table-item">
                        <p className="search__table-item-content">Макаравенченко</p>
                        <p className="search__table-item-content">Константин</p>
                        <p className="search__table-item-content">Константинович</p>
                        <p className="search__table-item-content">22.22.2222</p>

                        <a href="patient.html" className="search__table-item-edit">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <div className="search__table-item-btn">
                            <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#FF0000"/>
                                <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div className="search__table-item">
                        <p className="search__table-item-content">Утенков</p>
                        <p className="search__table-item-content">Руслан</p>
                        <p className="search__table-item-content">Мехманович</p>
                        <p className="search__table-item-content">05.08.2003</p>

                        <a href="patient.html" className="search__table-item-edit">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <div className="search__table-item-btn">
                            <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#FF0000"/>
                                <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}