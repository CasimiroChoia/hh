import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Box from "../components/Box";
import { isOnline } from "../components/Cards";
import style from "./HeroDetails.module.css";
import image from "../img/main.png";
import { heros } from "./Home";

export default function HeroDetails() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    const [loaded, setLoaded] = useState(false)
    let hero;

    if (location.state) {
        hero = location.state;
    } else {
        hero = heros.find(hero => hero.id.toString() === params.id);
    }

    if (Boolean(hero) === false) navigate("notfound");

    useEffect(() => {
        setTimeout(() => setLoaded(true), .5 + 1000)
        document.title = "HeroHub - " + hero.name;
    }, [setLoaded, hero])

    if (loaded === false) {
        return <Loader />
    }

    const get = (type) => {
        let modified = hero.modified.split('T')
        let data = modified[0]
        let time = modified[1].split('-')[0]

        if (type === 'data') return data;
        if (type === 'time') return time;
    }

    let thisComics = hero.comics;
    let thisSeries = hero.series;
    let thisStories = hero.stories;
    let thisEvents = hero.events;
    return (
        <div
            className={style.container}
        >
            <Header />
            <Button
                text='voltar'
                onClick={() => navigate('/home')}
            />
            {hero
                ? <div className={style.content}>
                    <div className={style.img} >
                        <img
                            draggable={false}
                            src={isOnline() === true ? `${hero.thumbnail.path}.${hero.thumbnail.extension}` : image}
                            alt='heroi'
                        />
                    </div>
                    <div className={style.texts}>
                        <p>ID: {hero.id}</p>
                        <p translate="no">Nome: {hero.name}</p>
                        <p translate="yes" lang="en" prefix="edsfsd">Descrição: {hero.description || <span style={{ color: "rgba(255,0,0,0.4)" }}>sem descrição</span>}</p>
                        <p>Modificado em {`${get('data')} às ${get('time')}`}</p>
                        {/* SERIES */}
                        <details className={`${style.detail}`}>
                            <summary>Series de {hero.name} ({thisSeries.available})</summary>
                            <div
                                className={style.boxes}
                            >
                                {thisSeries.items.map((target, index) => {
                                    // console.log(serie);
                                    return <Box
                                        name={target.name}
                                        link={target.resourceURI}
                                        key={index}
                                        i={index}
                                    />
                                })}
                            </div>

                        </details>

                        {/* EVENTOS */}
                        <details className={`${style.detail}`}>
                            <summary>Eventos de {hero.name} ({thisEvents.available})</summary>
                            <div
                                className={style.boxes}
                            >
                                {thisEvents.items.map((target, index) => {
                                    // console.log(serie);
                                    return <Box
                                        name={target.name}
                                        link={target.resourceURI}
                                        key={index}
                                        i={index}
                                    />
                                })}
                            </div>

                        </details>

                        {/* HISTORIAS */}
                        <details className={`${style.detail}`}>
                            <summary>Historias de {hero.name} ({thisStories.available})</summary>
                            <div
                                className={style.boxes}
                            >
                                {thisStories.items.map((target, index) => {
                                    // console.log(serie);
                                    return <Box
                                        name={target.name}
                                        link={target.resourceURI}
                                        key={index}
                                        i={index}
                                    />
                                })}
                            </div>

                        </details>
                        {/* COMICOS */}
                        <details className={`${style.detail}`}>
                            <summary>Comicos de {hero.name} ({thisComics.available})</summary>
                            <div
                                className={style.boxes}
                            >
                                {thisComics.items.map((target, index) => {
                                    // console.log(serie);
                                    return <Box
                                        name={target.name}
                                        link={target.resourceURI}
                                        key={index}
                                        i={index}
                                    />
                                })}
                            </div>

                        </details>
                    </div>
                </div>
                // caso o sistema não reconhecer o heroi
                : <div className={style.error}>
                    <h2>infelizmente não foi possivel efectuar o seu pedido</h2>
                </div>
            }
        </div>
    )
}