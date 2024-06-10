import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import usePatientById from '../../components/hooks/get-patient-by-id';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { getComparison, getGrafic, getPatientAnalys } from '../../store/patiens-process/selectors';
import { humanizeDate } from '../../utils/change-data-formats';
import { useEffect } from 'react';
import { fetchAnalysAction, fetchAnalysComparisonAction, fetchGraficAction } from '../../store/api-actions';
import { GraficData } from '../../types/grafic';
import { AppRoute } from '../../const';
import { AnalysComparison } from '../../types/analys-comparation';
import GraficStroke from '../../components/grafic-stroke/grafic-stroke';
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import MyDocument from "../../components/subject-only-text/subject-only-text";


export default function GraficPage(){


  const urlParams = useParams();
  const patient_data = usePatientById();
  const dispatch = useAppDispatch();
  const comparison = useAppSelector(getComparison);


  useEffect(()=> {
    dispatch(fetchGraficAction({id: Number(urlParams.analysisid)}));
    dispatch(fetchAnalysComparisonAction({id: Number(urlParams.analysid)}));
    dispatch((fetchAnalysAction({id: Number(urlParams.analysid)})));
  },[dispatch]);
  const analysData = useAppSelector(getPatientAnalys);

  const grafics = useAppSelector(getGrafic);
  //const getconclusion = useAppSelector(getConclusion)
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
          <p className="graphs__info-date">Дата исследования: {humanizeDate(analysData.analysis_date)}</p>
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
                <tr >
                  <td>{analys.name}</td>
                  {(analys.avg_prev_value === null) ?
                    <td>-</td>
                    :
                    <td>{analys.avg_prev_value}</td>}
                  <td>{analys.value}</td>
                  <td>{analys.unit}</td>
                  <td>({analys.interval_min} - {analys.interval_max})</td>
                  {(analys.changes !== null) ?
                    <td>{analys.changes}%</td>
                    :
                    <td>-</td>}

                </tr>))}
            </tbody>
          </table>
        </div>


        {(grafics?.map((grafic: GraficData)=>
          <GraficStroke key={grafic.test_id} id={grafic.test_id} grafic={grafic.graphic} conclusion={grafic.conclusion} recommendations={grafic.recommendations} test_name={grafic.test_name}/>
        ))}
      </section>
    </>
  );
}
