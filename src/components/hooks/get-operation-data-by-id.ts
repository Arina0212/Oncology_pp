import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from ".";
import { useEffect } from "react";
import { fetchPatientsRigthAction } from "../../store/api-actions";
import { getOperationData } from "../../store/patiens-process/selectors";

export default function usePatientOparationDataById() {
    const urlParams = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
      if ((urlParams.patid)) {
        dispatch(fetchPatientsRigthAction({id: Number(urlParams.patid)}));
      }
    }, [dispatch, Number(urlParams.patid)]);
    return useAppSelector(getOperationData);
  }