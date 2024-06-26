import React from "react";
import skills from '../../data/skills.json'
import {getImageUrl} from '../../utils'
import history from '../../data/history.json'
import styles from './Resume.module.css'

export const Resume = () => {
    return (
        <section className={styles.container} id="resume">
            <h2 className={styles.title}>Resume</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                     skills.map((skill,id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                        </div>
                     })   
                        }</div>
                    <ul className={styles.history}>
                        {/* the below generates history by what is provided in the json */}
                        {
                            history.map((historyItem, id) => {
                                return <li key={id} className={styles.historyItem}>
                                    <img src={getImageUrl(historyItem.imageSrc)} 
                                    alt={`${historyItem.organisation} Logo`} />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>{historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>
                                        })}</ul>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                
            </div>
        </section>
    )
}