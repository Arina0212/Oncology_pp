import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import classNames from 'classnames';

type SubjectCardProps ={
    id: number;
    subject_name: string;
}

export default function SubjectCard({id, subject_name}: SubjectCardProps){
  const urlParams = useParams();

  return(
    <Link to={`${AppRoute.Subjects}/${id}` } >
      <input className="visually-hidden" type="radio" name="usage" value={`${id}`} id={`${id}-input`}/>
      <label className={classNames('usage__btns-btn', {'usage__btns-btn_active': id === Number(urlParams.id)})} htmlFor={`${id}-input`} id={`${id}-lable`}>{subject_name}</label>
    </Link>
  );
}
