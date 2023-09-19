import { styled } from "@mui/system";
import Stack from "./../../../UI/Stack/Stack";

export const Wrapper = styled(Stack)(({ theme }) => ({
  paddingTop: "20px",
}));
export const FormSectionWrapper = styled(Stack)(({ theme }) => ({
  padding: "0 30px",
}));
export const ImageWrapper = styled("div")(({ theme }) => ({
  width: "90px",
  height: "90px",
}));
