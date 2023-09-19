import React, { useState } from "react";
import UserList from "./UserList/UserList";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import {
  SearchField,
  ButtonWrappeer,
  Typography,
  ChatWrapper,
  CheckboxDiv,
} from "./SendMessage.style.js";
import SearchIcon from "./../../../../../../../../../UI/SearchBar/icons/SearchIconSvg";
import palette from "./../../../../../../../../../../config/palette.js";
import ButtonComp from "./../../../../../../../../../UI/Button/ButtonComp";
import TransparentSelect from "./../../../../../../../../Dashboard/TransparentSelect/TransparentSelect";
import constants from "./../../../../../../../../../../config/constants";
import api from "./../../../../../../../../../../Services";

const SendMessage = () => {
  const [searchField, setSearchField] = useState("");
  const [emailData, setEmailData] = React.useState([]);
  const apicall = async () => {
    const { data, status, ...rest } = await api.getUserEmail();

    if (status === "error") {
      return console.error(rest.error.message);
    }
    setEmailData(data);
  };
  React.useEffect(() => {
    apicall();
  }, []);

  const filteredPersons = emailData.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.profession.toLowerCase().includes(searchField.toLowerCase())
    );
  });
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div>
      <SearchField
        fullWidth
        type="search"
        size="small"
        placeholder="Search by Name"
        onChange={handleChange}
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <>
                <TransparentSelect
                  title="All User Roles "
                  controler={constants.profession}
                  iconColor={palette.colors.secondaryModified}
                  getSelected={(e) => {
                    setSearchField(e);
                  }}
                />
              </>
            </InputAdornment>
          ),
        }}
      />
      <UserList filteredPersons={filteredPersons} />
      <ChatWrapper>
        <Typography>
          <span style={{ color: palette.colors.unselected }}>Selected:</span> 2
          Users
        </Typography>
        <CheckboxDiv>
          <Checkbox
            size="small"
            sx={{
              color: palette.colors.primaryModified,
              "&.Mui-checked": {
                color: palette.colors.primaryModified,
              },
            }}
          />
          <Typography>
            <span style={{ color: palette.colors.unselected }}>
              Create Chat
            </span>
          </Typography>
        </CheckboxDiv>
      </ChatWrapper>

      <ButtonWrappeer>
        <ButtonComp variant="text" background={palette.colors.unselected}>
          Cancel
        </ButtonComp>
        <ButtonComp variant="contained">Send Link</ButtonComp>
      </ButtonWrappeer>
    </div>
  );
};

export default SendMessage;
