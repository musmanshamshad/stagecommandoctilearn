import PropTypes from "prop-types";
import * as React from "react";
import Box from "@mui/material/Box";
import { StyledTabs, StyledTab } from "./Tabs.style";
import TypographyCompo from "../Typography/TypographyCompo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <TypographyCompo>{children}</TypographyCompo>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const defaultTabs = [
  {
    value: "one",
    label: "Item One",
  },
  { value: "two", label: "Item Two" },
];
function ColorTabs({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {tabs.length > 0 &&
          tabs.map(({ value, label, id }, index) => (
            <StyledTab {...a11yProps(id)} label={label} key={index} />
          ))}
      </StyledTabs>
      {tabs.length > 0 &&
        tabs.map((tab) => (
          <TabPanel value={value} index={tab.id}>
            {tab.component}
          </TabPanel>
        ))}
    </Box>
  );
}

ColorTabs.defaultProps = {
  tabs: defaultTabs,
};

export default ColorTabs;
