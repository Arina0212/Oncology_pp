type PostAnalyses = {
    analysis_date:	string
    test:	[{
        name:	string
        analysis:	[{
            value:	string
            indicator_name:	string
        }]
    }]
    patient_id:	number
}
