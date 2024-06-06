export type PatienInfoData = {
    id: number;
    first_name: string;
    last_name: string;
    patronymic: string;
    birth_date: string | undefined;
    diagnosis: string | undefined;
    region: string | undefined;
    diagnosis_comment: string | undefined;
    operation_comment: string | undefined;
    chemoterapy_comment: string | undefined;
  };

  export type PatienInfoRightBlockData = {
    id: number;
    diagnosis: string | undefined;
    diagnosis_comment: string | undefined;
    operationData: string | undefined;
    operation_comment: string | undefined;
    isChemoterapy: string | undefined;
    chemoterapy_comment: string | undefined;
  };
