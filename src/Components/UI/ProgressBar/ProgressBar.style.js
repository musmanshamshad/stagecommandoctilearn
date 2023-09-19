import { styled } from "@mui/system";

export const ProgressBarBehind = styled("div")(
  ({ theme, width, height, percentprogress, progressbg }) => ({
    background: "#E4E8EF",
    width: width,
    height: "5px",
    borderRadius: "2.5px",
    position: "relative",
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      background: progressbg,
      width: percentprogress,
      zIndex: 1000,
      borderRadius: "2.5px",
    },
  })
);
