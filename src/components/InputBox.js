import style from "./InputBox.module.css"

export default function InputBox({
    label,
    type,
    placeholder,
    setter,
    value
}) {


    return (
        <div>
            {/* <label className={style.label}>{label || "label Vazia"}</label><br /> */}
            <input
                name={label}
                value={value}
                type={type || "text"}
                className={style.input}
                placeholder={placeholder || label + "..."}
                onChange={(e) => setter(e.target.value)}
                min-length={(type === "text") ? "6" : "1"}
                required
            />
        </div>
    )
}