import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AntTab, Wrapper, BoxWrapper } from "./Secondary.style"
import PropTypes from "prop-types";

const Secondary = ({ tabs, tabIndicatorColor, selectedtabcolor }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <TabContext value={value}>
        <BoxWrapper>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{ style: { background: tabIndicatorColor } }}
          >
            {tabs.map((tab, index) => (
              <AntTab
                key={index}
                label={tab.label}
                value={tab.value}
                selectedtabcolor={selectedtabcolor}
              />
            ))}
          </TabList>
        </BoxWrapper>
        {tabs.map((tab, index) => (
          <TabPanel value={tab.value} key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Wrapper>
  );
};

export default Secondary;
Secondary.propTypes = {
  tabIndicatorColor: PropTypes.string,
  selectedtabcolor: PropTypes.string,
};
Secondary.defaultProps = {
  tabIndicatorColor: "#fff",
  selectedtabcolor: "#624BA2",
};
