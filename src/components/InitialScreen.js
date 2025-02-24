import { useNavigate } from 'react-router-dom';
import style from './InitialScreen.module.css';
import main from './../img/main.jpg'
import Button from './Button';

export default function InitialScreen() {

    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <div>
                <img className={style.img} src={main} alt='logo do HeroHub' />
            </div>


            <div className={style.btnContainer}>
                <div className={style.texts} >
                    <h1>HeroHub</h1>
                    <p>o universo da Marvel na palma da sua mão</p>
                </div>

                <Button
                    text='Começar'
                    styled={style.button}
                    onClick={() => navigate('/home', { replace: true, viewTransition:true })}
                />
                <Button
                    text='sair'
                    styled={style.button}
                    onClick={() => window.close()}
                />
            </div>
        </div>
    )
}