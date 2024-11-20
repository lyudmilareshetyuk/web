import styles from "./AsteroidCardAction.module.css"

export const AsteroidCardAction = ({isDangerous}) => {
    return (<div>
        <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? `опасен`: `не опасен`}`}</div>
        <button style={{backgroundColor: "mediumspringgreen"}} className={styles.action}>
            <div className={styles.actionText} >На уничтожение</div>
        </button>
        </div>
    )
}