import { Link } from "react-router-dom"
import UserBlock from "../user-block/user-block"
import { AppRoute } from "../../const"


export default function Header(){

    return(
        <>
            <header className="header">
                <Link to={AppRoute.Main}><p className="header__title">Le Ha Im</p></Link>
                <div className="header__links">
                    <Link to={`${AppRoute.Subjects}/${1}`} className="header__links-link">Область применения</Link>
                    <Link to={AppRoute.Copyright} className="header__links-link">Авторские права</Link>
                </div>
                <UserBlock/>
            </header>
        </>
    )
}