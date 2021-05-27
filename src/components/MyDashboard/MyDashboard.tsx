import React from "react";
import styles from "./MyDashboard.module.scss";
import RevenueChart from "./RevenueChart";
import Sidebar from "./Sidebar";

const MyDashboard: React.FC = () => {
    return (
        <div>
            <h1>My dashboard</h1>
            <div className={styles.filter}>Filter</div>
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
