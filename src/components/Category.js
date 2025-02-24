import style from "./Category.module.css";

export default function Category({ img, setter, text }) {


    return (
        <div className={style.container} onClick={() => setter(text)}>
            <h1>{text}</h1>
        </div>
    )
}