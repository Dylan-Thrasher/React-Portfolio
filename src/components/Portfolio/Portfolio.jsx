import React from "react";
import projects from '../../data/projects.json'
import { PortfolioCard } from "./PortfolioCard";
import styles from './Portfolio.module.css'

export const Portfolio = () => {
    return <section className={styles.container} id="portfolio">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {/* the below generates portfolio project cards based on the json */}
            {
                projects.map((project, id) => {
                    return (
                        <PortfolioCard key={id} project={project}/>
                    )
                })
            }
        </div>
    </section>
}