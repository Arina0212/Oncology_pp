import { Link } from "react-router-dom"
import Header from "../../components/header/header"


export default function MainPage(){

    return(
        <>
        <Header/>
            <section className="main">
                <h1 className="main__title">Le Ha Im</h1>

                <Link to="" className="main__btn">Калькулятор иммунодефицита и регенерации</Link>
            </section>
        </>
    )
}