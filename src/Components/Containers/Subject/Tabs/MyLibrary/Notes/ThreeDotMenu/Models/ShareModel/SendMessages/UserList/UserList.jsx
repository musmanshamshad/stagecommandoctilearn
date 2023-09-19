import React from "react";
import Avatar from "@mui/material/Avatar";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Wrapper,
  InnverDiv,
  TypograraphyName,
  CircleCheckBox,
  Main,
  TypographyProfession,
} from "./UserList.style.js";
import Divider from "@mui/material/Divider";

function UserList({ filteredPersons }) {
  return (
    <Main>
      {filteredPersons.map((person, index) => (
        <>
          <Wrapper key={index}>
            <InnverDiv>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 30, height: 30 }}
                src={person.imgPath}
              />
              <TypograraphyName>{person.name}</TypograraphyName>
            </InnverDiv>

            <div style={{display:'flex', alignItems:'center'}}>
              <TypographyProfession>{person.profession}</TypographyProfession>
              <CircleCheckBox
                icon={<RadioButtonUncheckedIcon />}
                size="small"
                checkedIcon={<CheckCircleIcon />}
              />
            </div>
          </Wrapper>
          <Divider />
        </>
      ))}
    </Main>
  );
}

export default UserList;
