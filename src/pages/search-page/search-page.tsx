import { FormEvent, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { CreatePatientsAction, fetchCurrentPatientAction, fetchPatiensInfoAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';
import { getPatiens } from '../../store/patiens-process/selectors';
import { PatienInfoData } from '../../types/patient-info';
import PatientStroke from '../../components/patient-stroke/patient-stroke';
import { store } from '../../store';
import { getAltDate, getAltDateFor } from '../../utils/change-data-formats';

const style = {
  position: 'absolute' as const,
  top: '0',
  left: '0',
  height:'60%',
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
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [last_name_search, setLastName] = useState('');
  const [first_name_search, setFirstName] = useState('');
  const [patronymic_search, setPatronymic] = useState('');
  const [birth_date_search, setDateSearch] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const dateTime = new Date();
  const today = new Date(getAltDateFor(dateTime));
  const birth = new Date(birth_date);

  const patiens = useAppSelector(getPatiens);
  useEffect(() => {
    dispatch(fetchPatiensInfoAction());
  }, [dispatch]);

  const handleSubmitRegist = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(authorizationStatus != AuthorizationStatus.Auth){
      navigate(`${AppRoute.Login}`);
    } else if(FIO_sep.length != 3){
      setError('Вы ввели неполные данные');
    }else if(birth > today){
      setError('Дата рождения не может быть больше текущей даты');
    }else{
      setError('');
      dispatch(CreatePatientsAction({
        first_name: first_name,
        last_name: last_name,
        patronymic: patronymic,
        birth_date: getAltDate(birth_date),
        region: region,
        diagnosis: diagnoses,
        diagnosis_comment: '',
        operation_comment: '',
        chemoterapy_comment: ''
      }));
      store.dispatch(fetchPatiensInfoAction());
      handleCloseRegist();


    }

  };

  // const handleSubmitUpdate = (evt: FormEvent<HTMLFormElement>) => {
  //     evt.preventDefault();
  //     if(authorizationStatus != AuthorizationStatus.Auth){
  //         navigate(`${AppRoute.Login}`);
  //     } else if(FIO_sep.length!=3){
  //         setError("Вы ввели неполные данные");
  //     }else{
  //         setError("")
  //         dispatch(UpdatePatientsAction({
  //             id: id
  //             first_name: first_name,
  //             last_name: last_name,
  //             patronymic: patronymic,
  //             birth_date: birth_date,
  //             region: region,
  //             diagnosis: diagnoses,
  //             diagnosis_comment: "",
  //             operation_comment: "",
  //             chemoterapy_comment: ""
  //         }));
  //         handleCloseUpdate();
  //     }

  // };


  const FIO_sep = FIO.split(' ', 3);

  const first_name: string = FIO_sep[1];
  const last_name: string = FIO_sep[0];
  const patronymic: string = FIO_sep[2];

  const handleClickOpenRegist = () => {
    setOpen(true);
  };

  const handleCloseRegist = () => {
    setOpen(false);
  };
  const handleSearch = (evt: FormEvent<HTMLFormElement>) =>{
    evt.preventDefault();
    dispatch(fetchCurrentPatientAction({
      first_name: first_name,
      last_name: last_name,
      patronymic: patronymic,
      birth_date: getAltDate(birth_date),
    }));

  };

  //   const handleClickOpenUpdate = () => {
  //     setOpenUp(true);
  //   };

  //   const handleCloseUpdate = () => {
  //     setOpenUp(false);
  //   }

  return(
    <>
      <Dialog className="modal registr" sx={style}
        open={open}
        onClose={handleCloseRegist}
      >
        <form className="modal_patient-regis modal__content" onSubmit={handleSubmitRegist} action="#">
          <button className="modal__content-close" id="closePatientRegisBtn" onClick={handleCloseRegist}>
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
            <input type="text"
              value={FIO}
              onChange={(evt) =>
                setFIO(evt.target.value)}
              placeholder="ФИО пациента"
              required
            />
          </div>

          <div className="modal__content-input-box">
            <input type="date"
              value={birth_date}
              onChange={(evt) =>
                setDate(evt.target.value)}
              placeholder="Дата рождения"
              required
            />
          </div>
          <div className="modal__content-input-box">
            <input type="text"
              value={diagnoses}
              onChange={(evt) =>
                setDiagnoses(evt.target.value)}
              placeholder="Диагноз"
              required
            />
          </div>
          <div className="modal__content-input-box">
            <input type="text"
              value={region}
              onChange={(evt) =>
                setRegion(evt.target.value)}
              placeholder="Регион"
              required
            />
          </div>


          <button type="submit" className="modal__content-submit">Зарегистрировать пациента</button>
        </form>
      </Dialog>
      {/* <Dialog className="modal update" sx={style}
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
            </Dialog> */}
      <Header/>
      <section className="search">
        <div className="search__header">
          <h3 className="search__header-title">Поиск пациента</h3>
          <button className="search__header-regis" onClick={handleClickOpenRegist}>Регистрация пациента</button>
          {/* <Link className="search__header-regis" to={AppRoute.Profile} >Регистрация пациента</Link> */}
        </div>

        <form className="search__inputs" onSubmit={handleSearch}>
          <input type="text" className="search__inputs-input" value={last_name_search} onChange={(evt) => setLastName(evt.target.value)} placeholder="Фамилия"/>
          <input type="text" className="search__inputs-input" value={first_name_search} onChange={(evt) => setFirstName(evt.target.value)} placeholder="Имя"/>
          <input type="text" className="search__inputs-input" value={patronymic_search} onChange={(evt) => setPatronymic(evt.target.value)} placeholder="Отчество"/>
          <input type="text" className="search__inputs-input" value={birth_date_search} onChange={(evt) => setDateSearch(evt.target.value)} placeholder="Дата Рождения"/>

          <button type="submit" className="search__inputs-btn">Найти</button>
        </form>

        <div className="search__table">
          <div className="search__table-titles">
            <p className="search__table-titles-title">Фамилия</p>
            <p className="search__table-titles-title">Имя</p>
            <p className="search__table-titles-title">Отчество</p>
            <p className="search__table-titles-title">Дата Рождения</p>
            <p className="search__table-titles-title">Действия</p>
          </div>
          {[...patiens].reverse().map((patien: PatienInfoData) => (
            <PatientStroke key={patien.id} id={patien.id} first_name_pat={patien.first_name} last_name_pat={patien.last_name} patronomic_pat={patien.patronymic} birth_date_pat={patien.birth_date}/>
          ))}
        </div>

      </section>

    </>
  );
}
