export type AnalysisDateData = {
    patient_tests: [
        {
            analysis_date: string,
            tests: [
                {
                    id: number
                    name: string
                }
            ]
        }
    ]
};
export type AnalysDateData = {
    analysis_date: string,
        tests: [
            {
                id: number
                name: string
            }
        ]
    };
export type AnalysNameDateData = {
    id: number
    name: string
};