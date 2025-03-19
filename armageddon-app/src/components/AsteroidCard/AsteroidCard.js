import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";
import { AsteroidCardImageDino } from "./AsteroidCardImage/AsteroidCardImageDino";
import styles from "./Card.module.css";
export const AsteroidCard = (props) => {
    const { name, date, distanceK, distanceL, size, isDangerous, distanceMode } = props;
    return (_jsxs("div", { className: styles.card, children: [_jsx("div", { className: isDangerous ? styles.cardRed : styles.cardConst }), _jsx(AsteroidCardImage, {}), _jsx(AsteroidCardImageDino, {}), _jsx(AsteroidCardContent, { name: name, date: date, distanceK: distanceK, distanceL: distanceL, size: size, distanceMode: distanceMode }), _jsx(AsteroidCardAction, { isDangerous: isDangerous })] }));
};
