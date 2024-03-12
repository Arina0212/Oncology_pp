import SignInPopup from "../../components/sign-in-popup/sign-in-popup"

export default function MainPage(){
    return(
        <>
            <header className="header">
                <p className="header__title">Le Ha Im</p>

                <div className="header__links">
                    <a href="" className="header__links-link">Область применения</a>
                    <a href="" className="header__links-link">Авторские права</a>
                </div>
                <SignInPopup/>
        </header>
        </>
    )
}