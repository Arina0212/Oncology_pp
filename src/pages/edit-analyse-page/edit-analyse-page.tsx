import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/header/header";
import { useAppDispatch, useAppSelector } from "../../components/hooks";
import { EditPatientAnalysesAction, fetchAnalysAction } from "../../store/api-actions";
import { useParams } from "react-router-dom";
import { humanizeDate } from "../../utils/change-data-formats";
import { getPatientAnalys } from "../../store/patiens-process/selectors";

export default function EditAnalysisPage(){
    const urlParams = useParams();
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch((fetchAnalysAction({id: Number(urlParams.analysid)})));
      }, [dispatch]);
      const analysData = useAppSelector(getPatientAnalys)
      //const [value1_1, setValue1_1] = useState('');
      //const [value2_1, setValue2_1] = useState('');
      //const [value3_1, setValue3_1] = useState('');
    //   const [value4_1, setValue4_1] = useState('');
    //   const [value1_2, setValue1_2] = useState('');
    //   const [value2_2, setValue2_2] = useState('');
    //   const [value3_2, setValue3_2] = useState('');
    //   const [value4_2, setValue4_2] = useState('');
    //   const [value5_2, setValue5_2] = useState('');
    //   const [value6_2, setValue6_2] = useState('');
    //   const [value7_2, setValue7_2] = useState('');
    //   const [value1_3, setValue1_3] = useState('');
    //   const [value2_3, setValue2_3] = useState('');
    //   const [value3_3, setValue3_3] = useState('');
    //   const [value4_3, setValue4_3] = useState('');
    //   const [value5_3, setValue5_3] = useState('');
    //   const [value6_3, setValue6_3] = useState('');


      const [value1_1, setValue1_1] = useState((analysData?.name==='immune_status')?
      String(analysData.analysis[0].value)
      :'');
      const [value2_1, setValue2_1] = useState((analysData?.name==='immune_status')?
      String(analysData?.analysis[1]?.value)
      :'');
      const [value3_1, setValue3_1] = useState((analysData?.name==='immune_status')?
      String(analysData?.analysis[2]?.value)
      :'');
      const [value4_1, setValue4_1] = useState((analysData?.name==='immune_status')?
      String(analysData.analysis[3]?.value)
      :'');
      const [value1_2, setValue1_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[0].value)
      :'');
      const [value2_2, setValue2_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[1]?.value)
      :'');
      const [value3_2, setValue3_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[2]?.value)
      :'');
      const [value4_2, setValue4_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[3]?.value)
      :'');
      const [value5_2, setValue5_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[4]?.value)
      :'');
      const [value6_2, setValue6_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[5]?.value)
      :'');
      const [value7_2, setValue7_2] = useState((analysData?.name==='hematological_research' || analysData?.name === 'hematological research')?
      String(analysData.analysis[6]?.value)
      :'');
      const [value1_3, setValue1_3] = useState((analysData?.name==='cytokine_status')?
      String(analysData.analysis[0].value)
      :'');
      const [value2_3, setValue2_3] = useState((analysData?.name==='cytokine_status')?
      String(analysData.analysis[1]?.value)
      :'');
      const [value3_3, setValue3_3] = useState((analysData?.name==='cytokine_status')?
      String(analysData.analysis[2]?.value)
      :'');
      const [value4_3, setValue4_3] = useState((analysData?.name==='cytokine_status')?
      String(analysData.analysis[3]?.value)
      :'');
      const [value5_3, setValue5_3] = useState((analysData?.name==='cytokine_status')?
      String(analysData.analysis[4]?.value)
      :'');
      const [value6_3, setValue6_3] = useState((analysData?.name==='cytokine_status')?
      String(analysData.analysis[5]?.value)
      :'');

    if(analysData?.name==='hematological_research' || analysData?.name === 'hematological research'){
        let anaylse2 = document.getElementById('analyse2')
        let showBtn2 = document.getElementById('showBtn2')
        anaylse2?.classList.remove("add-analysis__analyse_hide");
        showBtn2?.classList.add("add-analysis__show_hide");
        console.log(analysData.name, "гемотологическое")
        
    }else if(analysData?.name==='cytokine_status'){
        let anaylse3 = document.getElementById('analyse3')
        let showBtn3 = document.getElementById('showBtn3')
        anaylse3?.classList.remove("add-analysis__analyse_hide");
        showBtn3?.classList.add("add-analysis__show_hide");
        console.log(analysData.name, 'цитокины')
        

    }else{
        let anaylse1 = document.getElementById('analyse1')
        let showBtn1 = document.getElementById('showBtn1')
        anaylse1?.classList.remove("add-analysis__analyse_hide");
        showBtn1?.classList.add("add-analysis__show_hide");

    }
    let dateTime = new Date().toLocaleDateString()
    const [error, setError] = useState('');
    const [date, setDate] = useState(analysData?.analysis_date);
    
    let elementsID1: string, elementsID2: string, elementsID3 : string
    let countCloseAnalyses: number

    const showHide1=()=>{
        let anaylse1 = document.getElementById('analyse1')
        let showBtn1 = document.getElementById('showBtn1')
        anaylse1?.classList.toggle("add-analysis__analyse_hide");
        showBtn1?.classList.toggle("add-analysis__show_hide");
        countCloseAnalyses = document.querySelectorAll('.add-analysis__analyse_hide').length;
        console.log(countCloseAnalyses,'-количество зарытых анализов')
    }
    function showHide2(){
        let anaylse2 = document.getElementById('analyse2')
        let showBtn2 = document.getElementById('showBtn2')
        anaylse2?.classList.toggle("add-analysis__analyse_hide");
        showBtn2?.classList.toggle("add-analysis__show_hide");
        countCloseAnalyses = document.querySelectorAll('.add-analysis__analyse_hide').length;
        console.log(countCloseAnalyses,'-количество зарытых анализов')
        }
    function showHide3(){
        let anaylse3 = document.getElementById('analyse3')
        let showBtn3 = document.getElementById('showBtn3')
        anaylse3?.classList.toggle("add-analysis__analyse_hide");
        showBtn3?.classList.toggle("add-analysis__show_hide");
        countCloseAnalyses = document.querySelectorAll('.add-analysis__analyse_hide').length;
        console.log(countCloseAnalyses,'-количество зарытых анализов')
    }
    

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        var elements = document.getElementsByClassName("add-analysis__analyse_hide");
        if(elements.length === 3){
            elementsID1 = elements[0].id;
            elementsID2 = elements[1].id;
            elementsID3 = elements[2].id;
        }else if(elements.length === 2){
            elementsID1 = elements[0].id;
            elementsID2 = elements[1].id;
        }else{
            elementsID1 = elements[0].id;
        }
        console.log(elementsID1, elementsID2, elementsID3)
        if(humanizeDate(date) > dateTime){
            setError("Дата анализа не может быть больше текущей даты");
        }else if(elements.length === 3 && elementsID1==='analyse2' && elementsID2==='analyse3'){
            dispatch(EditPatientAnalysesAction({
                pat_id: Number(urlParams.patid),
                analys_id: Number(urlParams.analysid),
                id: Number(urlParams.analysisid),
                analysis_date: date,
                test:[
                    {
                        name:'immune_status',
                        analysis:[
                            {
                                value: value1_1,
                                indicator_name:'t_lymphocytes',
                            },
                            {
                                value: value2_1,
                                indicator_name:'b_lymphocytes',
                            },
                            {
                                value: value3_1,
                                indicator_name:'t_helpers',
                            },
                            {
                                value: value4_1,
                                indicator_name:'t_cytotoxic_lymphocytes',
                            }
                        ]
                    }
                ]
                }));
        }else if(elements.length === 3 && elementsID1==='analyse1' && elementsID2==='analyse3'){
            dispatch(EditPatientAnalysesAction({
                pat_id: Number(urlParams.patid),
                analys_id: Number(urlParams.analysid),
                id: Number(urlParams.analysisid),
                analysis_date: date,
                test:[
                    {
                        name:'hematological_research',
                        analysis:[
                            {
                                value: value1_2,
                                indicator_name:'leukocytes',
                            },
                            {
                                value: value2_2,
                                indicator_name:'lymphocytes',
                            },
                            {
                                value: value3_2,
                                indicator_name:'monocytes',
                            },
                            {
                                value: value4_2,
                                indicator_name:'neutrophils',
                            },
                            {
                                value: value5_2,
                                indicator_name:'eosinophils',
                            },
                            {
                                value: value6_2,
                                indicator_name:'basophils',
                            },
                            {
                                value: value7_2,
                                indicator_name:'hemoglobin',
                            }
                        ]
                    }
                ],
                }));
            }else if(elements.length === 3 && elementsID1==='analyse1' && elementsID2==='analyse2'){
                    dispatch(EditPatientAnalysesAction({
                        pat_id: Number(urlParams.patid),
                        analys_id: Number(urlParams.analysid),
                        id: Number(urlParams.analysisid),
                        analysis_date: date,
                        test:[
                            {
                                name:'cytokine_status',
                                analysis:[
                                    {
                                        value: value1_3,
                                        indicator_name:'cd3_il2_stimulated',
                                    },
                                    {
                                        value: value2_3,
                                        indicator_name:'cd3_il2_spontaneous',
                                    },
                                    {
                                        value: value3_3,
                                        indicator_name:'cd3_tnfa_stimulated',
                                    },
                                    {
                                        value: value4_3,
                                        indicator_name:'cd3_tnfa_spontaneous',
                                    },
                                    {
                                        value: value5_3,
                                        indicator_name:'cd3_ifny_stimulated',
                                    },
                                    {
                                        value: value6_3,
                                        indicator_name:'cd3_ifny_spontaneous',
                                    }
                                ]
                            }
                        ],
                        }));
                }
                else if(elements.length === 2 && elementsID1==='analyse3'){
            dispatch(EditPatientAnalysesAction({
                pat_id: Number(urlParams.patid),
                analys_id: Number(urlParams.analysid),
                id: Number(urlParams.analysisid),
                analysis_date: date,
                test:[
                    {
                        name:'immune_status',
                        analysis:[
                            {
                                value: value1_1,
                                indicator_name:'t_lymphocytes',
                            },
                            {
                                value: value2_1,
                                indicator_name:'b_lymphocytes',
                            },
                            {
                                value: value3_1,
                                indicator_name:'t_helpers',
                            },
                            {
                                value: value4_1,
                                indicator_name:'t_cytotoxic_lymphocytes',
                            }
                        ]
                    },
                    {
                        name:'hematological_research',
                        analysis:[
                            {
                                value: value1_2,
                                indicator_name:'leukocytes',
                            },
                            {
                                value: value2_2,
                                indicator_name:'lymphocytes',
                            },
                            {
                                value: value3_2,
                                indicator_name:'monocytes',
                            },
                            {
                                value: value4_2,
                                indicator_name:'neutrophils',
                            },
                            {
                                value: value5_2,
                                indicator_name:'eosinophils',
                            },
                            {
                                value: value6_2,
                                indicator_name:'basophils',
                            },
                            {
                                value: value7_2,
                                indicator_name:'hemoglobin',
                            }
                        ]
                    }
                ],
                }));
        }else if(elements.length === 2 && elementsID1==='analyse2'){
            dispatch(EditPatientAnalysesAction({
                pat_id: Number(urlParams.patid),
                analys_id: Number(urlParams.analysid),
                id: Number(urlParams.analysisid),
                analysis_date: date,
                test:[
                    {
                        name:'immune_status',
                        analysis:[
                            {
                                value: value1_1,
                                indicator_name:'t_lymphocytes',
                            },
                            {
                                value: value2_1,
                                indicator_name:'b_lymphocytes',
                            },
                            {
                                value: value3_1,
                                indicator_name:'t_helpers',
                            },
                            {
                                value: value4_1,
                                indicator_name:'t_cytotoxic_lymphocytes',
                            }
                        ]
                    },
                    {
                        name:'cytokine_status',
                                analysis:[
                                    {
                                        value: value1_3,
                                        indicator_name:'cd3_il2_stimulated',
                                    },
                                    {
                                        value: value2_3,
                                        indicator_name:'cd3_il2_spontaneous',
                                    },
                                    {
                                        value: value3_3,
                                        indicator_name:'cd3_tnfa_stimulated',
                                    },
                                    {
                                        value: value4_3,
                                        indicator_name:'cd3_tnfa_spontaneous',
                                    },
                                    {
                                        value: value5_3,
                                        indicator_name:'cd3_ifny_stimulated',
                                    },
                                    {
                                        value: value6_3,
                                        indicator_name:'cd3_ifny_spontaneous',
                                    }
                                ]
                    }
                ],
                }));
        }else if(countCloseAnalyses === 2 && elements.length === 2 && elementsID1==='analyse1'){
            dispatch(EditPatientAnalysesAction({
                pat_id: Number(urlParams.patid),
                analys_id: Number(urlParams.analysid),
                id: Number(urlParams.analysisid),
                analysis_date: date,
                test:[
                    {
                        name:'hematological_research',
                        analysis:[
                            {
                                value: value1_2,
                                indicator_name:'leukocytes',
                            },
                            {
                                value: value2_2,
                                indicator_name:'lymphocytes',
                            },
                            {
                                value: value3_2,
                                indicator_name:'monocytes',
                            },
                            {
                                value: value4_2,
                                indicator_name:'neutrophils',
                            },
                            {
                                value: value5_2,
                                indicator_name:'eosinophils',
                            },
                            {
                                value: value6_2,
                                indicator_name:'basophils',
                            },
                            {
                                value: value7_2,
                                indicator_name:'hemoglobin',
                            }
                        ]
                    },
                    {
                        name:'cytokine_status',
                                analysis:[
                                    {
                                        value: value1_3,
                                        indicator_name:'cd3_il2_stimulated',
                                    },
                                    {
                                        value: value2_3,
                                        indicator_name:'cd3_il2_spontaneous',
                                    },
                                    {
                                        value: value3_3,
                                        indicator_name:'cd3_tnfa_stimulated',
                                    },
                                    {
                                        value: value4_3,
                                        indicator_name:'cd3_tnfa_spontaneous',
                                    },
                                    {
                                        value: value5_3,
                                        indicator_name:'cd3_ifny_stimulated',
                                    },
                                    {
                                        value: value6_3,
                                        indicator_name:'cd3_ifny_spontaneous',
                                    }
                                ]
                    }
                ],
                }));
        }else{
            console.log('введены все анализы')
            dispatch(EditPatientAnalysesAction({
                pat_id: Number(urlParams.patid),
                analys_id: Number(urlParams.analysid),
                id: Number(urlParams.analysisid),
                analysis_date: date,
                test:[
                    {
                        name:'immune_status',
                        analysis:[
                            {
                                value: value1_1,
                                indicator_name:'t_lymphocytes',
                            },
                            {
                                value: value2_1,
                                indicator_name:'b_lymphocytes',
                            },
                            {
                                value: value3_1,
                                indicator_name:'t_helpers',
                            },
                            {
                                value: value4_1,
                                indicator_name:'t_cytotoxic_lymphocytes',
                            }
                        ]
                    },
                    {
                        name:'hematological_research',
                        analysis:[
                            {
                                value: value1_2,
                                indicator_name:'leukocytes',
                            },
                            {
                                value: value2_2,
                                indicator_name:'lymphocytes',
                            },
                            {
                                value: value3_2,
                                indicator_name:'monocytes',
                            },
                            {
                                value: value4_2,
                                indicator_name:'neutrophils',
                            },
                            {
                                value: value5_2,
                                indicator_name:'eosinophils',
                            },
                            {
                                value: value6_2,
                                indicator_name:'basophils',
                            },
                            {
                                value: value7_2,
                                indicator_name:'hemoglobin',
                            }
                        ]
                    },
                    {
                        name:'cytokine_status',
                                analysis:[
                                    {
                                        value: value1_3,
                                        indicator_name:'cd3_il2_stimulated',
                                    },
                                    {
                                        value: value2_3,
                                        indicator_name:'cd3_il2_spontaneous',
                                    },
                                    {
                                        value: value3_3,
                                        indicator_name:'cd3_tnfa_stimulated',
                                    },
                                    {
                                        value: value4_3,
                                        indicator_name:'cd3_tnfa_spontaneous',
                                    },
                                    {
                                        value: value5_3,
                                        indicator_name:'cd3_ifny_stimulated',
                                    },
                                    {
                                        value: value6_3,
                                        indicator_name:'cd3_ifny_spontaneous',
                                    }
                                ]
                    }
                ],
                }));
        }
    }
        
    return(
        <>
        <Header/>
        <section className="add-analysis">
        <form onSubmit={handleSubmit} >
        <p className="error-message">{error}</p>
    <div className="add-analysis__header">
        <h3 className="add-analysis__header-name">Результаты исследований</h3>
        <p className="add-analysis__header-text">Дата исследования:</p>

        <input type="date" value={date} onChange={(evt) => setDate(evt.target.value)}className="add-analysis__header-input" placeholder="дата"/>
        <button type="submit" className="add-analysis__header-btn">Сохранить</button>
    </div>

    <div id="analyse1" className="add-analysis__analyse add-analysis__analyse_hide">
        <div className="add-analysis__analyse-head">
            <p className="add-analysis__analyse-head-text" >Тип исследования: Имунный статус</p>
            <button type="reset" className="add-analysis__analyse-head-delete" onClick={showHide1}>Удалить</button>
        </div>

            <table className="add-analysis__analyse-table sortable">
                <thead>
                <tr>
                    <th>Показатель</th>
                    <th>Результат</th>
                    <th>Ед. изм.</th>
                    <th>Реф. интервал</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Т-лимфоциты</td>
                    <td>
                        <input type="text" value={value1_1} onChange={(evt) => setValue1_1(evt.target.value)} placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.80 - 2.20)</td>
                </tr>
                <tr>
                    <td>Б-лимфоциты</td>
                    <td>
                        <input type="text" value={value2_1} onChange={(evt) => setValue2_1(evt.target.value)} placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.10 - 0.50)</td>
                </tr>
                <tr>
                    <td>Т-хелперы</td>
                    <td>
                        <input type="text" value={value3_1} onChange={(evt) => setValue3_1(evt.target.value)}placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.60 - 1.60)</td>
                </tr>
                <tr>
                    <td>Т-цитоксические лимфоциты</td>
                    <td>
                        <input type="text" value={value4_1} onChange={(evt) => setValue4_1(evt.target.value)} placeholder="x"/>
                    </td>
                    <td>10e9/л</td>
                    <td>(0.19 - 0.65)</td>
                </tr>
                </tbody>
            </table>
        
    </div>
    

    <div id="analyse2" className="add-analysis__analyse add-analysis__analyse_hide">
        <div className="add-analysis__analyse-head">
            <p className="add-analysis__analyse-head-text">Тип исследования: Гематологическое исследование</p>
            <button type="reset" className="add-analysis__analyse-head-delete" onClick={showHide2}>Удалить</button>
        </div>

        <table className="add-analysis__analyse-table sortable">
            <thead>
            <tr>
                <th>Показатель</th>
                <th>Результат</th>
                <th>Ед. изм.</th>
                <th>Реф. интервал</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Лейкоциты</td>
                <td>
                    <input type="text" value={value1_2} onChange={(evt) => setValue1_2(evt.target.value)}  placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(4.5 - 11)</td>
            </tr>
            <tr>
                <td>Лимфоциты</td>
                <td>
                    <input type="text" value={value2_2} onChange={(evt) => setValue2_2(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(1 - 4.8)</td>
            </tr>
            <tr>
                <td>Моноциты</td>
                <td>
                    <input type="text" value={value3_2} onChange={(evt) => setValue3_2(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0.01 - 0.8)</td>
            </tr>
            <tr>
                <td>Нейтрофилы</td>
                <td>
                    <input type="text" value={value4_2} onChange={(evt) => setValue4_2(evt.target.value)}  placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(1.8 - 8)</td>
            </tr>
            <tr>
                <td>Эозинофилы</td>
                <td>
                    <input type="text" value={value5_2} onChange={(evt) => setValue5_2(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0 - 0.7)</td>
            </tr>
            <tr>
                <td>Базофилы</td>
                <td>
                    <input type="text" value={value6_2} onChange={(evt) => setValue6_2(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0 - 0.2)</td>
            </tr>
            <tr>
                <td>Гемоглобин</td>
                <td>
                    <input type="text" value={value7_2} onChange={(evt) => setValue7_2(evt.target.value)} placeholder="x"/>
                </td>
                <td>г/л</td>
                <td>(110 - 154)</td>
            </tr>
            </tbody>
        </table>
    </div>

    <div id="analyse3" className="add-analysis__analyse add-analysis__analyse_hide">
        <div className="add-analysis__analyse-head">
            <p className="add-analysis__analyse-head-text">Тип исследования: Цитокиновый статус</p>
            <button type="reset" className="add-analysis__analyse-head-delete" onClick={showHide3}>Удалить</button>
        </div>

        <table className="add-analysis__analyse-table sortable">
            <thead>
            <tr>
                <th>Показатель</th>
                <th>Результат</th>
                <th>Ед. изм.</th>
                <th>Реф. интервал</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>cd3+il2+(стимулированный)</td>
                <td>
                    <input type="text" value={value1_3} onChange={(evt) => setValue1_3(evt.target.value)}  placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0.33 - 0.65)</td>
            </tr>
            <tr>
                <td>cd3+il2+(спонтанный)</td>
                <td>
                    <input type="text" value={value2_3} onChange={(evt) => setValue2_3(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0 - 0.01)</td>
            </tr>
            <tr>
                <td>cd3+tnfa+(стимулированный)</td>
                <td>
                    <input type="text" value={value3_3} onChange={(evt) => setValue3_3(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0.52 - 0.94)</td>
            </tr>
            <tr>
                <td>cd3+tnfa+(спонтанный)</td>
                <td>
                    <input type="text" value={value4_3} onChange={(evt) => setValue4_3(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0 - 0.9)</td>
            </tr>
            <tr>
                <td>cd3+ifny+(стимулированный)</td>
                <td>
                    <input type="text" value={value5_3} onChange={(evt) => setValue5_3(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0.19 - 0.38)</td>
            </tr>
            <tr>
                <td>cd3+ifny+(спонтанный)</td>
                <td>
                    <input type="text" value={value6_3} onChange={(evt) => setValue6_3(evt.target.value)} placeholder="x"/>
                </td>
                <td>10e9/л</td>
                <td>(0 - 0.5)</td>
            </tr>
            </tbody>
        </table>
    </div>

    </form>
    <div id="analyse4" className="add-analysis__analyse_hide"></div>
    <button className="add-analysis__show" onClick={showHide1} id="showBtn1">Добавить исследование: Имунный статус</button>
    <button className="add-analysis__show" onClick={showHide2} id="showBtn2">Добавить исследование: Гематологическое исследование</button>
    <button className="add-analysis__show" onClick={showHide3} id="showBtn3">Добавить исследование: Цитокиновый статус</button>

</section>
        </>
    );
}
