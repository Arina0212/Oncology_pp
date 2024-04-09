import { Link, useNavigate } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAuthorizationStatus } from "../../store/user-process/selectors";
import { UpdatePatientsAction, fetchFullPatientInfoAction } from "../../store/api-actions";
import Dialog from '@mui/material/Dialog';
import { getCurrentPatient } from "../../store/patiens-process/selectors";
import { humanizeDate } from "../../utils/change-data-formats";

type PatienInfoProps={
    id: number;
    first_name_pat: string;
    last_name_pat: string;
    patronomic_pat: string;
    birth_date_pat: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    transform: 'translate(0%, 0%)',
    translate: '0',
    bgcolor: 'rgb(255 255 255 / 0%)',
    boxshoutdown: '0 0 4.2105263158vw 0 rgba(0, 0, 0, 0.0784313725)',
    height:'60%',
  };

export default function PatientStroke({id, first_name_pat, last_name_pat, patronomic_pat, birth_date_pat}: PatienInfoProps){
    const [openUp, setOpenUp] = useState(false);
    const [error, setError] = useState('');
    const [FIO, setFIO] = useState('');
    const [birth_date, setDate] = useState('');
    const [region, setRegion] = useState('');
    const [diagnoses, setDiagnoses] = useState('');
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    let [isUpdatePatient, setIsUpdatePatient] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    
    const handleSubmitUpdate = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(authorizationStatus != AuthorizationStatus.Auth){
            navigate(`${AppRoute.Login}`);
        } else if(FIO_sep.length!=3){
            setError("Вы ввели неполные данные");
        }else{
            setError("")
            dispatch(UpdatePatientsAction({
                id: id,
                first_name: first_name,
                last_name: last_name,
                patronymic: patronymic,
                birth_date: birth_date,
                region: region,
                diagnosis: diagnoses,
                diagnosis_comment: "",
                operation_comment: "",
                chemoterapy_comment: ""
            }));
            handleCloseUpdate();
            setIsUpdatePatient(true);
            dispatch(fetchFullPatientInfoAction({id: id}));
            console.log(id)
        }
    };

    console.log(isUpdatePatient)
    useEffect(() => {
        if(isUpdatePatient === true){
            dispatch(fetchFullPatientInfoAction({id: id}));
            console.log(id)
        }
      }, [dispatch, id]);
      const update_patient = useAppSelector(getCurrentPatient);
      console.log("Обновленный пациент: ",update_patient)
      
    const FIO_sep = FIO.split(' ', 3);

    let first_name: string = FIO_sep[1];
    let last_name: string = FIO_sep[0];
    let patronymic: string = FIO_sep[2];

    const [new_last_name] = useState(last_name);
    const [new_first_name] = useState(first_name);
    const [new_patronomic] = useState(patronymic);
    const [new_birth_date] = useState(birth_date);

  const handleClickOpenUpdate = () => {
    setOpenUp(true);
  };

  const handleCloseUpdate = () => {
    setOpenUp(false);
  }


    return(
        <>
            <Dialog className="modal update" sx={style} 
                open={openUp}
                onClose={handleCloseUpdate}>

                <form className="modal_patient-regis modal__content" onSubmit={handleSubmitUpdate} action="#">
                    <button className="modal__content-close" id="closePatientRegisBtn" onClick={handleCloseUpdate}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <h2 className="modal__content-title">Пациент</h2>
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
            <div className="search__table-item">
                <p className="search__table-item-content">{last_name_pat}</p>
                <p className="search__table-item-content">{first_name_pat}</p>
                <p className="search__table-item-content">{patronomic_pat}</p>
                <p className="search__table-item-content">{humanizeDate(birth_date_pat)}</p>

                <div className="search__table-item-edit" onClick={handleClickOpenUpdate}>
                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <Link to={`${AppRoute.Patients}/${id}` }>
                    <div className="search__table-item-btn">
                        <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="28" rx="8" fill="#FF0000"/>
                            <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </>
    )
}