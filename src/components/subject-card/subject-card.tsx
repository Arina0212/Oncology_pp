import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import classNames from "classnames";

type SubjectCardProps ={
    id: number;
    subject_name: string;
}

export default function SubjectCard({id, subject_name}: SubjectCardProps){
    let usageBtns = document.querySelectorAll('.usage__btns-btn')
    let usageTexts = document.querySelectorAll('.usage__contents-content')

    for (let i = 0; i < usageBtns.length; i++){
        usageBtns[i].addEventListener('click', () => {
            Array.from(usageTexts).forEach( btn => btn.classList.remove("usage__contents-content_active"))
            usageTexts[i].classList.toggle("usage__contents-content_active")
        })
    }
    return(
        <>
            <Link to={`${AppRoute.Subjects}/${id}`} >
                <div className="usage__btns-btn">{subject_name}</div>
            </Link>            
        </>
    )
}