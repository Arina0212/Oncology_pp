import useSubjectById from "../hooks/get-subject-by-id";


export default function SubjectText(){
    const film = useSubjectById();

    console.log('страница c текстом по областям ')

    return(
        <>
        <div className="usage__contents">
            <div className="usage__contents-content usage__contents-content_active" id="usage-content">
            <h3 className="usage__contents-content-title">{film?.subject_name}</h3>
                <p className="usage__contents-content-text">
                    {film?.subject_text}
                </p>
        </div>
        </div>
        </>
    )
}
