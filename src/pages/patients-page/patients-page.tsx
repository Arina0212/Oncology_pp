import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { FormEvent, useState } from "react";
import Dialog from '@mui/material/Dialog';
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { UpdatePatientsAction, fetchFullPatientInfoAction } from "../../store/api-actions";
import { AppRoute, AuthorizationStatus } from "../../const";
import { getAuthorizationStatus } from "../../store/user-process/selectors";
import usePatientById from "../../components/hooks/get-patient-by-id";
import LoadingPage from "../loading-page/loading-page";
import { getPatiensAnalyses, getPatientDataLoading } from "../../store/patiens-process/selectors";
import { humanizeDate } from "../../utils/change-data-formats";
import { AnalysDateData, AnalysNameDateData } from "../../types/analysis-date";

const style = {
    position: 'absolute' as 'absolute',
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
    console.log(patient_data)
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const [FIO, setFIO] = useState('');
    const [birth_date, setDate] = useState('');
    const [region, setRegion] = useState('');
    const [diagnoses, setDiagnoses] = useState('');
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    const isPatientLoading = useAppSelector(getPatientDataLoading);
    let dateTime = new Date().toLocaleDateString()
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const analysesData = useAppSelector(getPatiensAnalyses)
    // console.log("analysesData=",&& analysesData?.patient_tests.length != 0, analysesData?.patient_tests != undefined)

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(authorizationStatus != AuthorizationStatus.Auth){
            navigate(`${AppRoute.Login}`);
        } else if(FIO_sep.length!=3){
            setError("Вы ввели неполные данные");
        }else if(humanizeDate(birth_date) > dateTime){
            setError("Дата рождения не может быть больше текущей даты");
        }else{
        dispatch(UpdatePatientsAction({
            id: Number(urlParams.patid),
            first_name: first_name,
            last_name: last_name,
            patronymic: patronymic,
            birth_date: birth_date,
            region: region,
            diagnosis: diagnoses,
            diagnosis_comment: "",
            operation_comment: "",
            chemoterapy_comment: ""
        }));}
        handleClose();
        dispatch(fetchFullPatientInfoAction({id: Number(urlParams.patid)}));
        console.log(Number(urlParams.patid))
    };

    const FIO_sep = FIO.split(' ', 3);

    let first_name: string = FIO_sep[1];
    let last_name: string = FIO_sep[0];
    let patronymic: string = FIO_sep[2];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div>
            {patient_data != undefined && !isPatientLoading ?
            <>
                <Header/>
                <section className="patient">
                    <div className="patient__left">
                        <h3 className="patient__left-info">Информациая о пациенте:</h3>

                        <div className="patient__left-name">
                            <p>{patient_data.last_name} {patient_data.first_name} {patient_data.patronymic}</p>
                            <div className="patient__left-name-img"  onClick={handleClickOpen}>
                                <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="patient__left-date">
                            <p>Дата Рождения: {humanizeDate(patient_data.birth_date)}</p>
                            <p>Регион: {patient_data.region}</p>
                        </div>

                        <div className="patient__left-add">
                            <h3 className="patient__left-add-text">Результаты анализов</h3>
                            <Link to={`${AppRoute.Patients}/${patient_data.id}/add-analysis`} className="patient__left-add-btn">Добавить анализ</Link>
                        </div>
                        {(analysesData?.patient_tests != undefined ) ?
                        <div className="patient__left-table">
                            
                                {analysesData?.patient_tests.map((analys: AnalysDateData)=>( 
                                    <div className="patient__left-table-item">
                                        {analys.tests.map((analysname: AnalysNameDateData)=>(
                                            <div>
                                            {(analysname.name ==='hematological_research') || (analysname.name ==='hematological research')?
                                                <div>
                                                    <Link to={`${AppRoute.Patients}/${patient_data.id}/analysis/${analys.id}/${analysname.id}`} className="patient__left-table-item-links">ОАК</Link>
                                                </div>
                                                :
                                                <div>{(analysname.name ==='immune_status')?
                                                <div>
                                                    <Link to={`${AppRoute.Patients}/${patient_data.id}/analysis/${analys.id}/${analysname.id}`} className="patient__left-table-item-links">имунодифицит</Link>
                                                </div>
                                                :
                                                <div>{(analysname.name ==='cytokine_status') ?
                                                <div>
                                                    <Link to={`${AppRoute.Patients}/${patient_data.id}/analysis/${analys.id}/${analysname.id}`} className="patient__left-table-item-links">цитокоины</Link>
                                                </div>
                                                :
                                                <div><p className="patient__left-table-item-date">{humanizeDate(analys.analysis_date)}</p></div>
                                        }</div>
                                        }
                                        </div>
                                            }
                                            </div>
                                        ))}
                                        
                                        <p className="patient__left-table-item-date">{humanizeDate(analys.analysis_date)}</p>
                                    </div>
                                ))
                                }
                                
                        </div>
                        : 
                            <div className="patient__left-table">
                                <div className="patient__left-table-item">
                                    <p className="patient__left-table-item-links">У пациента ещё нет анализов</p>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="patient__right">
                        <h3 className="patient__right-header">Диагноз: {patient_data.diagnosis}</h3>
                        <p className="patient__right-text">Комментарий о диагнозе: {patient_data.diagnosis_comment}</p>

                        <h3 className="patient__right-header">Дата операции: 12.12.2023</h3>
                        <p className="patient__right-text">Комментарий об операции: {patient_data.operation_comment}</p>

                        <h3 className="patient__right-header">Химиотерапия: Да</h3>
                        <p className="patient__right-text">Комментарий о курсах химиотерапии: {patient_data.chemoterapy_comment}</p>

                        <button className="patient__right-btn">Редактировать данные</button>
                    </div>
                </section>
                <Dialog className="modal update" sx={style} 
                    open={open}
                    onClose={handleClose}>
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
            </> : <LoadingPage />}
        </div>
    )
}
