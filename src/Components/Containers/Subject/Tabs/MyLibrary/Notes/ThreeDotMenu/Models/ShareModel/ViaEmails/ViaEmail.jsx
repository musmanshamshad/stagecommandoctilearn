import React, { useState } from "react";
import UserList from "./UserList/UserList";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchField, ButtonWrappeer, Typography } from "./ViaEmails.style.js";
import SearchIcon from "./../../../../../../../../../UI/SearchBar/icons/SearchIconSvg";
import palette from "./../../../../../../../../../../config/palette.js";
import ButtonComp from "./../../../../../../../../../UI/Button/ButtonComp";
import api from "./../../../../../../../../../../Services";

const ViaEmail = () => {
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
      person.email.toLowerCase().includes(searchField.toLowerCase())
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
        placeholder="Search by Email"
        onChange={handleChange}
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <UserList filteredPersons={filteredPersons} />
      <Typography>
        <span style={{ color: palette.colors.unselected }}>Selected:</span> 2
        Users
      </Typography>
      <ButtonWrappeer>
        <ButtonComp variant="text" background={palette.colors.unselected}>
          Cancel
        </ButtonComp>
        <ButtonComp variant="contained">Send Link</ButtonComp>
      </ButtonWrappeer>
    </div>
  );
};

export default ViaEmail;
