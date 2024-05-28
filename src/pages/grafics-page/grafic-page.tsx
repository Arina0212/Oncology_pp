import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header";
import usePatientById from "../../components/hooks/get-patient-by-id";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { getComparison, getConclusion, getGrafic, getPatientAnalys } from "../../store/patiens-process/selectors";
import { humanizeDate } from "../../utils/change-data-formats";
import { FormEvent, useEffect, useState } from "react";
import { UpdateConclusionAction, fetchAnalysComparisonAction, fetchConclusionAction, fetchGraficAction } from "../../store/api-actions";
import { GraficData } from "../../types/grafic";
import { AppRoute } from "../../const";
import { AnalysComparison } from "../../types/analys-comparation";
import { Dialog } from "@mui/material";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import MyDocument from "../../components/subject-only-text/subject-only-text";

const style = {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    transform: 'translate(0%, 0%)',
    translate: '0',
    bgcolor: 'rgb(255 255 255 / 0%)',
    boxshoutdown: '0 0 4.2105263158vw 0 rgba(0, 0, 0, 0.0784313725)',
    // height:'10%',
    // width:'100%'
  };

export default function GraficPage(){
    const [openUpR, setOpenUpR] = useState(false);
    const [openUpB, setOpenUpB] = useState(false);
    const [openUpT, setOpenUpT] = useState(false);
    const [openUpC, setOpenUpC] = useState(false);

    const urlParams = useParams();
    console.log(urlParams);
    const [conclusion, setConclusion] = useState('');
    const [recommendations, setRecommendations] = useState('');
   
    const analysData = useAppSelector(getPatientAnalys);
    const patient_data = usePatientById();
    const dispatch = useAppDispatch();
    const comparison = useAppSelector(getComparison);
    console.log(analysData,patient_data);


    useEffect(()=> {
        dispatch(fetchGraficAction({id: Number(urlParams.analysisid)}))
        dispatch(fetchAnalysComparisonAction({id: Number(urlParams.analysid)}))
        dispatch(fetchConclusionAction({id: Number(urlParams.analysid)}))
    },[dispatch])

    const grafics = useAppSelector(getGrafic)
    console.log(grafics)
    const getconclusion = useAppSelector(getConclusion)
    console.log(conclusion)

    const printContent = () => {
        window.print();
    };

    const handleClickOpenUpdateR = () => {
        setOpenUpR(true);
      };
    
      const handleCloseUpdateR = () => {
        setOpenUpR(false);
      }

      const handleClickOpenUpdateB = () => {
        setOpenUpB(true);
      };
    
      const handleCloseUpdateB = () => {
        setOpenUpB(false);
      }

      const handleClickOpenUpdateT = () => {
        setOpenUpT(true);
      };
    
      const handleCloseUpdateT = () => {
        setOpenUpT(false);
      }

      const handleClickOpenUpdateC = () => {
        setOpenUpC(true);
      };
    
      const handleCloseUpdateC = () => {
        setOpenUpC(false);
      }

      const handleSubmitUpdate = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatch(UpdateConclusionAction({
            id: Number(urlParams.analysid),
            conclusion: conclusion,
            recommendations: recommendations
            }));
            handleCloseUpdateR();
            handleCloseUpdateB();
            handleCloseUpdateT();
            handleCloseUpdateC();

        };
    

    return(
        <>
            <Dialog className="modal update" sx={style} open={openUpR} onClose={handleCloseUpdateR}>                 
                <form className="modal_edit__content" onSubmit={handleSubmitUpdate}>
                    <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <h2 className="modal_edit__content-title">Расчет вида регенерации</h2>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Заключение по показателям расчета вида регенерации:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input type="textarea" className="modal_edit__content-block-text-list" value={conclusion} onChange={(evt) => setConclusion(evt.target.value)} />
                        </div>
                    </div>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Рекомендации для расчета вида регенерации:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input className="modal_edit__content-block-text-list" value={recommendations} onChange={(evt) => setRecommendations(evt.target.value)} />
                        </div>
                    </div>

                    <button type="submit" className="modal_edit__content-submit">Изменить</button>
                </form>
            </Dialog>
            <Dialog className="modal update" sx={style} open={openUpB} onClose={handleCloseUpdateB}>                 
                <form className="modal_edit__content" onSubmit={handleSubmitUpdate}>
                    <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <h2 className="modal_edit__content-title">B-клеточное звено</h2>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Заключение по показателям B-клеточного звена:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input type="textarea" className="modal_edit__content-block-text-list" value={conclusion} onChange={(evt) => setConclusion(evt.target.value)} />
                        </div>
                    </div>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Рекомендации для B-клеточного звена:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input className="modal_edit__content-block-text-list" value={recommendations} onChange={(evt) => setRecommendations(evt.target.value)} />
                        </div>
                    </div>

                    <button type="submit" className="modal_edit__content-submit">Изменить</button>
                </form>
            </Dialog>
            <Dialog className="modal update" sx={style} open={openUpT} onClose={handleCloseUpdateT}>                 
                <form className="modal_edit__content" onSubmit={handleSubmitUpdate}>
                    <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <h2 className="modal_edit__content-title">T-клеточное звено</h2>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Заключение по показателям T-клеточного звена:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input type="textarea" className="modal_edit__content-block-text-list" value={conclusion} onChange={(evt) => setConclusion(evt.target.value)} />
                        </div>
                    </div>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Рекомендации для T-клеточного звена:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input className="modal_edit__content-block-text-list" value={recommendations} onChange={(evt) => setRecommendations(evt.target.value)} />
                        </div>
                    </div>

                    <button type="submit" className="modal_edit__content-submit">Изменить</button>
                </form>
            </Dialog>
            <Dialog className="modal update" sx={style} open={openUpC} onClose={handleCloseUpdateC}>                 
                <form className="modal_edit__content" onSubmit={handleSubmitUpdate}>
                    <button className="modal_edit__content-close" id="closeEditBtn" formMethod="dialog">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <h2 className="modal_edit__content-title">Цитокиновые пары</h2>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Заключение по показателям цитокиновых пар:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input type="textarea" className="modal_edit__content-block-text-list" value={conclusion} onChange={(evt) => setConclusion(evt.target.value)} />
                        </div>
                    </div>

                    <div className="modal_edit__content-block">
                        <p className="modal_edit__content-block-head">Рекомендации для цитокиновых пар:</p>

                        <div contentEditable="true" className="modal_edit__content-block-text">
                            <input className="modal_edit__content-block-text-list" value={recommendations} onChange={(evt) => setRecommendations(evt.target.value)} />
                        </div>
                    </div>

                    <button type="submit" className="modal_edit__content-submit">Изменить</button>
                </form>
            </Dialog>
            <Header/>
            <section className="graphs">
            <div className="graphs__text">
                <p>Информациая о пациенте:</p>

                <button className="graphs__text-print" onClick={printContent}>Печать</button>
            </div>
                <p className="graphs__name">{patient_data?.last_name} {patient_data?.first_name} {patient_data?.patronymic}</p>
                <div className="graphs__info">
                    <h3 className="graphs__info-diagnose">Диагноз: {patient_data?.diagnosis}</h3>
                    <p className="graphs__info-date">Дата исследования: {humanizeDate(analysData?.analysis_date)}</p>
                    <Link to={`${AppRoute.Patients}/${Number(urlParams.patid)}/analysis/${Number(urlParams.analysisid)}/${Number(urlParams.analysid)}`} className="graphs__info-backbtn">К анализам</Link>
                </div>
                <div className="graphs__analysis">
        <h3 className="graphs__analysis-header">Сравнение анализов</h3>

        <table className="graphs__analysis-table">
            <thead>
            <tr>
                <th>Показатель</th>
                <th>Среднее по <br/> предыдущим</th>
                <th>Текущий</th>
                <th>Ед. изм.</th>
                <th>Реф. интервал</th>
                <th>Изменения</th>
            </tr>
            </thead>
            <tbody>
            {comparison?.analysis.map((analys: AnalysComparison)=>(
            <tr>
                <td key={analys.name}>{analys.name}</td>
                {(analys.avg_prev_value===null)?
                <td>-</td>
                :
                <td>{analys.avg_prev_value}</td>
                }
                <td>{analys.value}</td>
                <td>{analys.unit}</td>
                <td>({analys.interval_min} - {analys.interval_max})</td>
                {(analys.changes!=null)?
                <td>{analys.changes}%</td>
                :
                <td>-</td>
                }
                
            </tr>))
}
            </tbody>
        </table>
    </div>
                {(grafics?.map((grafic: GraficData)=>
                <div key={grafic.graphic}>
                    {(grafic.graphic.includes('hematological'))?
                        <div className="graphs__title">
                            <h3 className="graphs__title-head">B-клеточное звено</h3>
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
                            {(grafic.graphic.includes('immune'))?
                            <div className="graphs__title">
                                <h3 className="graphs__title-head">T-клеточное звено</h3>
                                <div className="graphs__title-pic" onClick={handleClickOpenUpdateT}>
                                    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 13.4952L1 19L6.50476 17L19 4.50476L15.4952 1L3 13.4952Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12.7998 4L15.9998 7.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3.7998 13L6.9998 16.2" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            :
                            <div>{(grafic.graphic.includes('cytokine'))?
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
                            <div>{(grafic.graphic.includes('regeneration'))?
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
                            <div>{(grafics.length === 0)?
                            <div><h3 className="graphs__title">У пациента ещё нет графиков</h3></div>
                            :
                            <div>
                                <div><h3 className="graphs__title">У пациента ещё нет графиков</h3></div>
                            </div>
                       
                            }</div>
                       
                            }</div>
                        }</div>

                    }</div>}

                    <div className="graphs__result">
                    
                    
                        <div className="graphs__result-pic">
                            {/* <img src={`http://158.160.103.152:8000/${grafic.graphic}`} alt={grafic.graphic}/> */}
                            <img src={`https://storage.yandexcloud.${grafic.graphic}`} alt={grafic.graphic}/>
                        </div>
                        <div className="graphs__result-info">
                        <h4 className="graphs__result-info-head">Заключение по показателям B-клеточного звена:</h4>
                        <ol className="graphs__result-info-list">
                            <li>{getconclusion?.conclusion}</li>
                            <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                            <li>Компенсируемый или нет</li>
                            <li>Изменение динамики если есть</li>
                        </ol>

                        <h4 className="graphs__result-info-head">Рекомендации для B-клеточного звена:</h4>
                        <ol className="graphs__result-info-list">
                            <li>{getconclusion?.recommendations}</li>
                            <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                            <li>Компенсируемый или нет</li>
                            <li>Изменение динамики если есть</li>
                        </ol>

                        <p className="graphs__result-info-additional">*рекомендации по коррекции лечения требуют консультации с лечащим
                            врачом</p>
                    </div>
                </div>
                </div>       
                
             ))}
            </section>
        </>
    );
}
