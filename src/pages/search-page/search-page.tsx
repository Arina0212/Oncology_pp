import { FormEvent, useState } from "react";
import Dialog from '@mui/material/Dialog';
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { CreatePatientsAction } from "../../store/api-actions";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { getAuthorizationStatus } from "../../store/user-process/selectors";

const style = {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    transform: 'translate(0%, 0%)',
    translate: '0',
    bgcolor: 'rgb(255 255 255 / 0%)',
    boxshoutdown: '0 0 4.2105263158vw 0 rgba(0, 0, 0, 0.0784313725)',
  };

export default function SearchPage(){
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');

    const [FIO, setFIO] = useState('');
    const [birth_date, setDate] = useState('');
    const [region, setRegion] = useState('');
    const [diagnoses, setDiagnoses] = useState('');
    const dispatch = useAppDispatch();
    const authorizationStatus = useAppSelector(getAuthorizationStatus);


    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(FIO_sep.length!=3){
            setError("Вы ввели неполные данные");
        } else {
            setError("")
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
        }));
        handleClose();
    }
        
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
  }

    return(
        <>
            <Dialog className="modal" sx={style} 
                open={open}
                onClose={handleClose}>
                <form className="modal_patient-regis modal__content" onSubmit={handleSubmit} action="#">
                    <button className="modal__content-close" id="closePatientRegisBtn" onClick={handleClose}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                                        <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                    </button>

                    <h2 className="modal__content-title">Регистрация</h2>
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



                    <button type="submit" className="modal__content-submit">Зарегистрировать пациента</button>
                </form>
            </Dialog>
            <Header/>
            <section className="search">
                <div className="search__header">
                    <h3 className="search__header-title">Поиск пациента</h3>
                    <button className="search__header-regis" onClick={handleClickOpen}>Регистрация пациента</button>
                    {/* <Link className="search__header-regis" to={AppRoute.Profile} >Регистрация пациента</Link> */}
                </div>

                <div className="search__inputs">
                    <input type="text" className="search__inputs-input" placeholder="Фамилия"/>
                    <input type="text" className="search__inputs-input" placeholder="Имя"/>
                    <input type="text" className="search__inputs-input" placeholder="Отчество"/>
                    <input type="text" className="search__inputs-input" placeholder="Дата Рождения"/>

                    <button className="search__inputs-btn">Найти</button>
                </div>

                <div className="search__table">
                    <div className="search__table-titles">
                        <p className="search__table-titles-title">Фамилия</p>
                        <p className="search__table-titles-title">Имя</p>
                        <p className="search__table-titles-title">Отчество</p>
                        <p className="search__table-titles-title">Дата Рождения</p>
                        <p className="search__table-titles-title">Действия</p>
                    </div>

                    <div className="search__table-item">
                        <p className="search__table-item-content">Зубенко</p>
                        <p className="search__table-item-content">Михаил</p>
                        <p className="search__table-item-content">Петрович</p>
                        <p className="search__table-item-content">13.08.1991</p>

                        <a href="patient.html" className="search__table-item-edit">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>

                        <div className="search__table-item-btn">
                            <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#FF0000"/>
                                <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div className="search__table-item">
                        <p className="search__table-item-content">Макаравенченко</p>
                        <p className="search__table-item-content">Константин</p>
                        <p className="search__table-item-content">Константинович</p>
                        <p className="search__table-item-content">22.22.2222</p>

                        <a href="patient.html" className="search__table-item-edit">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>

                        <div className="search__table-item-btn">
                            <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#FF0000"/>
                                <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                    </div>

                    <div className="search__table-item">
                        <p className="search__table-item-content">Утенков</p>
                        <p className="search__table-item-content">Руслан</p>
                        <p className="search__table-item-content">Мехманович</p>
                        <p className="search__table-item-content">05.08.2003</p>

                        <a href="patient.html" className="search__table-item-edit">
                            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>

                        <div className="search__table-item-btn">
                            <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="28" rx="8" fill="#FF0000"/>
                                <path d="M12.5355 10.4645L16.0711 14L12.5355 17.5355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </div>
                    </div>
                </div>

            </section>
        
        </>
    )
}