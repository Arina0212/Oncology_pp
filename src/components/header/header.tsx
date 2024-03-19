import { Link } from "react-router-dom"
import UserBlock from "../user-block/user-block"


export default function Header(){

    return(
        <>
            <header className="header">
                <p className="header__title">Le Ha Im</p>
                <div className="header__links">
                    <Link to="" className="header__links-link">Область применения</Link>
                    <Link to="" className="header__links-link">Авторские права</Link>
                </div>
                <UserBlock/>
            </header>
        </>
    )
}