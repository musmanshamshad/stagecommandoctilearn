import { styled } from "@mui/system";
import PaperComp from "../../../UI/Paper/Paper";

export const AppContent = styled(PaperComp)(
  ({ theme, appbarheight, drawerwidth }) => ({
    paddingTop: appbarheight,
    paddingLeft: drawerwidth,
    minHeight: `calc(100vh - ${appbarheight})`,
  })
);

export const Main = styled("main")(({ theme }) => ({
  // padding: "40px 30px",
}));
