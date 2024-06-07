import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import {useAppSelector } from '../../components/hooks';
import { AppRoute } from '../../const';
import usePatientById from '../../components/hooks/get-patient-by-id';
import LoadingPage from '../loading-page/loading-page';
import { getPatiensAnalyses, getPatientDataLoading } from '../../store/patiens-process/selectors';
import { humanizeDate } from '../../utils/change-data-formats';
import { AnalysDateData, AnalysNameDateData } from '../../types/analysis-date';
import usePatientOparationDataById from '../../components/hooks/get-operation-data-by-id';
import PatientOperationEdit from '../../components/patient-operation-edit/patient-operation-edit';
import UpdatePatientInfo from '../../components/update-patient-info-popup/update-patient-info-popup';

export default function PatientPage(){

  //const dispatch = useAppDispatch();
  const urlParams = useParams();

  // useEffect(() => {
  //   dispatch((fetchFullPatientInfoAction({id: Number(urlParams.patid)})));
  // }, [dispatch]);

  const patient_data = usePatientById();  
  //const patient_data = useAppSelector(getCurrentPatient);
  const patient = [patient_data?.last_name, patient_data?.first_name, patient_data?.patronymic].join(' ')
  console.log(patient)
  console.log(patient_data);
  const isPatientLoading = useAppSelector(getPatientDataLoading);
  const analysesData = useAppSelector(getPatiensAnalyses);
  const operationDataInfo = usePatientOparationDataById();
  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   if(authorizationStatus !== AuthorizationStatus.Auth){
  //     navigate(`${AppRoute.Login}`);
  //   } else if(FIO_sep.length != 3){
  //     setError('Вы ввели неполные данные');
  //   }else if(birth > today){
  //     setError('Дата рождения не может быть больше текущей даты');
  //   }else{
  //       setError(' ')
  //     dispatch(UpdatePatientsAction({
  //       id: Number(urlParams.patid),
  //       first_name: first_name,
  //       last_name: last_name,
  //       patronymic: patronymic,
  //       birth_date: birth_date,
  //       region: region,
  //       diagnosis: diagnoses,
  //       diagnosis_comment: '',
  //       operation_comment: '',
  //       chemoterapy_comment: ''
  //     }));
  //     handleClose();
  //     dispatch(fetchFullPatientInfoAction({id: Number(urlParams.patid)}));
  //     console.log(Number(urlParams.patid));
  //   }
  // };

  // const FIO_sep = FIO.split(' ', 3);

  // const first_name: string = FIO_sep[1];
  // const last_name: string = FIO_sep[0];
  // const patronymic: string = FIO_sep[2];

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return(
    <div>
      {!isPatientLoading ?
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
                diagnosis={operationDataInfo?.diagnosis} 
                diagnosis_comment_edit={operationDataInfo?.diagnosis_comment} 
                diagnosis_date={operationDataInfo?.diagnosis_date} 
                operation_comment_edit={operationDataInfo?.operation_comment} 
                chemoterapy={operationDataInfo?.chemoterapy} 
                chemoterapy_comment_edit={operationDataInfo?.chemoterapy_comment}/>
            </div>
          </section>
          {/* <Dialog className="modal update" sx={style}
            open={open}
            onClose={handleClose}
          >
            <form className=" modal_patient-regis modal__content" onSubmit={handleSubmit} action="#">
              <button className="modal__content-close" id="closePatientRegisBtn" onClick={handleClose}>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </button>
              <h2 className="modal__content-title">Пациент</h2>
              <div className="login__message">
                <p>{error}</p>
              </div>
              <div className="modal__content-input-box">
                <input type="text" value={FIO} onChange={(evt) => setFIO(evt.target.value)} placeholder="ФИО пациента" required/>
              </div>
              <div className="modal__content-input-box">
                <input type="date" value={birth_date} onChange={(evt) => setDate(evt.target.value)} placeholder="Дата рождения" required/>
              </div>
              <div className="modal__content-input-box">
                <input type="text" value={diagnoses} onChange={(evt) => setDiagnoses(evt.target.value)} placeholder="Диагноз" required/>
              </div>
              <div className="modal__content-input-box">
                <input type="text" value={region} onChange={(evt) => setRegion(evt.target.value)} placeholder="Регион" required/>
              </div>
              <button type="submit" className="modal__content-submit">Изменить</button>
            </form>
          </Dialog> */}
        </>
        : <LoadingPage />}
    </div>
  );
}
