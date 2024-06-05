export type AnalysisDateData = {
    patient_tests: [
        {
            id: number;
            analysis_date: string;
            tests: [
                {
                    id: number;
                    name: string;
                }
            ];
        }
    ];
};
export type AnalysDateData = {
    id: number;
    analysis_date: string;
    tests: [
        {
            id: number;
            name: string;
        }
    ];
};

export type AnalysNameDateData = {
    id: number;
    name: string;
};
