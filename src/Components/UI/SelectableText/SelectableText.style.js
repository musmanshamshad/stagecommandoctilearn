import { styled } from "@mui/system";
import Box from "./../Box/Box";

export const Wrapper = styled(Box)(({ theme }) => ({}));

export const Text = styled("span")(({ theme, isselected, bg }) => {
  return {
    position: "relative",
    cursor: "pointer",
    transition: "all 0.2s",
    padding: "0px 4px",
    borderRadius: "5px",
    backgroundColor: bg ? bg : "",
  };
});

export const EditorWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-60px",
  left: "0px",
  width: "130px",
  height: "50px",
  color: "#fff",
  background: "#251038",
  borderRadius: "5px",
}));

export const EditorStyles = styled("div")(({ theme }) => ({
  height: "100%",
  width: "130px",
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
}));

export const Divider = styled("div")(({ theme }) => ({
  width: "1px",
  height: "33.94px",
  background: "#A4ACBF",
  opacity: 0.7,
}));

export const EditorOptionWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  width: "65px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.2s",
  position: "relative",
  "&:hover": {
    background: "rgba(127, 17, 224, 0.4)",
  },
}));

export const CommentWrapper = styled(EditorOptionWrapper)(({ theme }) => ({
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
}));

export const ColorPickerWrapper = styled(EditorOptionWrapper)(({ theme }) => ({
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
}));

export const CommentPickerBoxStyled = styled("div")(({ theme }) => ({}));

export const ContentPicker = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-75px",
  left: 0,
  background: "#3D2862",
  height: "58px",
  width: "132px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ContentPickerWithBefore = styled(ContentPicker)(({ theme }) => ({
  "&::before": {
    content: "''",
    position: "absolute",
    top: "58px",
    left: "14px",
    background: "#3D2862",
    width: "28px",
    height: "17px",
    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
  },
}));

export const CommentPicker = styled(ContentPickerWithBefore)(({ theme }) => ({
  width: "190px",
  height: "122px",
  top: "-139px",
  left: "14px",
  "&::before": {
    top: "122px",
  },
}));

export const ContentInput = styled("textarea")(({ theme }) => ({
  background: "transparent",
  color: "#fff",
  border: "none",
  outline: "none",
  fontSize: "14px",
  fontWeight: "400",
  width: "95%",
  height: "95%",
  fontFamily: "inherit",
}));

export const ColorBox = styled("div")(({ theme, variant }) => ({
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  background: `rgb(${variant})`,
  border: "1px solid #FFFFFF;",
  display: "flex",
  alignItems: "center",
}));

export const ContentFlexStyle = styled("div")(({ theme }) => ({
  width: "84%",
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
}));
