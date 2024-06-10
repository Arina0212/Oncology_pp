import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector } from '../../components/hooks';
import { AppRoute } from '../../const';
//import usePatientById from '../../components/hooks/get-patient-by-id';
import LoadingPage from '../loading-page/loading-page';
import { getAnalysesDataLoading, getCurrentPatient, getOperationData, getOperationDataLoading, getPatiensAnalyses, getPatientDataLoading } from '../../store/patiens-process/selectors';
import { humanizeDate } from '../../utils/change-data-formats';
import { AnalysDateData, AnalysNameDateData } from '../../types/analysis-date';
//import usePatientOparationDataById from '../../components/hooks/get-operation-data-by-id';
import PatientOperationEdit from '../../components/patient-operation-edit/patient-operation-edit';
import UpdatePatientInfo from '../../components/update-patient-info-popup/update-patient-info-popup';
import { fetchFullPatientInfoAction, fetchPatientsRigthAction } from '../../store/api-actions';
import { useEffect } from 'react';

export default function PatientPage(){

  const dispatch = useAppDispatch();
  const urlParams = useParams();

  useEffect(() => {
    dispatch((fetchFullPatientInfoAction({id: Number(urlParams.patid)})));
    dispatch((fetchPatientsRigthAction({id: Number(urlParams.patid)})));
  }, [dispatch]);
//const patient_data = usePatientById();  
  const patient_data = useAppSelector(getCurrentPatient);
  const operationDataInfo = useAppSelector(getOperationData);

  const patient = [patient_data?.last_name, patient_data?.first_name, patient_data?.patronymic].join(' ')
  console.log(patient)
  console.log(patient_data);
  const isPatientLoading = useAppSelector(getPatientDataLoading);
  const isOperationLoading = useAppSelector(getOperationDataLoading);
  const isAnalysesLoading = useAppSelector(getAnalysesDataLoading);

  
  const analysesData = useAppSelector(getPatiensAnalyses);

  //const operationDataInfo = usePatientOparationDataById();

  return(
    <div>
      {!isPatientLoading && !isOperationLoading && !isAnalysesLoading?
        <>
          <Header/>
          <section className="patient">
            <div className="patient__left">
              <h3 className="patient__left-info">Информациая о пациенте:</h3>

              <div className="patient__left-name">
                <UpdatePatientInfo 
                  id={ Number(urlParams.patid)} 
                  first_name_edit={patient_data?.first_name} 
                  last_name_edit={patient_data?.last_name} 
                  patronymic_edit={patient_data?.patronymic} 
                  birth_date_edit={patient_data?.birth_date} 
                  region_edit={patient_data?.region} 
                  diagnosis_edit={patient_data?.diagnosis} 
                  diagnosis_comment_edit={patient_data?.diagnosis_comment} 
                  operation_comment_edit={patient_data?.operation_comment} 
                  chemoterapy_comment_edit={patient_data?.chemoterapy_comment}/>
              </div>
              <div className="patient__left-date">
                <p>Дата Рождения: {humanizeDate(patient_data?.birth_date)}</p>
                <p>Регион: {patient_data?.region}</p>
              </div>

              <div className="patient__left-add">
                <h3 className="patient__left-add-text">Результаты анализов</h3>
                <Link to={`${AppRoute.Patients}/${patient_data?.id}/add-analysis`} className="patient__left-add-btn">Добавить анализ</Link>
              </div>
              {(analysesData?.patient_tests !== undefined) ?
                <div className="patient__left-table">

                  {[...analysesData?.patient_tests].reverse().map((analys: AnalysDateData)=>(
                    <div key={analys.id} className="patient__left-table-item">
                      {analys.tests.map((analysname: AnalysNameDateData)=>(
                        <div key={analysname.id}>
                          {(analysname.name === 'hematological_research') || (analysname.name === 'hematological research') ?
                            <div>
                              <Link to={`${AppRoute.Patients}/${patient_data?.id}/analysis/${analys.id}/${analysname.id}`} className="patient__left-table-item-links">ОАК</Link>
                            </div>
                            :
                            <div>{(analysname.name === 'immune_status') ?
                              <div>
                                <Link to={`${AppRoute.Patients}/${patient_data?.id}/analysis/${analys.id}/${analysname.id}`} className="patient__left-table-item-links">имунодифицит</Link>
                              </div>
                              :
                              <div>{(analysname.name === 'cytokine_status') ?
                                <div>
                                  <Link to={`${AppRoute.Patients}/${patient_data?.id}/analysis/${analys.id}/${analysname.id}`} className="patient__left-table-item-links">цитокоины</Link>
                                </div>
                                :
                                <div><p className="patient__left-table-item-date">{humanizeDate(analys.analysis_date)}</p></div>}
                              </div>}
                            </div>}
                        </div>
                      ))}

                      <p className="patient__left-table-item-date">{humanizeDate(analys.analysis_date)}</p>
                    </div>
                  ))}

                </div>
                :
                <div className="patient__left-table">
                  <div className="patient__left-table-item">
                    <p className="patient__left-table-item-links">У пациента ещё нет анализов</p>
                  </div>
                </div>}
            </div>

            <div className="patient__right">
              <PatientOperationEdit 
                id={Number(urlParams.patid)} 
                diagnosis_edit={operationDataInfo?.diagnosis} 
                diagnosis_comment_edit={operationDataInfo?.diagnosis_comment} 
                diagnosis_date={operationDataInfo?.diagnosis_date} 
                operation_comment_edit={operationDataInfo?.operation_comment} 
                chemoterapy={operationDataInfo?.chemoterapy} 
                chemoterapy_comment_edit={operationDataInfo?.chemoterapy_comment}/>
            </div>
          </section>
        </>
        : <LoadingPage />}
    </div>
  );
}
