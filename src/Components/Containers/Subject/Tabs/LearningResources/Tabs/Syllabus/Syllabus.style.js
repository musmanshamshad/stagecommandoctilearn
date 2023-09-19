import { styled } from "@mui/material";

export const ChatImg = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));

export const CommentBox = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-210px",
  left: "-100px",
  width: "140px",
  height: "190px",
  borderRadius: "10px",
  borderBottomLeftRadius: "50px",
  boxShadow: "0px 4px 11px -3px rgba(37,16,56,0.85)",
  background: "#251038",
  color: "#fff",
  padding: "5px",
}));
