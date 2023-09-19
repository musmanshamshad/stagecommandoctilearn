import LearningResources from "./Tabs/LearningResources/LearningResources";
import MyLibrary from "./Tabs/MyLibrary/MyLibrary";
import Forum from "./Tabs/Forum/Forum";
import LearningPathways from "./Tabs/LearningPathways/LearningPathways";
import KeySvg from "./icons/KeySvg";
import LibrarSvg from "./icons/LibrarySvg";
// import LearningSvg from "./icons/LearningSvg";
// import ForumSvg from "./icons/ForumSvg";
const primaryTabs = [
  {
    value: 0,
    name: "learningResources",
    label: "Learning Resources",
    icon: KeySvg,
    content: <LearningResources />,
  },
  {
    value: 1,
    name: "myLibrary",
    label: "My Library",
    icon: LibrarSvg,
    content: <MyLibrary />,
  },
  // {
  //   value: 2,
  //   name: "learningPathways",
  //   label: "Learning Pathways",
  //   icon: LearningSvg,
  //   content: <LearningPathways />,
  // },
  // {
  //   value: 3,
  //   name: "forum",
  //   label: "Forum",
  //   icon: ForumSvg,
  //   content: <Forum />,
  // },
];
export default primaryTabs;
