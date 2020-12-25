import React from 'react'
import style from './main.module.scss'

export const Main = () => {
    return<>
    <section className={style.main}>
        <h1 className={style.title}>
        Falcon 1
        </h1>
        <div className={style.video__container}>
        <video className={style.video} autoPlay loop muted src="./video/moon.mp4"></video>
        </div>
    </section>
    </>
}