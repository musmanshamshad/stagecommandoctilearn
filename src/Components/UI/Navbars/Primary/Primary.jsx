import PropTypes from "prop-types";
import * as React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import palette from "./../../../../config/palette";
import { AntTab, Wrapper, BoxWrapper } from "./Primary.style";
import { useNavigate, Outlet } from "react-router-dom";

const Primary = ({ tabs }) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(tabs[newValue].name, { replace: true });
  };
  return (
    <Wrapper sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={+value}>
        <BoxWrapper>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{ style: { background: "#ECE8F2" } }}
          >
            {tabs.map((tab, index) => (
              <AntTab
                key={index}
                icon={
                  <tab.icon
                    color={
                      value === tab.value
                        ? palette.colors.primaryModified
                        : palette.colors.unselected
                    }
                  />
                }
                iconPosition="start"
                label={tab.label}
                value={+tab.value}
              />
            ))}
          </TabList>
        </BoxWrapper>
        <Outlet />
      </TabContext>
    </Wrapper>
  );
};

Primary.propTypes = {
  tabs: PropTypes.array,
};

export default Primary;
