import React from "react";

interface IRevenueCalculator {
    data: any;
}

const RevenueCalculator: React.FC<IRevenueCalculator> = ({ data }) => {
    console.log("RevenuCalculator data", data);

    return <div>Calculator</div>;
};

export default RevenueCalculator;
