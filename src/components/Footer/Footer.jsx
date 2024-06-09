import React from "react";
import styles from './Footer.module.css'
import {getImageUrl} from '../../utils'

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2 id="footer" >Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
                    <a href="mailto:thrasher_dylan@yahoo.com">thrasher_dylan@yahoo.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon" />
                    <a href="https://www.linkedin.com/in/dylan-thrasher">linkedin.com/in/dylan-thrasher</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                    <a href="https://github.com/Dylan-Thrasher">github.com/Dylan-Thrasher</a>
                </li>
            </ul>
        </footer>
    )
}