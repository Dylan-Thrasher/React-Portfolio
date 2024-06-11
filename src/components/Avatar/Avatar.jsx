import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Avatar.module.css'

export const Avatar = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Dylan Thrasher</h1>
            <p className={styles.description}>I am a full-stack developer, newly graduated from UCF's full-stack bootcamp.</p>
            {/* the link forces an email provider to open */}
            <a href="mailto:thrasher_dylan@yahoo.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('avatar/avatarImage.png')} alt="Image of Dylan's avatar" className={styles.avatarImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}