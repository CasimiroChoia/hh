import Header from "../components/Header";
import style from "./Home.module.css";
import { useState, useEffect } from "react";
import Marvel from "../data/data.json";
import HeroCard from "../components/Cards";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";

export const heros = Marvel.data.results

// const d = Marvel.data.results
export default function Home() {
    const [search, setSearch] = useState("")
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const searchName = params.get("searchName")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('sem metodo de submissão')
        
        return null
    }

    // const isFirstPage =()=>{
    //     return window.performance && window.performance.getEntriesByType('navigation')[0]?.type === "navigate";
    //   }
    //   console.log(isFirstPage()+'')
    
    
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 1 * 1000);
        document.title = "HeroHub - Casa";
    }, [setLoaded])

    if (loaded === false) {
        return <Loader/>
    }

    return (
        <div className={style.container}>
            <Header />
            <form name="searchBar" className={style.searchBar} onSubmit={() => handleSubmit}>
                <div className={style.inputBox}>
                    <input
                        value={search}
                        list="heros"
                        name="searchName"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Pesquise..."
                        type='search'
                        autoComplete='false'
                        autoSave='false'
                    />
                    <input
                        value='enviar'
                        type='submit'
                        disabled={(search || Boolean(searchName)) ? false : true}
                    />
                </div>
            </form>
            <datalist id="heros">
                {heros.map((value, index) => <option key={index}>{value.name}</option>)}
            </datalist>
            <div className={style.content}>
                {heros.filter((hero) => {
                    // se a pesquisa nao for vazia e o inicio do nome do heroi corresponder a pesquisa executa
                    if (searchName && hero.name.toLowerCase().startsWith(searchName.toLowerCase())) {
                        return hero;
                    }

                    // se a pesquisa nao for vazia ele retorna todos os herois
                    else if (searchName === "" || Boolean(searchName) === false) {
                        return hero
                    }

                    return false
                }).map((hero, index) => {
                    return (
                        <HeroCard
                            hero={hero}
                            key={index}
                            index={index}
                        />
                    )

                })}
                {/* <Loader /> */}
            </div>
        </div>
    )
}