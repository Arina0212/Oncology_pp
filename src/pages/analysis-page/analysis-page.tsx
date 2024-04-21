import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import usePatientById from "../../components/hooks/get-patient-by-id";
import { getPatiensAnalyses, getPatientAnalys } from "../../store/patiens-process/selectors";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { AppRoute } from "../../const";
import { AnalysDataValue } from "../../types/analys-data";
import { useEffect } from "react";
import { fetchAnalysAction } from "../../store/api-actions";
import { humanizeDate } from "../../utils/change-data-formats";

export default function AnalysisPage(){
    const urlParams = useParams();
    const dispatch = useAppDispatch();
    const analysesData = useAppSelector(getPatiensAnalyses)
    console.log(analysesData?.patient_tests)
    console.log('id анализа', Number(urlParams.patid), Number(urlParams.analysid))
    useEffect(() => {
        dispatch((fetchAnalysAction({id: Number(urlParams.analysid)})));
      }, [dispatch]);
    const patient_data = usePatientById();

    const analysData = useAppSelector(getPatientAnalys)

    return(
        <>
            <Header/>
            <section className="analysis">
                <div className="analysis__header">
                    <h3 className="analysis__header-info">Информациая о пациенте:</h3>
                    <p className="analysis__header-diagnose">Диагноз: {patient_data?.diagnosis}</p>
                </div>

                <p className="analysis__name">{patient_data?.last_name} {patient_data?.first_name} {patient_data?.patronymic}</p>

                <div className="analysis__info">
                    {(analysData?.name === 'hematological research')?
                        <h3 className="analysis__info-name">Гематологическое исследование</h3>
                    : 
                        <div> 
                            {(analysData?.name === 'immune status')?
                                <h3 className="analysis__info-name">Имунный статус</h3>
                                :  <div>{(analysData?.name === 'cytokine status')?
                                    <h3 className="analysis__info-name">Цитокиновый статус</h3>
                                    :  <div></div>
                                }</div>
                            }  </div>
                    }
                    <p className="analysis__info-date">Дата исследования: {humanizeDate(analysData?.analysis_date)}</p>
                    <Link to={`${AppRoute.Patients}/${patient_data?.id}/grafics`} className="analysis__info-btn">Посмотреть графики</Link>
                </div>

                <div className="analysis__params">
                    <h3 className="analysis__params-text">Параметры анализов</h3>
                    <Link to="addAnalysis.html" className="analysis__params-btn">Редактировать анализ</Link>
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
                        {analysData?.analysis.map((analys: AnalysDataValue)=>(
                            <tr>
                                <td>{analys.name}</td>
                                <td>{analys.value}</td>
                                <td>{analys.unit}</td>
                                <td>({analys.interval_min} - {analys.interval_max})</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
}
