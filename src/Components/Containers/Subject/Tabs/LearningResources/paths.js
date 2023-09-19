import Syllabus from "./Tabs/Syllabus/Syllabus";
import Notes from "./Tabs/Notes/Notes";
import FlashCards from "./Tabs/Flashcards/FlashCards";
// import Simulations from "./Tabs/Simulations/Simulations";

const tabs = [
  {
    name: "syllabus",
    label: "Syllabus",
    value: 0,
    content: <Syllabus />,
  },
  {
    name: "notes",
    label: "Notes",
    value: 1,
    content: <Notes />,
  },
  {
    name: "flashcards",
    label: "Flashcards",
    value: 2,
    content: <FlashCards />,
  },
  // {
  //   name: "simulations",
  //   label: "Simulations",
  //   value: 3,
  //   content: <Simulations />,
  // },
];

export default tabs;
