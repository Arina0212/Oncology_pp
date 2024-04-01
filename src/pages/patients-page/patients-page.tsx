import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { FormEvent, useState } from "react";
import Dialog from '@mui/material/Dialog';
import { useAppDispatch } from "../../components/hooks";
import { CreatePatientsAction } from "../../store/api-actions";

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
    const [open, setOpen] = useState(false);
    const [FIO, setFIO] = useState('');
    const [birth_date, setDate] = useState('');
    const [region, setRegion] = useState('');
    const [diagnoses, setDiagnoses] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
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
        <>
        <Header/>
        <section className="patient">
    <div className="patient__header">
        <div className="patient__header-info">
            <h3 className="patient__header-info-text">Информациая о пациенте:</h3>
            <div className="patient__header-info-name">
                <p>Зубенко Михаил Петрович </p>
                <div className="patient__header-info-name-img" onClick={handleClickOpen}>
                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <p className="patient__header-info-date">Дата Рождения: 12.03.1993</p>
        </div>

        <button className="patient__header-btn">Добавить анализ</button>
    </div>

    <div className="patient__table">
        <div className="patient__table-item">
            <Link to="" className="patient__table-item-links">ОАК</Link>
            <Link to="" className="patient__table-item-links">имуннодефицит</Link>
            <Link to="" className="patient__table-item-links">цитокоины</Link>
            <p className="patient__table-item-date">Дата исследования: 19.11.2023</p>
        </div>
        <div className="patient__table-item">
            <Link to="" className="patient__table-item-links">ОАК</Link>
            <Link to="" className="patient__table-item-links">имуннодефицит</Link>
            <Link to="" className="patient__table-item-links">цитокоины</Link>
            <p className="patient__table-item-date">Дата исследования: 19.11.2023</p>
        </div>
        <div className="patient__table-item">
            <Link to="" className="patient__table-item-links">ОАК</Link>
            <Link to="" className="patient__table-item-links">имуннодефицит</Link>
            <Link to="" className="patient__table-item-links">цитокоины</Link>
            <p className="patient__table-item-date">Дата исследования: 19.11.2023</p>
        </div>
        <div className="patient__table-item">
            <Link to="" className="patient__table-item-links">ОАК</Link>
            <Link to="" className="patient__table-item-links">имуннодефицит</Link>
            <Link to="" className="patient__table-item-links">цитокоины</Link>
            <p className="patient__table-item-date">Дата исследования: 19.11.2023</p>
        </div>
    </div>

</section>
<Dialog className="modal modal_patient-regis" sx={style} 
    open={open}
    onClose={handleClose}>

    <form className="modal__content" onSubmit={handleSubmit} action="#">
        <button className="modal__content-close" id="closePatientRegisBtn" onClick={handleClose}>
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
        </>
    )
}

