import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { getCurrentSubject } from '../../store/subjects-process/selectors';
import { fetchSubjectTextAction } from '../../store/api-actions';

export default function useSubjectById() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();
  //console.log("по id")
  useEffect(() => {
    if ((urlParams.id)) {
      dispatch(fetchSubjectTextAction({id: Number(urlParams.id)}));
      console.log(Number(urlParams.id))
    }
  }, [dispatch, Number(urlParams.id)]);
  return useAppSelector(getCurrentSubject);
}
