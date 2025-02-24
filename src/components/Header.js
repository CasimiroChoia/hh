import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

export default function Header() {
    const [showNavbar, setShowNavbar] = useState(false)



    return (
        <header className={style.header}>
            <h1 className={style.title}>HeroHub</h1>
            <nav className={`${style.navbar} ${showNavbar === false ? style.hide : style.show}`}>
                <Link
                    to="/home"
                    onClick={() => setShowNavbar(false)}
                    viewTransition
                    replace
                >casa</Link>

                <Link
                    to="/home/alphabet"
                    onClick={() => setShowNavbar(false)}
                    viewTransition
                    replace
                >alfabeto</Link>

                {/* <Link
                    to="/home/categories"
                    onClick={() => setShowNavbar(false)}
                    viewTransition
                    replace
                >categorias</Link> */}

                <Link
                    to="/home/about"
                    onClick={() => setShowNavbar(false)}
                    viewTransition
                    replace
                >sobre</Link>
            </nav>
            <div className={`${style.hamburguer} ${showNavbar ? style.opened : ""}`} onClick={() => setShowNavbar(!showNavbar)}></div>
        </header>
    )
}