import styles from "./AsteroidCardAction.module.css"

export const AsteroidCardAction = () => {
    return (<div>
        <div className={styles.actionGrade}>Оценка: опасен</div>
        <button style={{backgroundColor: "mediumspringgreen"}}className={styles.action}>
            <div className={styles.actionText} >На уничтожение</div>
        </button>
        </div>
    )
}