import style from "./Box.module.css"
import { useNavigate } from "react-router-dom"

export default function Box({
    name,
    link,
    key,
    i
}) {
    const navigate = useNavigate()
    return (
        <div
            key={key}
            className={style.container}
            onClick={() => navigate("/hh", { replace: false, state: link })}
        >
            <h4>{i+1} - {name}</h4>
        </div>
    )
}