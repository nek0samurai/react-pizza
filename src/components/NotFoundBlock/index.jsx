import React from "react";
import style from './NotFoundBlock.module.scss'


const NotFoundBlock = () => {
    return (
        <div className={style.root}>
            <h1 >Ничего не найдено</h1>
            <span className={style.smile}>:(</span>
            <p className={style.desc}>Nfrjq sdlflskdf sdliwef sdlfi</p>
        </div>
    )
}

export default NotFoundBlock