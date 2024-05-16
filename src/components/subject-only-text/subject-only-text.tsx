// import React, { useEffect } from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// import usePatientById from '../hooks/get-patient-by-id';
// import { useAppDispatch, useAppSelector } from '../hooks';
// import { getGrafic, getPatientAnalys } from '../../store/patiens-process/selectors';
// import { fetchGraficAction } from '../../store/api-actions';
// import { useParams } from 'react-router-dom';
// import { humanizeDate } from '../../utils/change-data-formats';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });


// // Create Document Component
// export default function MyDocument(){
//     const urlParams = useParams();

//     const analysData = useAppSelector(getPatientAnalys)
//     const patient_data = usePatientById();
//     const dispatch = useAppDispatch();


//     useEffect(()=> {
//         dispatch(fetchGraficAction({id: Number(urlParams.analysisid)}))
//     },[dispatch])

//     const grafics = useAppSelector(getGrafic)

//     return(
//   <Document >
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text><h2 className="graphs__text">Информациая о пациенте:</h2>
//                 <p className="graphs__name">{patient_data?.last_name} {patient_data?.first_name} {patient_data?.patronymic}</p>
//                 <div className="graphs__info">
//                     <h3 className="graphs__info-diagnose">Диагноз: {patient_data?.diagnosis}</h3>
//                     <p className="graphs__info-date">Дата исследования: {humanizeDate(analysData?.analysis_date)}</p>
//                 </div></Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #23333</Text>
//       </View>
//     </Page>
//   </Document>
//     )
// };