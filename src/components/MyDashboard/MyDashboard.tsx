import React, { useState } from "react";
import styles from "./MyDashboard.module.scss";
import RevenueChart from "./RevenueChart";
import Sidebar from "./Sidebar";
import Filter, { IDateFilterComponentState } from "./Filter";
import { DateFilterHelpers, defaultDateFilterOptions } from "@gooddata/sdk-ui-filters";
import { DateDatasets } from "../../ldm/full";

const MyDashboard: React.FC = () => {
    const [filterState, setFilterState] = useState<IDateFilterComponentState>({
        selectedFilterOption: defaultDateFilterOptions.allTime!,
        excludeCurrentPeriod: false,
    });

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        filterState.selectedFilterOption,
        DateDatasets.Date.ref,
        filterState.excludeCurrentPeriod,
    );

    return (
        <div>
            <h1>My dashboard {filterState.selectedFilterOption.localIdentifier}</h1>
            <div className={styles.filter}>
                <Filter state={filterState} setStateFn={setFilterState} />
            </div>

            <div className={styles.columns}>
                <div className={styles.chart}>
                    <RevenueChart filter={dateFilter} />
                </div>

                <div className={styles.side}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default MyDashboard;
