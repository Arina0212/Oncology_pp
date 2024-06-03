//import { Link } from "react-router-dom"
import Header from "../../components/header/header"
//import { AppRoute } from "../../const"
import MainButton from "../../components/main-button/main-button"
import { useAppSelector } from "../../components/hooks";
import { getAuthorizationStatus } from "../../store/user-process/selectors";


export default function MainPage(){
    const authorizationStatus = useAppSelector(getAuthorizationStatus);

    return(
        <>
        <Header/>
            <section className="main">
                <h1 className="main__title">Le Ha Im</h1>

                {/* <Link to={AppRoute.Search} className="main__btn">Калькулятор иммунодефицита и регенерации</Link> */}
                <MainButton authorizationStatus={authorizationStatus}/>
            </section>
        </>
    )
}