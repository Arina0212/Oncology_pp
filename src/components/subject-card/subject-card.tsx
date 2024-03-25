type SubjectCardProps ={
    subject_name: string;
}
export default function SubjectCard({subject_name}: SubjectCardProps){
    return(
        <><input className="visually-hidden" type="radio" name="usage" value="oncology" id="oncology-input"  />
        <label className="usage__btn" htmlFor="oncology-input" id="oncology-label">
            {subject_name}
        </label>
        </>
    )

}