import React from "react";
import TypographyCompo from "./../../../../../../../../../../UI/Typography/TypographyCompo";
import Avatar from "@mui/material/Avatar";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Wrapper,
  InnverDiv,
  TypograraphyName,
  CircleCheckBox,
  Main,

} from "./UserList.style.js";
import Divider from "@mui/material/Divider";

function UserList({ filteredPersons }) {
  return (
    <Main>
      {filteredPersons.map((person, index) => (
        <>
          <Wrapper key={index+1}>
            <InnverDiv>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 30, height: 30 }}
                src={person.imgPath}
              />
              <TypograraphyName>{person.name}</TypograraphyName>
            </InnverDiv>
         

            <TypographyCompo>{person.email}</TypographyCompo>
            
            <CircleCheckBox
              icon={<RadioButtonUncheckedIcon />}
              size="small"
              checkedIcon={<CheckCircleIcon />}
            />
          </Wrapper>
          <Divider />
        </>
      ))}
    </Main>
  );
}

export default UserList;
