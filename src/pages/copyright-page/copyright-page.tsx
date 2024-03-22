// import Header from "../../components/header/header";

import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import UserBlock from "../../components/user-block/user-block";

export default function CopyrightPage(){
    return(
        <>
            {/* <Header/> */}
            <header className="header">
                <Link to={AppRoute.Main} className="header__title">Le Ha Im</Link>

                <div className="header__links">
                    <Link to={AppRoute.Usage} className="header__links-link">Область применения</Link>
                    <Link to={AppRoute.Copyright} className="header__links-link header__links-link_active">Авторские права</Link>
                </div>

                <UserBlock/>
            </header>
            <section className="copyright">
                <h3 className="copyright__warning">Внимание!</h3>

                <p className="copyright__text">
                    Данный сервис является объектом интеллектуальной собственности и охраняется законом.
                    <br>
                    </br>
                    Любое использование содержимого третьими лицами возможно только с письменного разрешения владельца.
                </p>
            </section>
        </>
    )
}