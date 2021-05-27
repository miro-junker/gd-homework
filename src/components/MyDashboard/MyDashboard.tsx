import React, { useState } from "react";
import styles from "./MyDashboard.module.scss";
import RevenueChart from "./RevenueChart";
import Sidebar from "./Sidebar";
import Filter, { IDateFilterComponentState } from "./Filter";
import { defaultDateFilterOptions } from "./filterOptions";

const MyDashboard: React.FC = () => {
    const [filterState, setFilterState] = useState<IDateFilterComponentState>({
        selectedFilterOption: defaultDateFilterOptions.allTime!,
        excludeCurrentPeriod: false,
    });

    return (
        <div>
            <h1>My dashboard</h1>
            <div className={styles.filter}>
                <Filter state={filterState} setStateFn={setFilterState} />
            </div>

            <div className={styles.columns}>
                <div className={styles.chart}>
                    <RevenueChart />
                </div>

                <div className={styles.side}>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default MyDashboard;
