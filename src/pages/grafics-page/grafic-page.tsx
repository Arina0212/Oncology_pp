import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import usePatientById from "../../components/hooks/get-patient-by-id";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { getGrafic, getPatientAnalys } from "../../store/patiens-process/selectors";
import { humanizeDate } from "../../utils/change-data-formats";
import { useEffect, useState } from "react";
import { store } from "../../store";
import { fetchGraficAction } from "../../store/api-actions";
import { GraficData } from "../../types/grafic";
import johnsonImg from "http://127.0.0.1:8000/media/hematological_research_79.png"

export default function GraficPage(){
    const urlParams = useParams();
    console.log(urlParams)
    const analysData = useAppSelector(getPatientAnalys)
    const patient_data = usePatientById();
    const dispatch = useAppDispatch();
    console.log(analysData,patient_data)


    useEffect(()=> {
        dispatch(fetchGraficAction({id: Number(urlParams.analysisid)}))
    },[dispatch])

    const grafics = useAppSelector(getGrafic)
    console.log(grafics)
    return(
        <>
            <Header/>
            <section className="graphs">
                <h2 className="graphs__text">Информациая о пациенте:</h2>
                <p className="graphs__name">{patient_data?.last_name} {patient_data?.first_name} {patient_data?.patronymic}</p>
                <div className="graphs__info">
                    <h3 className="graphs__info-diagnose">Диагноз: {patient_data?.diagnosis}</h3>
                    <p className="graphs__info-date">Дата исследования: {humanizeDate(analysData?.analysis_date)}</p>
                </div>
                {(grafics?.map((grafic: GraficData)=>
                <div>
                <h3 className="graphs__title">B-клеточное звено</h3>

                <div className="graphs__result">
          


                   
                </div>

                <h3 className="graphs__title">T-клеточное звено</h3>

                <div className="graphs__result">
                
                
                    <div className="graphs__result-pic">
                        <img src={`http://127.0.0.1:8000/${grafic.graphic}`} alt="граф"/>
                    </div>
                    <div className="graphs__result-info">
                    <h4 className="graphs__result-info-head">Заключение по показателям B-клеточного звена:</h4>
                    <ol className="graphs__result-info-list">
                        <li>Мало (ОВИД 1, 2, 3) или много (лимфоцитоз с превышениемот нормы в 2 раза)</li>
                        <li>Компенсируемый или нет</li>
                        <li>Изменение динамики если есть</li>
                    </ol>

                    <h4 className="graphs__result-info-head">Рекомендации для B-клеточного звена:</h4>
                    <ol className="graphs__result-info-list">
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
