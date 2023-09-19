import { styled } from '@mui/material/styles';
import GridComp from './../../UI/Grid/Grid';
import BoxComp from './../../UI/Box/Box';

export const GridContainer = styled(GridComp)(({ theme }) => ({
    height:"100vh",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    overflow: "hidden",
   
  }));
  export const Container = styled(BoxComp)(({ theme }) => ({
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
  }));