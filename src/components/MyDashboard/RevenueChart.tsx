import React from "react";
import { LineChart } from "@gooddata/sdk-ui-charts";

import { DateDatasets, Product, Revenue } from "../../ldm/full";
interface RevenueChartProps {
    filters?: any;
}

const chartStyle = { height: 300 };

const RevenueChart: React.FC<RevenueChartProps> = props => {
    return (
        <div style={chartStyle} className="s-line-chart">
            <LineChart
                measures={[Revenue]}
                segmentBy={Product.Default}
                trendBy={DateDatasets.Date.Month.Short}
                filters={props.filters ? props.filters : undefined}
            />
        </div>
    );
};

export default RevenueChart;
