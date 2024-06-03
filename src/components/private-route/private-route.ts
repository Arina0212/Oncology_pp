// import { useNavigate } from 'react-router-dom';
// import { AppRoute, AuthorizationStatus } from '../../const';

// type PrivateRouteProps = {
//   authorizationStatus: AuthorizationStatus;
//   children: JSX.Element;
// }

// export default function PrivateRoute (props: PrivateRouteProps){
//     const {authorizationStatus, children} = props;
//     const navigate = useNavigate()
//     if(authorizationStatus === AuthorizationStatus.Auth){
//         return (
//             children
//         )
//     }else{
//         return (
//         navigate(AppRoute.Login)
//         )
//     }
// }
