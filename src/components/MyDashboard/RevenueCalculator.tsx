import { DataViewFacade } from "@gooddata/sdk-ui";
import React, { useState } from "react";
import styles from "./RevenueCalculator.module.scss";
interface IRevenueCalculator {
    data: DataViewFacade;
}

enum Mode {
    MAX_REVENUE,
    MIN_REVENUE,
}

const DEFAULT_MODE = Mode.MAX_REVENUE;

const getExtremeValue = (mode: Mode, values: number[]): string => {
    if (!values.length) {
        return "N/A";
    }
    if (mode === Mode.MAX_REVENUE) {
        return String(Math.max(...values));
    }
    return String(Math.min(...values));
};

const RevenueCalculator: React.FC<IRevenueCalculator> = ({ data }) => {
    const [modeState, setModeState] = useState(DEFAULT_MODE);

    const allValues = data.dataView.data
        .flat()
        .filter(item => typeof item === "string")
        .map(input => Number(input));

    return (
        <div className={styles.root}>
            <h2 className={styles.value}>{getExtremeValue(modeState, allValues)}</h2>

            <fieldset className={styles.form}>
                <legend>Calculation selector</legend>
                <select
                    className={styles.select}
                    value={modeState}
                    onChange={event => setModeState(Number(event.target.value))}
                >
                    <option value={Mode.MAX_REVENUE}>Maximum Revenue across different products</option>
                    <option value={Mode.MIN_REVENUE}>Minimum Revenue across different products</option>
                </select>
            </fieldset>
        </div>
    );
};

export default RevenueCalculator;
