import React, { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel
} from "@material-tailwind/react";
import CvCard from "../CvCard";
import "./style.css";

const MaterialTabs = () => {

    const [tabValue, setTabValue] = useState([]);
    var TabValues;

    const data = ["All Marketplaces", "Accepted", "Pending", "Rejected", "Favorites"];



    return (
        <Tabs value="All Marketplaces" className="mt-4 ml-12">
            <TabsHeader className="w-5/12 deuxieme_plan">
                {data.map((label, index) => (
                    <Tab key={index} value={label}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}>
                {data.map((label, index) => (
                    <TabPanel key={index} value={label}>
                        <CvCard tag={label}  className="premier_plan"/>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
};

export default MaterialTabs;
