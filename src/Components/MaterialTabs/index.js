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
        
            <Tabs value={data[0]} className="mt-4 2xl:ml-12" data-testid="TabsforTest">
                <TabsHeader className="w-full xl:w-6/12 deuxieme_plan flex justify-center">
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
                            <CvCard tag={label} className="premier_plan" />
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        
    );
};

export default MaterialTabs;
