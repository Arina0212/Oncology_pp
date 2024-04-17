import Header from "../../components/header/header";

export default function addAnalysisPage(){
    let anaylse1 = document.getElementById('analyse1')
    let anaylse2 = document.getElementById('analyse2')
    let anaylse3 = document.getElementById('analyse3')

    let showAnalyseBtn1 = document.getElementById('showAnalyseBtn1')
    let showAnalyseBtn2 = document.getElementById('showAnalyseBtn2')
    let showAnalyseBtn3 = document.getElementById('showAnalyseBtn3')
    function showHide1() {
        anaylse1.classList.toggle("add-analysis__analyse_hide");
        showAnalyseBtn1.classList.toggle("add-analysis__show_hide");
    }
    function showHide2() {
        anaylse2.classList.toggle("add-analysis__analyse_hide");
        showAnalyseBtn2.classList.toggle("add-analysis__show_hide");
    }
    function showHide3() {
        anaylse3.classList.toggle("add-analysis__analyse_hide");
        showAnalyseBtn3.classList.toggle("add-analysis__show_hide");
    }
    return(
        <>
            <Header/>
            <section className="add-analysis">
                <div className="add-analysis__header">
                    <h3 className="add-analysis__header-name">Результаты исследований</h3>
                    <p className="add-analysis__header-text">Дата исследования:</p>
                    <input type="text" className="add-analysis__header-input" placeholder="дата"/>
                    <button className="add-analysis__header-btn">Сохранить</button>
                </div>

                <div id="analyse1" className="add-analysis__analyse">
                    <div className="add-analysis__analyse-head">
                        <p className="add-analysis__analyse-head-text">Тип исследования: Имунный статус</p>
                        <button className="add-analysis__analyse-head-delete" onClick={showHide1()}>Удалить</button>
                    </div>

                    <table className="add-analysis__analyse-table sortable">
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
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Поглотительная активность моноцитов</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>%</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div id="analyse2" className="add-analysis__analyse add-analysis__analyse_hide">
                    <div className="add-analysis__analyse-head">
                        <p className="add-analysis__analyse-head-text">Тип исследования: Гематологическое исследование</p>
                        <button className="add-analysis__analyse-head-delete" onClick="showHide2()">Удалить</button>
                    </div>

                    <table className="add-analysis__analyse-table sortable">
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
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Поглотительная активность моноцитов</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>%</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div id="analyse3" className="add-analysis__analyse add-analysis__analyse_hide">
                    <div className="add-analysis__analyse-head">
                        <p className="add-analysis__analyse-head-text">Тип исследования: Цитокиновый статус</p>
                        <button className="add-analysis__analyse-head-delete" onclick="showHide3()">Удалить</button>
                    </div>

                    <table className="add-analysis__analyse-table sortable">
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
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Поглотительная активность моноцитов</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>%</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        <tr>
                            <td>Лейкоциты (WBC)</td>
                            <td>
                                <input type="text" placeholder="x"/>
                            </td>
                            <td>10e9/л</td>
                            <td>(0.00 - 0.80)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <button className="add-analysis__show add-analysis__show_hide" id="showAnalyseBtn1" onclick="showHide1()">Добавить исследование: Имунный статус</button>
                <button className="add-analysis__show" id="showAnalyseBtn2" onclick="showHide2()">Добавить исследование: Гематологическое исследование</button>
                <button className="add-analysis__show" id="showAnalyseBtn3" onclick="showHide3()">Добавить исследование: Цитокиновый статус</button>

            </section>
        </>
    )
}