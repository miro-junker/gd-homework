import React, { useState } from "react";

interface IRevenueCalculator {
    data: any;
}

enum Mode {
    MAX_REVENUE,
    MIN_REVENUE,
}

const DEFAULT_MODE = Mode.MAX_REVENUE;

const RevenueCalculator: React.FC<IRevenueCalculator> = ({ data }) => {
    console.log("RevenueCalculator data", data);

    const [modeState, setModeState] = useState(DEFAULT_MODE);

    return (
        <div>
            <fieldset>
                <legend>Calculation selector</legend>
                <select onChange={event => setModeState(Number(event.target.value))}>
                    <option value={Mode.MAX_REVENUE} selected={modeState === Mode.MAX_REVENUE}>
                        Maximum Revenue across different products
                    </option>
                    <option value={Mode.MIN_REVENUE} selected={modeState === Mode.MIN_REVENUE}>
                        Minimum Revenue across different products
                    </option>
                </select>
            </fieldset>
        </div>
    );
};

export default RevenueCalculator;
