import { FormEvent, useState } from "react";
import { humanizeDate } from "../../utils/change-data-formats";
import Dialog from '@mui/material/Dialog';
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAuthorizationStatus } from "../../store/user-process/selectors";
import { useNavigate, useParams } from "react-router-dom";
import { UpdatePatientsRigthAction, fetchPatientsRigthAction } from "../../store/api-actions";
const style = {
    position: 'absolute' as const,
    top: '0',
    left: '0',
    transform: 'translate(0%, 0%)',
    translate: '0',
    bgcolor: 'rgb(255 255 255 / 0%)',
    boxshoutdown: '0 0 4.2105263158vw 0 rgba(0, 0, 0, 0.0784313725)',
  };

type PatientOperationEditProps={
    id: number;
    diagnosis: string | undefined;
    diagnosis_comment_edit: string | undefined;
    diagnosis_date: string | undefined;
    operation_comment_edit: string | undefined;
    chemoterapy: string | undefined;
    chemoterapy_comment_edit: string | undefined;
}
export default function PatientOperationEdit({id, diagnosis, diagnosis_comment_edit, diagnosis_date, operation_comment_edit, chemoterapy, chemoterapy_comment_edit}: PatientOperationEditProps){
    const authorizationStatus = useAppSelector(getAuthorizationStatus);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const urlParams = useParams();
    const [openRight, setOpenRight] = useState(false);
    const [diagnoses, setDiagnoses] = useState(diagnosis);
    const [diagnosis_comment, setDiagnosesComent] = useState(diagnosis_comment_edit);
    const [operation_comment, setOperationComent] = useState(operation_comment_edit);
    const [chemoterapy_comment, setChemoterapyComent] = useState(chemoterapy_comment_edit);
    const [operationData, setOperationData] = useState('');
    const [isChemoterapy, setIsChemoterapy] = useState('');
    const handleSubmitRirghtBlock = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(authorizationStatus !== AuthorizationStatus.Auth){
          navigate(`${AppRoute.Login}`);
        } else{
          dispatch(UpdatePatientsRigthAction({
            id: id,
            diagnosis: diagnoses,
            diagnosis_comment: diagnosis_comment,
            diagnosis_date: operationData,
            operation_comment: operation_comment,
            chemoterapy: isChemoterapy,
            chemoterapy_comment: chemoterapy_comment,
    
          }));
          setDiagnoses('');
          setDiagnosesComent('');
          setOperationComent('');
          handleCloseRightBlock();

          dispatch(fetchPatientsRigthAction({id: Number(urlParams.patid)}));
          console.log(Number(urlParams.patid));
    
        }
    }
    const handleClickOpenRightBlock = () => {
        setOpenRight(true);
      };
    
      const handleCloseRightBlock = () => {
        setOpenRight(false);
      };
    return(
        <>
        <h3 className="patient__right-header">Диагноз: {diagnosis}</h3>
              <p className="patient__right-text">Комментарий о диагнозе: {diagnosis_comment}</p>

              <h3 className="patient__right-header">Дата операции: {(diagnosis_date!==null)?
              <span>{humanizeDate(diagnosis_date)}</span>
              :<span>-</span>
              }</h3>
              <p className="patient__right-text">Комментарий об операции: {operation_comment}</p>

              <h3 className="patient__right-header">Химиотерапия: {chemoterapy}</h3>
              <p className="patient__right-text">Комментарий о курсах химиотерапии: {chemoterapy_comment}</p>

              <button className="patient__right-btn" onClick={handleClickOpenRightBlock}>Редактировать данные</button>
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
                    <input type="text" className="modal_data__content-block-input" placeholder="Диагноз" value={diagnoses} onChange={(evt) => setDiagnoses(evt.target.value)} required/>
                    <p className="modal_data__content-block-head">Комментарий о диагнозе</p>
                    <div >
                        <textarea className="modal_data__content-block-text" rows={4} cols={25} value={diagnosis_comment} onChange={(evt) => setDiagnosesComent(evt.target.value)} required></textarea>
                    </div>
                </div>

                <div className="modal_data__content-block">
                    <p className="modal_data__content-block-head">Дата операции</p>
                    <input type="date" className="modal_data__content-block-input_date" placeholder="Дата операции" value={operationData} onChange={(evt) => setOperationData(evt.target.value)} required/>
                    <p className="modal_data__content-block-head">Комментарий об операции</p>
                    <div >
                        <textarea className="modal_data__content-block-text" rows={4} cols={25} value={operation_comment} onChange={(evt) => setOperationComent(evt.target.value)} required></textarea>
                    </div>
                </div>

                <div className="modal_data__content-block">
                    <p className="modal_data__content-block-head">Химиотерапия</p>
                    <div className="modal_data__content-block-radios">
                        <input className="visually-hidden" type="radio" name="editDataCheckboxes" value={'Да'} onChange={(evt) => setIsChemoterapy(evt.target.value)} id="editDataCheckboxYes" required/>
                        <label htmlFor="editDataCheckboxYes">
                            Да
                            <span></span>
                        </label>
                        <input className="visually-hidden" type="radio" name="editDataCheckboxes" value={'Нет'} onChange={(evt) => setIsChemoterapy(evt.target.value)} id="editDataCheckboxNo" required/>
                        <label htmlFor="editDataCheckboxNo">
                            Нет
                            <span></span>
                        </label>
                    </div>
                    <p className="modal_data__content-block-head">Комментарий о химиотерапии</p>
                    <div >
                        <textarea className="modal_data__content-block-text" rows={4} cols={25} value={chemoterapy_comment} onChange={(evt) => setChemoterapyComent(evt.target.value)} required></textarea>
                    </div>
                </div>

                <button type="submit" className="modal_data__content-submit">Изменить</button>

            </form>
        </Dialog>
    </>
    );
}
