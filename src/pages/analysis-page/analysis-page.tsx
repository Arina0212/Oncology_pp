import Header from "../../components/header/header";

export default function AnalysisPage(){
    return(
        <>
            <Header/>
            <section className="analysis">
                <div className="analysis__header">
                    <h3 className="analysis__header-info">Информациая о пациенте:</h3>
                    <p className="analysis__header-diagnose">Диагноз: C50</p>
                </div>

                <p className="analysis__name">Зубенко Михаил Петрович</p>

                <div className="analysis__info">
                    <h3 className="analysis__info-name">Гематологическое исследование</h3>
                    <p className="analysis__info-date">Дата исследования: 12.03.1993</p>
                    <a href="graphs.html" className="analysis__info-btn">Посмотреть графики</a>
                </div>

                <div className="analysis__params">
                    <h3 className="analysis__params-text">Параметры анализов</h3>
                    <a href="addAnalysis.html" className="analysis__params-btn">Редактировать анализ</a>
                </div>

                <table className="analysis__table sortable">
                    <thead>
                    <tr>
                        <th>Показатель</th>
                        <th>Результат</th>
                        <th>Ед. изм.</th>
                        <th>Реф. интервал</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Лейкоциты (WBC)</td>
                        <td>6.71</td>
                        <td>10e9/л</td>
                        <td>(0.00 - 0.80)</td>
                    </tr>
                    <tr>
                        <td>Поглотительная активность моноцитов</td>
                        <td>16.71</td>
                        <td>%</td>
                        <td>(0.00 - 0.80)</td>
                    </tr>
                    <tr>
                        <td>Лейкоциты (WBC)</td>
                        <td>6.71</td>
                        <td>10e9/л</td>
                        <td>(0.00 - 0.80)</td>
                    </tr>
                    <tr>
                        <td>Лейкоциты (WBC)</td>
                        <td>6.71</td>
                        <td>10e9/л</td>
                        <td>(0.00 - 0.80)</td>
                    </tr>
                    <tr>
                        <td>Лейкоциты (WBC)</td>
                        <td>6.71</td>
                        <td>10e9/л</td>
                        <td>(0.00 - 0.80)</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}