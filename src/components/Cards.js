import style from "./Cards.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { Suspense, useEffect, useState } from "react";
import image from "../img/main.png";

export const isOnline = () => navigator.onLine === true


export default function HeroCard({ hero, index }) {
    const navigate = useNavigate()
    const [loadError, setLoadError] = useState(false)

    const normalizeName = (name) => {
        if (name.length > 7) {
            return name.slice(0, 10) + "..."
        } else {
            return name
        }
    }

    useEffect(() => {


    }, [])

    return (
        <Suspense fallback={<Loader />}>
            <div className={style.herocard} style={{ '--timing': index + 's' }} key={index}>
                {
                    loadError === false
                        ? <img
                            onLoad={(e) => {

                            }}
                            onError={() => setLoadError(false)}
                            src={!isOnline() ? image : `${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                            alt={hero.name}
                            className={style.img}
                        />
                        : <svg
                            version="1.0"
                            className={style.img}
                            xmlns="http://www.w3.org/2000/svg"
                            width="150px"
                            height="150px"
                            viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M3935 4736 c-65 -28 -60 105 -65 -1624 l-5 -1575 -157 174 -157 174 -1 953 c0 1025 1 999 -51 1036 -21 14 -66 16 -379 16 -383 0 -382 0 -412 -53 -10 -16 -14 -142 -18 -502 l-5 -480 -788 881 c-433 485 -799 886 -813 893 -81 37 -172 -40 -144 -124 7 -20 246 -296 649 -746 l639 -714 -324 -5 -324 -5 -27 -28 -28 -27 0 -900 0 -900 28 -27 27 -28 360 -3 359 -3 33 30 33 29 5 852 5 851 158 -175 157 -176 0 -655 c0 -719 -1 -709 59 -739 44 -23 697 -24 741 -1 50 26 55 45 60 244 l5 184 156 -174 c86 -96 159 -185 163 -197 4 -12 28 -38 52 -59 25 -20 188 -195 361 -389 212 -237 325 -356 345 -363 68 -24 138 26 138 99 0 46 -1 47 -313 395 l-216 240 209 5 210 5 27 28 28 27 3 1741 c2 1931 7 1785 -63 1815 -48 20 -675 20 -720 0z m573 -1803 l-3 -1598 -212 -3 -213 -2 0 1600 0 1600 215 0 215 0 -2 -1597z m-1178 -25 c0 -759 0 -772 -19 -753 -10 11 -105 116 -210 234 l-191 214 0 539 0 538 210 0 210 0 0 -772z m-1170 -828 l0 -750 -212 2 -213 3 -3 735 c-1 404 0 741 3 748 3 9 56 12 215 12 l210 0 0 -750z m1012 -90 l158 -175 0 -242 0 -243 -210 0 -210 0 0 477 0 477 53 -59 c28 -33 123 -138 209 -235z" />
                                <path d="M414 2176 c-66 -29 -64 -12 -64 -524 l0 -464 34 -34 35 -35 360 3 361 3 27 28 28 27 3 460 c3 512 3 508 -63 536 -49 20 -675 20 -721 0z m574 -523 l-3 -318 -212 -3 -213 -2 0 320 0 320 215 0 215 0 -2 -317z" />
                            </g>
                        </svg>
                }
                <p translate="no" className={style.p}>
                    {normalizeName(hero.name)}<br />
                </p>
                <Button
                    text='ver mais'
                    onClick={(e) => navigate(
                        '/home/herodetail/'+hero.id,
                        {
                            state: hero,
                            viewTransition: true,
                            replace: false,
                            preventScrollReset: true
                        }
                    )}
                />
            </div >
        </Suspense>
    )
}