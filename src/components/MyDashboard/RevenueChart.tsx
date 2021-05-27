import React from "react";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { INullableFilter } from "@gooddata/sdk-model";

import { DateDatasets, Product, Revenue } from "../../ldm/full";
interface IRevenueChart {
    filters: INullableFilter[];
}

const chartStyle = { height: 300 };

const RevenueChart: React.FC<IRevenueChart> = props => {
    return (
        <div style={chartStyle} className="s-line-chart">
            <LineChart
                measures={[Revenue]}
                segmentBy={Product.Default}
                trendBy={DateDatasets.Date.Month.Short}
                filters={props.filters}
            />
        </div>
    );
};

export default RevenueChart;
