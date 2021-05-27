import React from "react";
import { LoadingComponent, useDataView, useExecution } from "@gooddata/sdk-ui";
import { INullableFilter } from "@gooddata/sdk-model";
import { DateDatasets, Product, Revenue } from "../../ldm/full";
import RevenueCalculator from "./RevenueCalculator";

interface SidebarProps {
    filters: INullableFilter[];
}

const Sidebar: React.FC<SidebarProps> = props => {
    const execution = useExecution({
        seriesBy: [Product.Default, Revenue],
        slicesBy: [DateDatasets.Date.Month.Short],
        filters: props.filters,
    });

    const { result, status } = useDataView({ execution }, [execution?.fingerprint()]);

    return (
        <div>
            {status === "error" && <>N/A</>}
            {status === "loading" && <LoadingComponent />}
            {status === "success" && <RevenueCalculator data={result} />}
        </div>
    );
};

export default Sidebar;
