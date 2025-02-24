import { useEffect, useState } from "react";
import Category from "../components/Category";
import Header from "../components/Header";
import Loader from "../components/Loader";
import style from "./Categories.module.css";

export default function Categories() {
    const [categorySelected, setCategorySelected] = useState('')
    // console.log(Boolean(categorySelected));
    
    
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            document.title = "HeroHub - Categorias";
        }, 1 * 1000);
    }, [setLoaded])

    if (loaded === false) {
        return <Loader/>
    }

    return (
        <div className={style.container}>
            <Header />
            <div className={style.content}>

                {/*                 
                Categorias
                <div className={style.categories}>
                    Categoria
                    <span className={style.category}>
                        <label>name</label>
                        <input
                            type="radio"
                            name="category"
                        />
                    </span>
                    Categoria
                    <span className={style.category}>
                        <label>name</label>
                        <input
                            type="radio"
                            name="category"
                        />
                    </span>
                    Categoria
                    <span className={style.category}>
                        <label>name</label>
                        <input
                            type="radio"
                            name="category"
                        />
                    </span>
                    Categoria
                    <span className={style.category}>
                        <label>name</label>
                        <input
                            type="radio"
                            name="category"
                        />
                    </span>
                </div> 
                */}

                {Boolean(categorySelected) === false &&
                    (<div className={style.catContainer}>
                        <Category
                            setter={setCategorySelected}
                            text='series'
                        />
                        <Category
                            setter={setCategorySelected}
                            text='filmes'
                        />
                        <Category
                            setter={setCategorySelected}
                            text='comics'
                        />
                        <Category
                            setter={setCategorySelected}
                            text='events'
                        />
                    </div>)
                }

                {categorySelected &&
                    (<div>
                        <h1>{categorySelected}</h1>
                    </div>)
                }

            </div>
        </div>
    )
}