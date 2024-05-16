import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import usePatientById from "../../components/hooks/get-patient-by-id";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { getComparison, getGrafic, getPatientAnalys } from "../../store/patiens-process/selectors";
import { humanizeDate } from "../../utils/change-data-formats";
import { useEffect, useState } from "react";
import { store } from "../../store";
import { fetchAnalysComparisonAction, fetchGraficAction } from "../../store/api-actions";
import { GraficData } from "../../types/grafic";
import { AppRoute } from "../../const";
import { AnalysComparison, AnalysComparisonData } from "../../types/analys-comparation";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import MyDocument from "../../components/subject-only-text/subject-only-text";

export default function GraficPage(){
    const urlParams = useParams();
    console.log(urlParams);
    const analysData = useAppSelector(getPatientAnalys);
    const patient_data = usePatientById();
    const dispatch = useAppDispatch();
    const comparison = useAppSelector(getComparison);
    console.log(analysData,patient_data);


    useEffect(()=> {
        dispatch(fetchGraficAction({id: Number(urlParams.analysisid)}))
        dispatch(fetchAnalysComparisonAction({id: Number(urlParams.analysid)}))
    },[dispatch])

    const grafics = useAppSelector(getGrafic)
    console.log(grafics)

    const printContent = () => {
        window.print();
    };

    return(
        <>
            <Header/>
            <section className="graphs">
            <div className="graphs__text">
                <p>Информациая о пациенте:</p>

                <button className="graphs__text-print" onClick={printContent}>Печать</button>
            </div>
                <p className="graphs__name">{patient_data?.last_name} {patient_data?.first_name} {patient_data?.patronymic}</p>
                <div className="graphs__info">
                    <h3 className="graphs__info-diagnose">Диагноз: {patient_data?.diagnosis}</h3>
                    <p className="graphs__info-date">Дата исследования: {humanizeDate(analysData?.analysis_date)}</p>
                    <Link to={`${AppRoute.Patients}/${Number(urlParams.patid)}/analysis/${Number(urlParams.analysisid)}/${Number(urlParams.analysid)}`} className="graphs__info-backbtn">К анализам</Link>
                </div>
                <div className="graphs__analysis">
        <h3 className="graphs__analysis-header">Сравнение анализов</h3>

        <table className="graphs__analysis-table">
            <thead>
            <tr>
                <th>Показатель</th>
                <th>Среднее по <br/> предыдущим</th>
                <th>Текущий</th>
                <th>Ед. изм.</th>
                <th>Реф. интервал</th>
                <th>Изменения</th>
            </tr>
            </thead>
            <tbody>
            {comparison?.analysis.map((analys: AnalysComparison)=>(
            <tr>
                <td>{analys.name}</td>
                {(analys.avg_prev_value===null)?
                <td>-</td>
                :
                <td>{analys.avg_prev_value}</td>
                }
                <td>{analys.value}</td>
                <td>{analys.unit}</td>
                <td>({analys.interval_min} - {analys.interval_max})</td>
                {(analys.changes!=null)?
                <td>{analys.changes}%</td>
                :
                <td>-</td>
                }
                
            </tr>))
}
            </tbody>
        </table>
    </div>
                {(grafics?.map((grafic: GraficData)=>
                <div >
                    {(grafic.graphic.includes('hematological'))?
                        <div><h3 className="graphs__title">B-клеточное звено</h3></div>
                        :
                        <div>
                            {(grafic.graphic.includes('immune'))?
                            <div><h3 className="graphs__title">T-клеточное звено</h3></div>
                            :
                            <div>{(grafic.graphic.includes('cytokine'))?
                            <div><h3 className="graphs__title">Цитокиновые пары</h3></div>
                            :
                            <div>{(grafic.graphic.includes('regeneration'))?
                            <div><h3 className="graphs__title">Расчет вида регенерации</h3></div>
                            :
                            <div>{(grafics.length === 0)?
                            <div><h3 className="graphs__title">У пациента ещё нет графиков</h3></div>
                            :
                            <div>
                                <div><h3 className="graphs__title">У пациента ещё нет графиков</h3></div>
                            </div>
                       
                            }</div>
                       
                            }</div>
                        }</div>

                    }</div>}

                    <div className="graphs__result">
                    
                    
                        <div className="graphs__result-pic">
                            <img src={`http://127.0.0.1:8000/${grafic.graphic}`} alt={grafic.graphic}/>
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
                </div>       
                
             ))}
            </section>
        </>
    );
}
