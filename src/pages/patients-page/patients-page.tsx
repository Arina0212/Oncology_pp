import { Link } from "react-router-dom";
import Header from "../../components/header/header";

export default function PatientPage(){
    return(
        <>
        <Header/>
        <section className="patient">
    <div className="patient__header">
        <div className="patient__header-info">
            <h3 className="patient__header-info-text">Информациая о пациенте:</h3>
            <div className="patient__header-info-name">
                <p>Зубенко Михаил Петрович </p>
                <div className="patient__header-info-name-img">
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
{/* <dialog className="modal modal_patient-regis">
    <form className="modal__content">
        <button className="modal__content-close" id="closePatientRegisBtn" formMethod="dialog">
            <img src="../media/crossRed.svg" alt="закрыть"/>
        </button>

        <h2 className="modal__content-title">Пациент</h2>

        <div className="modal__content-input-box">
            <input type="text" placeholder="ФИО пациента" required/>
        </div>

        <div className="modal__content-input-box">
            <input type="date" placeholder="Дата рождения" required/>
        </div>


        <button type="submit" className="modal__content-submit">Изменить</button>
    </form>
</dialog> */}
        </>
    )
}