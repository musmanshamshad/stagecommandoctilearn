import React from "react";
import Select from "react-select";
import { styled } from "@mui/system";
const Container = styled("div")(({ theme, width }) => ({
  width,
}));
const default_options = [
  { value: "value1", label: "First" },
  { value: "value2", label: "Second" },
];

const Comp = ({ options, getVal, defaultLabel, width }) => {
  const [val, setVal] = React.useState({ value: null, label: defaultLabel });
  React.useEffect(() => {
    getVal(val);
  }, [val, getVal]);
  return (
    <Container width={width}>
      <Select
        value={val}
        onChange={(e) => {
          setVal(e);
        }}
        options={options}
      />
    </Container>
  );
};

export default Comp;

Comp.defaultProps = {
  options: default_options,
  defaultLabel: "No prop given",
  getVal: (e) => {
    return;
  },
  width: "10rem",
};
