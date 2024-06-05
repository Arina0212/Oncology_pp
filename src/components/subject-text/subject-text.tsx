import useSubjectById from '../hooks/get-subject-by-id';


export default function SubjectText(){
  const subject_data = useSubjectById();
  console.log(subject_data?.subject_text?.split('\\n'));
  return(
    <div className="usage__contents">
      <div className="usage__contents-content usage__contents-content_active" id="usage-content">
        <h3 className="usage__contents-content-title">{subject_data?.subject_name}</h3>
        <div >
          {subject_data?.subject_text?.split('\n')?.map((subject) => (
            <p key={subject} className="usage__contents-content-text">{subject}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
