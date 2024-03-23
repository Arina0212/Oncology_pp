// import Header from "../../components/header/header";

import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import UserBlock from "../../components/user-block/user-block";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, State } from "../../types/state";
import { getCopyright } from "../../store/copyright-process/selectors";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export default function CopyrightPage(){
    const copyright__text = useAppSelector(getCopyright);
    const dispatch = useAppDispatch();


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
                    {copyright__text}
                </p>
            </section>
        </>
    )
}
