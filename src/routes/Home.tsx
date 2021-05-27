import React from "react";

import Page from "../components/Page";
import MyDashboard from "../components/MyDashboard/MyDashboard";

const Home: React.FC = () => {
    return (
        <Page>
            <MyDashboard />
        </Page>
    );
};

export default Home;
