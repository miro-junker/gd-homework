import React from "react";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { INullableFilter } from "@gooddata/sdk-model";

import { DateDatasets, Product, Revenue } from "../../ldm/full";
interface RevenueChartProps {
    filter?: INullableFilter;
}

const chartStyle = { height: 300 };

const RevenueChart: React.FC<RevenueChartProps> = props => {
    return (
        <div style={chartStyle} className="s-line-chart">
            <LineChart
                measures={[Revenue]}
                segmentBy={Product.Default}
                trendBy={DateDatasets.Date.Month.Short}
                filters={props.filter ? [props.filter] : undefined}
            />
        </div>
    );
};

export default RevenueChart;
