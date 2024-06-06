import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { FormEvent, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { UpdatePatientsAction, UpdatePatientsRigthAction, fetchFullPatientInfoAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import usePatientById from '../../components/hooks/get-patient-by-id';
import LoadingPage from '../loading-page/loading-page';
import { getPatiensAnalyses, getPatientDataLoading } from '../../store/patiens-process/selectors';
import { getAltDateFor, humanizeDate } from '../../utils/change-data-formats';
import { AnalysDateData, AnalysNameDateData } from '../../types/analysis-date';

const style = {
  position: 'absolute' as const,
  top: '0',
  left: '0',
  transform: 'translate(0%, 0%)',
  translate: '0',
  bgcolor: 'rgb(255 255 255 / 0%)',
  boxshoutdown: '0 0 4.2105263158vw 0 rgba(0, 0, 0, 0.0784313725)',
};

export default function PatientPage(){
  const urlParams = useParams();

  const patient_data = usePatientById();
  const patient = [patient_data?.last_name, patient_data?.first_name, patient_data?.patronymic].join(' ')
  console.log(patient)
  console.log(patient_data);
  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [error, setError] = useState('');
  const [FIO, setFIO] = useState(patient);
  const [birth_date, setDate] = useState('');
  const [region, setRegion] = useState(patient_data?.region);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isPatientLoading = useAppSelector(getPatientDataLoading);
  const dateTime = new Date();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const today = new Date(getAltDateFor(dateTime));
  const birth = new Date(birth_date);
  const analysesData = useAppSelector(getPatiensAnalyses);
  const [diagnoses, setDiagnoses] = useState(patient_data?.diagnosis);
  const [diagnosis_comment, setDiagnosesComent] = useState(patient_data?.diagnosis_comment);
  const [operation_comment, setOperationComent] = useState(patient_data?.operation_comment);
  const [chemoterapy_comment, setChemoterapyComent] = useState(patient_data?.operation_comment);
  const [operationData, setOperationData] = useState('');
  const [isChemoterapy, setIsChemoterapy] = useState('');

  
    
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(authorizationStatus !== AuthorizationStatus.Auth){
      navigate(`${AppRoute.Login}`);
    } else if(FIO_sep.length != 3){
      setError('Вы ввели неполные данные');
    }else if(birth > today){
      setError('Дата рождения не может быть больше текущей даты');
    }else{
        setError(' ')
      dispatch(UpdatePatientsAction({
        id: Number(urlParams.patid),
        first_name: first_name,
        last_name: last_name,
        patronymic: patronymic,
        birth_date: birth_date,
        region: region,
        diagnosis: diagnoses,
        diagnosis_comment: '',
        operation_comment: '',
        chemoterapy_comment: ''
      }));
      handleClose();
      dispatch(fetchFullPatientInfoAction({id: Number(urlParams.patid)}));
      console.log(Number(urlParams.patid));
    }
  };
const handleSubmitRirghtBlock = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(authorizationStatus !== AuthorizationStatus.Auth){
      navigate(`${AppRoute.Login}`);
    } else{
        setError(' ')
      dispatch(UpdatePatientsRigthAction({
        id: Number(urlParams.patid),
        diagnosis: diagnoses,
        diagnosis_comment: diagnosis_comment,
        operationData: operationData,
        operation_comment: operation_comment,
        isChemoterapy: isChemoterapy,
        chemoterapy_comment: chemoterapy_comment,

      }));
      handleCloseRightBlock();
      dispatch(fetchFullPatientInfoAction({id: Number(urlParams.patid)}));
      console.log(Number(urlParams.patid));
    }
}
  const FIO_sep = FIO.split(' ', 3);

  const first_name: string = FIO_sep[1];
  const last_name: string = FIO_sep[0];
  const patronymic: string = FIO_sep[2];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenRightBlock = () => {
    setOpenRight(true);
  };

  const handleCloseRightBlock = () => {
    setOpenRight(false);
  };
  return(
    <div>
      {!isPatientLoading ?
        <>
          <Header/>
          <section className="patient">
            <div className="patient__left">
              <h3 className="patient__left-info">Информациая о пациенте:</h3>

              <div className="patient__left-name">
                <p>{patient_data?.last_name} {patient_data?.first_name} {patient_data?.patronymic}</p>
                <div className="patient__left-name-img" onClick={handleClickOpen}>
                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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
              <h3 className="patient__right-header">Диагноз: {patient_data?.diagnosis}</h3>
              <p className="patient__right-text">Комментарий о диагнозе: {patient_data?.diagnosis_comment}</p>

              <h3 className="patient__right-header">Дата операции: 12.12.2023</h3>
              <p className="patient__right-text">Комментарий об операции: {patient_data?.operation_comment}</p>

              <h3 className="patient__right-header">Химиотерапия: Да</h3>
              <p className="patient__right-text">Комментарий о курсах химиотерапии: {patient_data?.chemoterapy_comment}</p>

              <button className="patient__right-btn" onClick={handleClickOpenRightBlock}>Редактировать данные</button>
            </div>
          </section>
          <Dialog className="modal update" sx={style}
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
          </Dialog>
          <Dialog className="modal modal_data" sx={style}
            open={openRight}
            onClose={handleCloseRightBlock}>
            <form className="modal_data__content" onSubmit={handleSubmitRirghtBlock} action="#">
                <button className="modal_data__content-close" id="closeDataBtn" onClick={handleCloseRightBlock}>
                    <img src="./img/crossRed.svg" alt="закрыть"/>
                </button>

                <h2 className="modal_data__content-title">Данные</h2>

                <div className="modal_data__content-block">
                    <p className="modal_data__content-block-head">Диагноз</p>
                    <input type="text" className="modal_data__content-block-input" placeholder="Диагноз" value={diagnoses} onChange={(evt) => setDiagnoses(evt.target.value)}/>
                    <p className="modal_data__content-block-head">Комментарий о диагнозе</p>
                    <div >
                        <textarea className="modal_data__content-block-text" rows={4} cols={25} value={diagnosis_comment} onChange={(evt) => setDiagnosesComent(evt.target.value)}></textarea>
                    </div>
                </div>

                <div className="modal_data__content-block">
                    <p className="modal_data__content-block-head">Дата операции</p>
                    <input type="date" className="modal_data__content-block-input_date" placeholder="Дата операции" value={operationData} onChange={(evt) => setOperationData(evt.target.value)} required/>
                    <p className="modal_data__content-block-head">Комментарий об операции</p>
                    <div >
                        <textarea className="modal_data__content-block-text" rows={4} cols={25} value={operation_comment} onChange={(evt) => setOperationComent(evt.target.value)}></textarea>
                    </div>
                </div>

                <div className="modal_data__content-block">
                    <p className="modal_data__content-block-head">Химиотерапия</p>
                    <div className="modal_data__content-block-radios">
                        <input className="visually-hidden" type="radio" name="editDataCheckboxes" value={'Да'} onChange={(evt) => setIsChemoterapy(evt.target.value)} id="editDataCheckboxYes"/>
                        <label htmlFor="editDataCheckboxYes">
                            Да
                            <span></span>
                        </label>
                        <input className="visually-hidden" type="radio" name="editDataCheckboxes" value={'Нет'} onChange={(evt) => setIsChemoterapy(evt.target.value)} id="editDataCheckboxNo"/>
                        <label htmlFor="editDataCheckboxNo">
                            Нет
                            <span></span>
                        </label>
                    </div>
                    <p className="modal_data__content-block-head">Комментарий о химиотерапии</p>
                    <div >
                        <textarea className="modal_data__content-block-text" rows={4} cols={25} value={chemoterapy_comment} onChange={(evt) => setChemoterapyComent(evt.target.value)}></textarea>
                    </div>
                </div>

                <button type="submit" className="modal_data__content-submit">Изменить</button>

            </form>
        </Dialog>
        </>
        : <LoadingPage />}
    </div>
  );
}
