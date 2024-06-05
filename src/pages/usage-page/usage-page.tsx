import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import UserBlock from '../../components/user-block/user-block';
import { getSubjectsName } from '../../store/subjects-process/selectors';
import SubjectCard from '../../components/subject-card/subject-card';
import { useAppSelector } from '../../components/hooks';
import { SubjectsData } from '../../types/subjects-data';
import SubjectText from '../../components/subject-text/subject-text';


//store.dispatch(fetchSubjectsAction());
export default function UsagePage(){
  // const activeGenre = useAppSelector(getActiveSubjectsName);
  const subjects = useAppSelector(getSubjectsName);

  return(
    <>
      <header className="header">
        <Link to={AppRoute.Main} className="header__title">Le Ha Im</Link>

        <div className="header__links">
          <Link to={`${AppRoute.Subjects}/${1}`} className="header__links-link header__links-link_active">Область применения</Link>
          <Link to={AppRoute.Copyright} className="header__links-link">Авторские права</Link>
        </div>

        <UserBlock/>
      </header>
      <section className="usage">
        <div className="usage__btns">
          {subjects.map((subject: SubjectsData) => (
            <SubjectCard key={subject.id} id={subject.id} subject_name={subject.subject_name}/>))}
        </div>
        <SubjectText/>
      </section>
    </>
  );
}
