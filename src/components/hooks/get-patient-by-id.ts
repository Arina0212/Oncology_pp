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
    if ((urlParams.patid)) {
      dispatch(fetchFullPatientInfoAction({id: Number(urlParams.patid)}));
      console.log(Number(urlParams.patid))
    }
  }, [dispatch, Number(urlParams.patid)]);
  console.log("из хука ",useAppSelector(getCurrentPatient))

  return useAppSelector(getCurrentPatient);
}
