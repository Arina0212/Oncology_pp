import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type SubjectCardProps ={
    id: number;
    subject_name: string;
}

export default function SubjectCard({id, subject_name}: SubjectCardProps){

    return(
        <>  
            <Link to={`${AppRoute.Subjects}/${id}` } >
                <input className="visually-hidden"  type="radio" name="usage" value={`${id}`} id={`${id}-input`}/>
                <label className="usage__btns-btn" htmlFor={`${id}-input`} id={`${id}-lable`}>{subject_name}</label>
            </Link> 
        </>
    )
}