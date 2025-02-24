import style from './Button.module.css'

const Button = ({ text, onClick, styled }) => {

    const handleClick = () => {
        alert(text)
    }

    return <button className={styled ?? style.button} onClick={onClick ?? handleClick}>{text}</button>
}

export default Button;