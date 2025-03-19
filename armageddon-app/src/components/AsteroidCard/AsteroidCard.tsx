import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";
import { AsteroidCardImageDino } from "./AsteroidCardImage/AsteroidCardImageDino";
import styles from "./Card.module.css";

type AsteroidCardProps = {
  name: string;
  date: string;
  distanceK: number;
  distanceL: number;
  size: number;
  isDangerous: boolean;
  distanceMode: boolean;
}

export const AsteroidCard = (props: AsteroidCardProps) => {
  const { name, date, distanceK, distanceL, size, isDangerous, distanceMode } = props;

  return (<div className={styles.card}>
    <div className={isDangerous ? styles.cardRed : styles.cardConst}></div>
    <AsteroidCardImage />
    <AsteroidCardImageDino />
    <AsteroidCardContent name={name} date={date} distanceK={distanceK} distanceL={distanceL} size={size}
                         distanceMode={distanceMode} />
    <AsteroidCardAction isDangerous={isDangerous} />
  </div>);
};