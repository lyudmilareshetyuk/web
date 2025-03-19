import styles from "./AsteroidCardContent.module.css";

type AsteroidCardContentProps = {
  name: string;
  date: string;
  distanceK: number;
  distanceL: number;
  size: number;
  distanceMode: boolean;
}

export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
  const { name, date, distanceK, distanceL, size, distanceMode } = props;

  return (<div>
      <div className={styles.contentName}>{name}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentDate}>{`Дата: ${date}`}</div>
        <div className={styles.contentDistance}>
          {distanceMode ? `Расстояние: ${distanceK} км` : `Расстояние: ${distanceL} лунных расстояний`}
        </div>
        <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
      </div>
    </div>
  );
};