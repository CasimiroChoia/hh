import style from "./SocialMedia.module.css"

export default function SocialMedia({ image, name, link }) {


    return (
        <a
            target='_blank'
            rel='noreferrer'
            href={link}
            className={style.media}
        >
            <img
                src={image ?? '/herohub/logo192.png'}
                alt={name}
                title={name}
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
            />
            <span className={style["label"]}>{name}</span>
        </a>
    )
}