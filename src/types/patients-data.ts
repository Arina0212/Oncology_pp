export type PatienSData = {
    first_name: string;
    last_name: string;
    patronymic: string;
    birth_date: string;
    diagnosis: string;
    region: string;
    diagnosis_comment: string;
    operation_comment: string;
    chemoterapy_comment: string;
  };

export type PatientSearchData = {
    first_name: string;
    last_name: string;
    patronymic: string;
    birth_date: string;
  };

  export type PatientSearchDataGet = {
    id: number;
    first_name: string;
    last_name: string;
    patronymic: string;
    birth_date: string;
  };

