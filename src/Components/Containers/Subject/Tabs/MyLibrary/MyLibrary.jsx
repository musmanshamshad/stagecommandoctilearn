import React from "react";
import Appbar from "./../../../../UI/Navbars/Secondary/Secondary";
import MyLibraryNotes from "./Notes/Notes";
import MyLibraryFlashcard from "./Flashcards/Flashcard";
import MyLibrarySimulation from "./Simulation/MyLibrarySimulation";

const MyLibrary = () => {
  const myLibraryTabs = [
    {
      name: "notes",
      label: "Notes",
      value: 0,
      content: <MyLibraryNotes />,
    },
    {
      name: "flashcards",
      label: "Flashcards",
      value: 1,
      content: <MyLibraryFlashcard />,
    },
    // {
    //   name: "simulations",
    //   label: "Simulations",
    //   value: 2,
    //   content: <MyLibrarySimulation />,
    // },
  ];
  return <Appbar tabs={myLibraryTabs} />;
};

export default MyLibrary;
