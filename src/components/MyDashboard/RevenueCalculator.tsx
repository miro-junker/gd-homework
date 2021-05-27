import React, { useState } from "react";

interface IRevenueCalculator {
    data: any;
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
        .filter((item: string | null) => item !== null)
        .map((input: string) => Number(input));

    return (
        <div>
            <div>{getExtremeValue(modeState, allValues)}</div>
            <fieldset>
                <legend>Calculation selector</legend>
                <select value={modeState} onChange={event => setModeState(Number(event.target.value))}>
                    <option value={Mode.MAX_REVENUE}>Maximum Revenue across different products</option>
                    <option value={Mode.MIN_REVENUE}>Minimum Revenue across different products</option>
                </select>
            </fieldset>
        </div>
    );
};

export default RevenueCalculator;
