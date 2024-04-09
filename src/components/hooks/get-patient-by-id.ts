import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFullPatientInfoAction } from '../../store/api-actions';
import { getCurrentPatient } from '../../store/patiens-process/selectors';

export default function usePatientById() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();
  console.log("по id")
  useEffect(() => {
    if ((urlParams.id)) {
      dispatch(fetchFullPatientInfoAction({id: Number(urlParams.id)}));
      console.log(Number(urlParams.id))
    }
  }, [dispatch, Number(urlParams.id)]);
  console.log("из хука ",useAppSelector(getCurrentPatient))

  return useAppSelector(getCurrentPatient);
}
