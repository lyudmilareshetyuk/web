import styles from "./AsteroidCardContent.module.css"

export const AsteroidCardContent = (props) => {
    const{name, date, distance, size} = props;



    return (<div>
        <div className={styles.contentName}>{name}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>
            <div className={styles.contentDistance}>
                {`Расстояние: ${distance.kilometers} км`}
            </div>
            <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
        </div>
        </div>
    )
}