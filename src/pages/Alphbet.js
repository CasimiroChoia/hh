import { useEffect, useState } from "react";
import HeroCard from "../components/Cards";
import Header from "../components/Header";
import Loader from "../components/Loader";
import style from "./Alphbet.module.css";
import { heros } from "./Home";

export default function Alphabet() {

    let oldAlfa = new Set()
    heros.forEach(element => {
        oldAlfa.add(element.name[0].toUpperCase())
    })
    let alfa = Array.from(oldAlfa)
    alfa.sort((a, b) => {
        let c = a.toLowerCase()
        let d = b.toLowerCase()
        if (c > d) return 1
        if (c < d) return -1
        return 0
    })


    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            document.title = "HeroHub - Alfatebo";
        }, 1 * 1000);
    }, [setLoaded])

    if (loaded === false) {
        return <Loader />
    }

    return (
        <div className={style.container}>
            <Header key={Math.floor(10 * Math.random())} />
            <div className={style.content}>

                {alfa.map((inicial, index) => {
                    let thiskey = index;
                    // criando os separadores
                    return (
                        <>
                            <details className={style.detail} style={{ '--timing': index + "00ms" }} key={thiskey}>
                                <summary className={style.inicial} key={thiskey}>{inicial}</summary>

                                <div className={style.cards} key={thiskey}>
                                    {
                                        // vai filtrar todos os herois para que tenhão uma inicial igual e depois vai mapear cada retornando os seus devidos cards
                                        heros.filter(hero => hero.name[0].toLowerCase() === inicial.toLowerCase()).map((heroi, index) => {
                                            let thiskey = index;
                                            return (
                                                <HeroCard
                                                    hero={heroi}
                                                    key={thiskey}
                                                    index={index}
                                                />
                                            )
                                        })
                                    }
                                </div>

                            </details>
                        </>
                    )
                })}
            </div>
        </div>
    )
}