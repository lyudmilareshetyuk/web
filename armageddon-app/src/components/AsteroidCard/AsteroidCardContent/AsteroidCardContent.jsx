import styles from "./AsteroidCardContent.module.css"

export const AsteroidCardContent = () => {
    return (<div>
        <div className={styles.contentName}>Первый</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>Дата 20 ноября 2024 года</div>
            <div className={styles.contentDistance}>
                Расстояние 100008227 км
            </div>
            <div className={styles.contentSize}>Размер: 1000 м</div>
        </div>
        </div>
    )
}