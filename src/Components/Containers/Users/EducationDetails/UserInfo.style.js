import { styled } from "@mui/system";

export const ImgContainer = styled("div")(({ theme }) => ({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  overflow: "hidden",
  position: "relative",
  "&:hover img": {
    filter: "blur(6px)",
  },

  "&:hover div": {
    opacity: 1,
  },
}));
export const Img = styled("img")(({ theme }) => ({
  objectFit: "cover",
  transition: "all 0.2s",
}));

export const Overlay = styled("div")(({ theme }) => ({
  transition: "all 0.4s",
  opacity: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
}));
