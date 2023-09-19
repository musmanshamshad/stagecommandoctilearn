import React from "react";
import { Main, Typography, TabAppbar } from "./../Models.style";
import CopyURL from "./CopyURL/CopyURL";
import TypographyCompo from "./../../../../../../../../UI/Typography/TypographyCompo";
import theme from "./../../../../../../../../../theme/theme.js";
import ViaEmail from "./ViaEmails/ViaEmail";
import SendMessage from "./SendMessages/SendMessage";

const ShareModal = () => {
  const myLibraryTabs = [
    {
      name: "copy_url",
      label: "Copy URL",
      value: 0,
      content: <CopyURL />,
    },
    {
      name: "via_emails",
      label: "Via Emails",
      value: 1,
      content: <ViaEmail />,
    },
    {
      name: "send_message",
      label: "Send Message",
      value: 2,
      content: <SendMessage />,
    },
  ];
  return (
    <Main>
      <TypographyCompo variant="h6">Share All My Notes</TypographyCompo>
      <Typography variant="body2">
        Copy URL or share the notes via email or message system
      </Typography>
      <TabAppbar
        tabs={myLibraryTabs}
        tabIndicatorColor={theme.palette.secondary.main}
        selectedtabcolorClickAwayListener={theme.palette.secondary.main}
      ></TabAppbar>
    </Main>
  );
};

export default ShareModal;
