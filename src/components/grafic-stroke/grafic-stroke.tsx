import { Dialog } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { UpdateConclusionAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';


type GraficStrokeProps={
    id: number;
    grafic: string;
    conclusion: string;
    recommendations: string;
    test_name: string;
}

const style = {
  position: 'absolute' as const,
  top: '0',
  left: '0',
  transform: 'translate(0%, 0%)',
  translate: '0',
  bgcolor: 'rgb(255 255 255 / 0%)',
  boxshoutdown: '0 0 4.2105263158vw 0 rgba(0, 0, 0, 0.0784313725)',
  height:'10%',
  width:'100%'
};



export default function GraficStroke({id, grafic, conclusion, recommendations, test_name}: GraficStrokeProps){
  const [openUpR, setOpenUpR] = useState(false);
  const [openUpB, setOpenUpB] = useState(false);
  const [openUpT, setOpenUpT] = useState(false);
  const [openUpC, setOpenUpC] = useState(false);

  const [conclusionUp, setConclusion] = useState(conclusion);
  const [recommendationsUp, setRecommendations] = useState(recommendations);

  const dispatch = useAppDispatch();
  const urlParams = useParams();

  const [idR] = useState(id);
  const [idB] = useState(id);
  const [idT] = useState(id);
  const [idC] = useState(id);

  const handleClickOpenUpdateR = () => {
    setOpenUpR(true);
  };

  const handleCloseUpdateR = () => {
    setOpenUpR(false);
  };

  const handleClickOpenUpdateB = () => {
    setOpenUpB(true);
  };

  const handleCloseUpdateB = () => {
    setOpenUpB(false);
  };

  const handleClickOpenUpdateT = () => {
    setOpenUpT(true);
  };

  const handleCloseUpdateT = () => {
    setOpenUpT(false);
  };

  const handleClickOpenUpdateC = () => {
    setOpenUpC(true);
  };

  const handleCloseUpdateC = () => {
    setOpenUpC(false);
  };

  const handleSubmitUpdateR = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(UpdateConclusionAction({
      id: Number(idR),
      idgraf: Number(urlParams.analysisid),
      conclusion: conclusionUp,
      recommendations: recommendationsUp
    }));
    handleCloseUpdateR();
    handleCloseUpdateB();
    handleCloseUpdateT();
    handleCloseUpdateC();

  };
  const handleSubmitUpdateB = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(UpdateConclusionAction({
      id: Number(idB),
      idgraf: Number(urlParams.analysisid),
      conclusion: conclusionUp,
      recommendations: recommendationsUp
    }));
    handleCloseUpdateR();
    handleCloseUpdateB();
    handleCloseUpdateT();
    handleCloseUpdateC();

  };
  const handleSubmitUpdateT = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(UpdateConclusionAction({
      id: Number(idT),
      idgraf: Number(urlParams.analysisid),
      conclusion: conclusionUp,
      recommendations: recommendationsUp
    }));
    handleCloseUpdateR();
    handleCloseUpdateB();
    handleCloseUpdateT();
    handleCloseUpdateC();

  };
  const handleSubmitUpdateC = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(UpdateConclusionAction({
      id: Number(idC),
      idgraf: Number(urlParams.analysisid),
      conclusion: conclusionUp,
      recommendations: recommendationsUp
    }));
    handleCloseUpdateR();
    handleCloseUpdateB();
    handleCloseUpdateT();
    handleCloseUpdateC();

  };

  return(
    <>
      <Dialog className="modal update" sx={style} open={openUpR} onClose={handleCloseUpdateR}>
        <form className="modal_edit__content" onSubmit={handleSubmitUpdateR}>
          <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>

          <h2 className="modal_edit__content-title">Расчет вида регенерации</h2>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Заключение по показателям расчета вида регенерации:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={conclusionUp} onChange={(evt) => setConclusion(evt.target.value)} />
            </div>
          </div>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Рекомендации для расчета вида регенерации:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={recommendationsUp} onChange={(evt) => setRecommendations(evt.target.value)} />
            </div>
          </div>

          <button type="submit" className="modal_edit__content-submit">Изменить</button>
        </form>
      </Dialog>
      <Dialog className="modal update" sx={style} open={openUpB} onClose={handleCloseUpdateB}>
        <form className="modal_edit__content" onSubmit={handleSubmitUpdateB}>
          <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>

          <h2 className="modal_edit__content-title">B-клеточное звено</h2>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Заключение по показателям B-клеточного звена:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={conclusionUp} onChange={(evt) => setConclusion(evt.target.value)} />
            </div>
          </div>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Рекомендации для B-клеточного звена:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={recommendationsUp} onChange={(evt) => setRecommendations(evt.target.value)} />
            </div>
          </div>

          <button type="submit" className="modal_edit__content-submit">Изменить</button>
        </form>
      </Dialog>
      <Dialog className="modal update" sx={style} open={openUpT} onClose={handleCloseUpdateT}>
        <form className="modal_edit__content" onSubmit={handleSubmitUpdateT}>
          <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>

          <h2 className="modal_edit__content-title">T-клеточное звено</h2>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Заключение по показателям T-клеточного звена:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={conclusionUp} onChange={(evt) => setConclusion(evt.target.value)} />
            </div>
          </div>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Рекомендации для T-клеточного звена:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={recommendationsUp} onChange={(evt) => setRecommendations(evt.target.value)} />
            </div>
          </div>

          <button type="submit" className="modal_edit__content-submit">Изменить</button>
        </form>
      </Dialog>
      <Dialog className="modal update" sx={style} open={openUpC} onClose={handleCloseUpdateC}>
        <form className="modal_edit__content" onSubmit={handleSubmitUpdateC}>
          <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
              <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>

          <h2 className="modal_edit__content-title">Цитокиновые пары</h2>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Заключение по показателям цитокиновых пар:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={conclusionUp} onChange={(evt) => setConclusion(evt.target.value)} />
            </div>
          </div>

          <div className="modal_edit__content-block">
            <p className="modal_edit__content-block-head">Рекомендации для цитокиновых пар:</p>

            <div className="modal_edit__content-block-text">
              <textarea rows={5} cols = {25} className="modal_edit__content-block-text-list" value={recommendationsUp} onChange={(evt) => setRecommendations(evt.target.value)} />
            </div>
          </div>

          <button type="submit" className="modal_edit__content-submit">Изменить</button>
        </form>
      </Dialog>
      {(test_name?.includes('immune')) ?
        <div className="graphs__title">
          <h3 className="graphs__title-head">T-клеточное звено</h3>
          <div className="graphs__title-pic" onClick={handleClickOpenUpdateB}>
            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </div>
        </div>
        :
        <div>
          {(test_name?.includes('hematological')) ?
            <div className="graphs__title">
              <h3 className="graphs__title-head">B-клеточное звено</h3>
              <div className="graphs__title-pic" onClick={handleClickOpenUpdateT}>
                <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            :
            <div>{(test_name?.includes('cytokine')) ?
              <div className="graphs__title">
                <h3 className="graphs__title-head">Цитокиновые пары</h3>
                <div className="graphs__title-pic" onClick={handleClickOpenUpdateC}>
                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              :
              <div>{(test_name?.includes('regeneration')) ?
                <div className="graphs__title">
                  <h3 className="graphs__title-head">Расчет вида регенерации</h3>
                  <div className="graphs__title-pic" onClick={handleClickOpenUpdateR}>
                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                :
                <div><h3 className="graphs__title">У пациента ещё нет графиков</h3></div>}
              </div>}
            </div>}
        </div>}

      <div className="graphs__result">


        <div className="graphs__result-pic">
          {/* <img src={`http://158.160.103.152:8000/${grafic.graphic}`} alt={grafic.graphic}/> */}
          <img src={`https://storage.yandexcloud.${grafic}`} alt={grafic}/>
        </div>
        {(test_name?.includes('hematological')) ?
          <div className="graphs__result-info">
            <h4 className="graphs__result-info-head">Заключение по показателям B-клеточного звена:</h4>
            <ol className="graphs__result-info-list">
              <li>{conclusion}</li>
            </ol>

            <h4 className="graphs__result-info-head">Рекомендации для B-клеточного звена:</h4>
            <ol className="graphs__result-info-list">
              <li>{recommendations}</li>
            </ol>

            <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                            врачом
            </p>
          </div> : <div>{(test_name?.includes('immune')) ?
            <div className="graphs__result-info">
              <h4 className="graphs__result-info-head">Заключение по показателям T-клеточного звена:</h4>
              <ol className="graphs__result-info-list">

                <li>{conclusion}</li>
              </ol>

              <h4 className="graphs__result-info-head">Рекомендации для T-клеточного звена:</h4>
              <ol className="graphs__result-info-list">
                <li>{recommendations}</li>
              </ol>

              <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                        врачом
              </p>
            </div> : <div>
              {(test_name?.includes('cytokine')) ?
                <div className="graphs__result-info">
                  <h4 className="graphs__result-info-head">Заключение по показателям цитокиновых пар:</h4>
                  <ol className="graphs__result-info-list">

                    <li>{conclusion}</li>
                  </ol>

                  <h4 className="graphs__result-info-head">Рекомендации для цитокиновых пар:</h4>
                  <ol className="graphs__result-info-list">
                    <li>{recommendations}</li>
                  </ol>

                  <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                        врачом
                  </p>
                </div> : <div>{(test_name?.includes('regeneration')) ?
                  <div className="graphs__result-info">
                    <h4 className="graphs__result-info-head">Заключение по показателям расчета типа регенерации:</h4>
                    <ol className="graphs__result-info-list">

                      <li>{conclusion}</li>
                    </ol>

                    <h4 className="graphs__result-info-head">Рекомендации для расчета типа регенерации:</h4>
                    <ol className="graphs__result-info-list">
                      <li>{recommendations}</li>
                    </ol>

                    <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                        врачом
                    </p>
                  </div> : <div></div>}
                </div>}
                     </div>}
          </div>}
      </div>
    </>
  );
}
