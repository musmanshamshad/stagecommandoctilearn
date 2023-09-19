import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import palette from "../../../config/palette";
import { AntTab, Wrapper } from "./NavBar.style";
import Box from "../../../Components/UI/Box/Box";

const MultiTabHorizental = ({ tabs }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper sx={{ width: "100%", typography: "body1", }}>
      <TabContext value={value}>
        <Box
          sx={{
            background: "#faf9fb",
            
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor={{ style: { display: "none" } }}
          >
            {tabs.map((tab, index) => (
              <AntTab
                key={index}
                icon={
                  <tab.icon
                    color={
                      value === tab.value
                        ? palette.primaryModified
                        : palette.unselected
                    }
                  />
                }
                iconPosition="start"
                label={tab.label}
                value={tab.value}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab, index) => (
          <TabPanel sx={{ p: 0 }} value={tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Wrapper>
  );
};

export default MultiTabHorizental;
