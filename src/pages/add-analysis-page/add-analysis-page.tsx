import { FormEvent, useState } from "react";
import Header from "../../components/header/header";
import { useAppDispatch } from "../../components/hooks";
import { CreatePatientAnalysesAction } from "../../store/api-actions";
import { useParams } from "react-router-dom";

export default function AddAnalysisPage(){
    const urlParams = useParams();
    const dispatch = useAppDispatch();
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const [date, setDate] = useState('');


    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(CreatePatientAnalysesAction({
             analysis_date: date,
             test:[
                {
                    name:'immune_status',
                    analysis:[
                        {
                            value: value1,
                            indicator_name:'',
                        },
                        // {
                        //     value: value2,
                        //     indicator_name:'',
                        // }
                    ]
                }
             ],
             patient_id: Number(urlParams.patid),
            }));
        }
        
    return(
        <>
        <Header/>
        <section className="add-analysis">
        <form onSubmit={handleSubmit} >
    <div className="add-analysis__header">
        <h3 className="add-analysis__header-name">Результаты исследований</h3>
        <p className="add-analysis__header-text">Дата исследования:</p>
        <input type="text" value={date} onChange={(evt) => setDate(evt.target.value)}className="add-analysis__header-input" placeholder="дата"/>
        <button type="submit" className="add-analysis__header-btn">Сохранить</button>
    </div>

    <div id="analyse1" className="add-analysis__analyse">
        <div className="add-analysis__analyse-head">
            <p className="add-analysis__analyse-head-text" >Тип исследования: Имунный статус</p>
            <button className="add-analysis__analyse-head-delete">Удалить</button>
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
                    <td>Т-лимфоциты</td>
                    <td>
                        <input type="text" value={value1} onChange={(evt) => setValue1(evt.target.value)} placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.80 - 2.20)</td>
                </tr>
                <tr>
                    <td>Б-лимфоциты</td>
                    <td>
                        <input type="text" value={value2} onChange={(evt) => setValue2(evt.target.value)} placeholder="x"/>
                    </td>
                    <td>%</td>
                    <td>(0.10 - 0.50)</td>
                </tr>
                <tr>
                    <td>Т-хелперы</td>
                    <td>
                        <input type="text" value={value3} onChange={(evt) => setValue3(evt.target.value)}placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.60 - 1.60)</td>
                </tr>
                <tr>
                    <td>Т-цитоксические лимфоциты</td>
                    <td>
                        <input type="text" value={value4} onChange={(evt) => setValue4(evt.target.value)} placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.19 - 0.65)</td>
                </tr>
                </tbody>
            </table>
        
    </div>
    </form>

    <div id="analyse2" className="add-analysis__analyse add-analysis__analyse_hide">
        <div className="add-analysis__analyse-head">
            <p className="add-analysis__analyse-head-text">Тип исследования: Гематологическое исследование</p>
            <button className="add-analysis__analyse-head-delete" >Удалить</button>
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
            <button className="add-analysis__analyse-head-delete" >Удалить</button>
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

    <button className="add-analysis__show add-analysis__show_hide" id="showAnalyseBtn1">Добавить исследование: Имунный статус</button>
    <button className="add-analysis__show" id="showAnalyseBtn2">Добавить исследование: Гематологическое исследование</button>
    <button className="add-analysis__show" id="showAnalyseBtn3">Добавить исследование: Цитокиновый статус</button>

</section>
        </>
    );
}
