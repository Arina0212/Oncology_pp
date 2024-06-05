export type AnalysComparisonData ={
    analysis: [
        {
            name: string;
            value:number;
            avg_prev_value: number;
            interval_min: number;
            interval_max: number;
            unit: string;
            changes: number;
        }
    ];
}

export type AnalysComparison = {
    name: string;
            value:number;
            avg_prev_value: number;
            interval_min: number;
            interval_max: number;
            unit: string;
            changes: number;
}
