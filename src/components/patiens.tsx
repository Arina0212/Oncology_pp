import { Link } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../const";
import { FormEvent, useState } from "react";
import { CreatePatientsAction } from "../store/api-actions";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getAuthorizationStatus } from "../store/user-process/selectors";
import { useNavigate } from 'react-router-dom';

export default function PatiensCreatePopup(){
    const [FIO, setFIO] = useState('');
    const [birth_date, setDate] = useState('');
    const [region, setRegion] = useState('');
    const [diagnoses, setDiagnoses] = useState('');
    const dispatch = useAppDispatch();
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    const navigate = useNavigate();


    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(authorizationStatus === AuthorizationStatus.Auth) {
            dispatch(CreatePatientsAction({
                first_name: first_name,
                last_name: last_name,
                patronymic: patronymic,
                birth_date: birth_date,
                region: region,
                diagnosis: diagnoses,
                diagnosis_comment: "",
                operation_comment: "",
                chemoterapy_comment: ""
            }));}else{
                console.log("Вы не авторизованы")
                navigate(`${AppRoute.Login}`);
            }
    };

    const FIO_sep = FIO.split(' ', 3);

    let first_name: string = FIO_sep[1];
    let last_name: string = FIO_sep[0];
    let patronymic: string = FIO_sep[2];
    return(
        <div className="modal modal_patient-regis">
                <form className="modal__content" onSubmit={handleSubmit} action="#">
                    <Link to={AppRoute.Search} className="modal__content-close" id="closePatientRegisBtn" >
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                                        <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                    </Link>

                    <h2 className="modal__content-title">Регистрация</h2>

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



                    <button type="submit" className="modal__content-submit">Зарегистрировать пациента</button>
                </form>
            </div>
    )
}