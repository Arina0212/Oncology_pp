// import Header from "../../components/header/header";

import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import UserBlock from "../../components/user-block/user-block";
import { getCopyright } from "../../store/copyright-process/selectors";
import { useAppSelector } from "../../components/hooks";



export default function CopyrightPage(){
    const copyright = useAppSelector(getCopyright);
    let text_warm = copyright.slice(0,copyright.indexOf(' '))
    let text_con = copyright.slice(copyright.indexOf(' ')+1)

    return(
        <>
            {/* <Header/> */}
            <header className="header">
                <Link to={AppRoute.Main} className="header__title">Le Ha Im</Link>

                <div className="header__links">
                    <Link to={`${AppRoute.Subjects}/${1}`} className="header__links-link">Область применения</Link>
                    <Link to={AppRoute.Copyright} className="header__links-link header__links-link_active">Авторские права</Link>
                </div>

                <UserBlock/>
            </header>
            <section className="copyright">
                <h3 className="copyright__warning">{text_warm}</h3>
                {text_con.split('\n').map((phrase) => (
                        <p className="copyright__text">{phrase}</p>
                    ))
                }
            </section>
        </>
    )
}
