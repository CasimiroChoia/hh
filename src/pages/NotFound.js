import Button from '../components/Button'
import Header from '../components/Header'
import style from './Notfound.module.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div>
            <Header />
            <div className={style.errorContent}>
                <h1>404</h1>
                <p>Página não encontrada</p>
                <p>URL incorreta</p>
                <Button
                    onClick={() => navigate('/home',{replace:true})}
                    text='menu principal'
                />
            </div>
        </div>
    )
}