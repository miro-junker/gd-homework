import React from "react";
import { LoadingComponent, useDataView, useExecution } from "@gooddata/sdk-ui";
import { INullableFilter } from "@gooddata/sdk-model";
import { DateDatasets, Product, Revenue } from "../../ldm/full";
import RevenueCalculator from "./RevenueCalculator";

interface ISidebar {
    filters: INullableFilter[];
}

const Sidebar: React.FC<ISidebar> = props => {
    const execution = useExecution({
        seriesBy: [Product.Default, Revenue],
        slicesBy: [DateDatasets.Date.Month.Short],
        filters: props.filters,
    });

    const { result, status } = useDataView({ execution }, [execution?.fingerprint()]);

    if (status === "loading") {
        return <LoadingComponent />;
    }

    if (status === "error" || !result) {
        return <h2>N/A</h2>;
    }

    return <RevenueCalculator data={result} />;
};

export default Sidebar;
