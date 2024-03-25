import Header from "../../components/header/header";

import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import UserBlock from "../../components/user-block/user-block";
import { getSubjectsName } from "../../store/subjects-process/selectors";
import SubjectCard from "../../components/subject-card/subject-card";
import { SubjectData } from "../../types/subject-data";
import { fetchSubjectsAction } from "../../store/api-actions";
import { store } from "../../store";
import { useAppSelector } from "../../components/hooks";


//store.dispatch(fetchSubjectsAction());
export default function UsagePage(){
    const subjects = useAppSelector(getSubjectsName);
    return(
        <>
            {/* <Header/> */}
            <header className="header">
                <Link to={AppRoute.Main} className="header__title">Le Ha Im</Link>

                <div className="header__links">
                    <Link to={AppRoute.Usage} className="header__links-link header__links-link_active">Область применения</Link>
                    <Link to={AppRoute.Copyright} className="header__links-link">Авторские права</Link>
                </div>

                <UserBlock/>
            </header>
            <section className="usage">
                {subjects.map((subject:SubjectData) => (
                        <SubjectCard key={subject.subject_name} subject_name={subject.subject_name}/>
                    ))
                }
                {/* <input  className="visually-hidden" type="radio" name="usage" value="oncology" id="oncology-input"/>
                <label className="usage__btn" htmlFor="oncology-input" id="oncology-label">
                    Онкология
                </label>

                <input className="visually-hidden" type="radio" name="usage" value="hematology" id="hematology-input"/>
                <label className="usage__btn" htmlFor="hematology-input" id="hematology-label">
                    Гематология
                </label>

                <input className="visually-hidden" type="radio" name="usage" value="surgery" id="surgery-input"/>
                <label className="usage__btn" htmlFor="surgery-input" id="surgery-label">
                    Хирургия
                </label>

                <input className="visually-hidden" type="radio" name="usage" value="therapy" id="therapy-input"/>
                <label className="usage__btn" htmlFor="therapy-input" id="therapy-label">
                    Терапия
                </label> */}


                <div className="usage__content" id="oncology-content">
                    <h3 className="usage__content-title">Онкология</h3>
                    <p className="usage__content-text">
                        Целесообразность применения для наблюдения за пациентами с раком легкого
                        С50, С64, С43, Саркома Капоша, С18-20.
                        <br></br>
                        Документация иммунокомпрометации пациента
                        <br></br>
                        Фиксация глубины и вида нарушения для реабилитации
                    </p>
                </div>

                <div className="usage__content" id="hematology-content">
                    <h3 className="usage__content-title">Гематология</h3>
                    <p className="usage__content-text">
                        Целесообразность применения для наблюдения за пациентами с раком легкого
                        С50, С64, С43, Саркома Капоша, С18-20.
                        <br></br>
                        Документация иммунокомпрометации пациента
                        <br></br>
                        Фиксация глубины и вида нарушения для реабилитации
                    </p>
                </div>

                <div className="usage__content" id="surgery-content">
                    <h3 className="usage__content-title">Хирургия</h3>
                    <p className="usage__content-text">
                        Целесообразность применения для наблюдения за пациентами с раком легкого
                        С50, С64, С43, Саркома Капоша, С18-20.
                        <br></br>
                        Документация иммунокомпрометации пациента
                        <br></br>
                        Фиксация глубины и вида нарушения для реабилитации
                    </p>
                </div>

                <div className="usage__content" id="therapy-content">
                    <h3 className="usage__content-title">Терапия</h3>
                    <p className="usage__content-text">
                        Целесообразность применения для наблюдения за пациентами с раком легкого
                        С50, С64, С43, Саркома Капоша, С18-20.
                        <br/>
                        Документация иммунокомпрометации пациента
                        <br/>
                        Фиксация глубины и вида нарушения для реабилитации
                    </p>
                </div>
            </section>
        </>
    )
}
