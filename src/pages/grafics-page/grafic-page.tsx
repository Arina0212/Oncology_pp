import Header from "../../components/header/header";

export default function GraficPage(){
    return(
        <>
            <Header/>
            <section className="graphs">
                <h2 className="graphs__text">Информациая о пациенте:</h2>
                <p className="graphs__name">Зубенко Михаил Петрович</p>
                <div className="graphs__info">
                    <h3 className="graphs__info-diagnose">Диагноз: C50</h3>
                    <p className="graphs__info-date">Дата исследования: 12.03.1993</p>
                </div>

                <h3 className="graphs__title">B-клеточное звено</h3>

                <div className="graphs__result">
                    <div className="graphs__result-pic">
                        <img src="../media/graph.png" alt="граф"/>
                    </div>

                    <div className="graphs__result-info">
                        <h4 className="graphs__result-info-head">Заключение по показателям B-клеточного звена:</h4>
                        <ol className="graphs__result-info-list">
                            <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                            <li>Компенсируемый или нет</li>
                            <li>Изменение динамики если есть</li>
                        </ol>

                        <h4 className="graphs__result-info-head">Рекомендации для B-клеточного звена:</h4>
                        <ol className="graphs__result-info-list">
                            <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                            <li>Компенсируемый или нет</li>
                            <li>Изменение динамики если есть</li>
                        </ol>

                        <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                            врачом</p>
                    </div>
                </div>

                <h3 className="graphs__title">T-клеточное звено</h3>

                <div className="graphs__result">
                    <div className="graphs__result-pic">
                        <img src="../media/graph.png" alt="граф"/>
                    </div>

                    <div className="graphs__result-info">
                        <h4 className="graphs__result-info-head">Заключение по показателям B-клеточного звена:</h4>
                        <ol className="graphs__result-info-list">
                            <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                            <li>Компенсируемый или нет</li>
                            <li>Изменение динамики если есть</li>
                        </ol>

                        <h4 className="graphs__result-info-head">Рекомендации для B-клеточного звена:</h4>
                        <ol className="graphs__result-info-list">
                            <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                            <li>Компенсируемый или нет</li>
                            <li>Изменение динамики если есть</li>
                        </ol>

                        <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                            врачом</p>
                    </div>
                </div>
            </section>
        </>
    );
}
