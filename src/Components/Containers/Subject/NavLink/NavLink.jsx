import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Appbar from "./Appbar";
import { AntTab, Wrapper } from "./NavLink.style";
import Box from "../../../Components/UI/Box/Box";

const NavLink = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <TabContext value={value}>
        <Box sx={{ background: "#ffff" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            indicatorColor={{ style: { display: "none" } }}
          >
            <AntTab label="Syllabus" value="1" />
            <AntTab label="Notes" value="2" />
            <AntTab label="Flashcards" value="3" />
            <AntTab label="Simulations" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Appbar />
        </TabPanel>
        <TabPanel value="2">two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
    </Wrapper>
  );
};

export default NavLink;
