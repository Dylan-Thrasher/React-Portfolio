import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Avatar.module.css'

export const Avatar = () => {
    return <section>
        <div>
            <h1>Hello, I'm Dylan Thrasher</h1>
            <p>I am a full-stack developer, newly graduated from UCF's full-stack bootcamp.</p>
            <a href="mailto:thrasher_dylan@yahoo.com" style={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('avatar/avatarImage.png')} alt="Image of Dylan's avatar" className={styles.avatarImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}