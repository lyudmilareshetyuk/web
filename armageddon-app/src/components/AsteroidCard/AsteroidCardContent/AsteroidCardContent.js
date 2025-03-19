import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./AsteroidCardContent.module.css";
export const AsteroidCardContent = (props) => {
    const { name, date, distanceK, distanceL, size, distanceMode } = props;
    return (_jsxs("div", { children: [_jsx("div", { className: styles.contentName, children: name }), _jsxs("div", { className: styles.contentWrapper, children: [_jsx("div", { className: styles.contentDate, children: `Дата: ${date}` }), _jsx("div", { className: styles.contentDistance, children: distanceMode ? `Расстояние: ${distanceK} км` : `Расстояние: ${distanceL} лунных расстояний` }), _jsx("div", { className: styles.contentSize, children: `Размер: ${size} м` })] })] }));
};
