import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/order/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Order() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Cover
        img={coverImg}
        title={"our shop"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      {/* Tab Div */}
      <div className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
