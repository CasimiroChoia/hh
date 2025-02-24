import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import Loader from "../components/Loader";
import SocialMedia from "../components/SocialMedia";
import { API_SEND_MESSAGE } from "../data/env";
import style from "./About.module.css";

export default function About() {
    const location = useLocation()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    let params = new URLSearchParams(location.search)
    let nome = params.get("nome");

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('enviando...')
        let data;
        let content = `Por HeroHub
        De ${name} (${email}).

        ${text}
        `
        try {
            const resp = await fetch(API_SEND_MESSAGE, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    to: '+244948409127',
                    text: content
                })
            })
            data = await JSON.parse(resp)
        } catch (error) {
            return console.error('Erro ao fazer o fetch... : ', error.message)
        }

        const modal = document.createElement('dialog')
        if (data.status === 201) {
            modal.insertAdjacentHTML('afterbegin', `
            <h1>sucesso</h1>
            <hr/>
            <p>
                A sua mensagem foi envaida com sucesso
            </p>
            <button>fechar</button>
            `)
            return modal.showModal()
        } else {
            modal.insertAdjacentHTML('afterbegin', `
            <h1>falha</h1>
            <hr/>
            <p>
                A sua mensagem não foi envaida com sucesso
            </p>
            <button>fechar</button>
            `)

        }
    }


    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            document.title = "HeroHub - Sobre";
        }, 1 * 1000);
    }, [setLoaded])

    if (loaded === false) {
        return <Loader />
    }

    return (
        <div className={style.container}>
            <Header />
            <div className={style.content}>
                <h1>Sobre</h1>
                <p>
                    Na <strong>HeroHub</strong>, acreditamos que cada fã merece entender a profundidade do universo Marvel. Criamos esta plataforma para ir além de sinopses superficiais: aqui, você descobre como o Tesseract conecta Capitão América a Thanos, por que o arco de <strong>‘</strong>Cavaleiro da Lua<strong>’</strong> redefine anti-heróis, ou qual vilão inspirou a jornada de Homem-Aranha nos quadrinhos. Combinamos curadoria especializada, design intuitivo e paixão pela narrativa para que você não apenas <strong>consuma</strong> conteúdo, mas <strong>viva</strong> a Marvel em todas as suas dimensões. Junte-se a nós e desvende os segredos do multiverso!
                </p>
                <h1>Nossa Missão</h1>
                <p>
                    Nossa missão é levar aos fãs do Universo Marvel uma experiência completa e imersiva, proporcionando acesso fácil e detalhado a informações sobre heróis, vilões, equipes e eventos icônicos das HQs, filmes e séries.
                </p>
                <p>
                    Acreditamos que cada personagem tem uma história única e fascinante, e nosso objetivo é reunir esses detalhes em um só lugar, tornando o conhecimento sobre o universo Marvel acessível para todos — desde fãs casuais até os mais dedicados colecionadores.
                </p>
                <p>
                    Com uma interface intuitiva e dados sempre atualizados, buscamos ser a fonte definitiva para quem deseja explorar o vasto e épico legado da Marvel.
                </p>
                <p>
                    Democratizar o acesso ao universo Marvel, transformando fãs e curiosos em verdadeiros conhecedores dos heróis, vilões e suas histórias. Através de informações detalhadas, curadas com precisão e paixão, nossa plataforma busca ser a fonte definitiva para explorar trajetórias, poderes, conexões e legados, garantindo que cada detalhe do multiverso Marvel esteja ao alcance de todos, de forma intuitiva, envolvente e gratuita.
                </p>
                {!nome && (
                    <>
                        <h1>Formulário</h1>
                        <p>
                            Abaixo dispomos para sí um formulário onde você é livre de opinar, apresentar a sua dúvida e apresentar a sua críticas para
                            que a HeroHub esteja mais proximo de sí como um super fã da Marvel que você é .
                        </p>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <fieldset className={style.fieldset}>
                                {/* <legend>Fale connosco</legend> */}
                                <div className={style.formBox}>
                                    <InputBox
                                        label="nome"
                                        type='text'
                                        placeholder='digite seu nome'
                                        setter={setName}
                                        value={name}
                                    />
                                    <InputBox
                                        label="email"
                                        type='email'
                                        placeholder='digite seu email'
                                        setter={setEmail}
                                        value={email}
                                    />
                                    <textarea
                                        name="contexto"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        className={style.textarea}
                                        placeholder="Escreva aqui..."
                                        min-length="8"
                                        required
                                    ></textarea>
                                </div>
                                <Button
                                    onClick={() => { }}
                                    type='submit'
                                    text="enviar"
                                />
                            </fieldset>
                        </form>
                    </>
                )}

                <h1>Acompanhe Nos</h1>
                <div className={style.social}>
                    <SocialMedia
                        image="/hh/img/facebook.png"
                        name="facebook"
                        link="https://www.facebook.com/profile.php?id=100076144901720"
                    />
                    <SocialMedia
                        image="/hh/img/whatsapp.png"
                        name="whatsapp"
                        link="https://wa.me/244948409127?text=Caro+ilustre+conta+me+mais+sobre+a+HeroHub..."
                    />
                    <SocialMedia
                        image="/hh/img/telegram.png"
                        name="telegram"
                        link="https://t.me/upcasi"
                    />
                </div>
            </div>
        </div>
    )
}
