import { Link } from "react-router-dom"
import { AppRoute } from "../../const"


export default function Header(){

    return(
        <>
            <header className="header">
                <p className="header__title">Le Ha Im</p>
                <div className="header__links">
                    <Link to="" className="header__links-link">Область применения</Link>
                    <Link to="" className="header__links-link">Авторские права</Link>
                </div>
                <Link className="header__enter" to={AppRoute.Login}>Войти</Link>
            </header>
        </>
    )
}