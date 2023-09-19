import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import hexToRgb from "./../../../helpers/hexToRgb";

export const ContainedBtn = styled(Button)(({ theme, main, light }) => {
  return {
    color: light,
    borderRadius: "15px",
    padding: "10.5px 15px",
    textTransform: "capitalize",
    background: main,
    "&:hover": {
      background: `rgba(${hexToRgb(main)}, 0.8)`,
    },
  };
});

export const OutlinedBtn = styled(ContainedBtn)(({ theme, main, light }) => ({
  background: light,
  color: main,
  border: `1px solid ${main}`,
  "&:hover": {
    background: light,
  },
}));

export const TextBtn = styled(ContainedBtn)(({ theme, main, light }) => ({
  background: light,
  boxShadow: "none",
  color: main,
  "&:hover": {
    background: light,
    boxShadow: "none",
  },
}));
