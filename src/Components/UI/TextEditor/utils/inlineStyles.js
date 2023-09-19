import { BsCodeSlash } from "react-icons/bs";
import { GrStrikeThrough } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
const CHARACTER_STYLES = [
  { style: "bold", label: "B" },
  { style: "italic", label: "I" },
  { style: "underline", label: "U" },
  { style: "code", label: <BsCodeSlash /> },
  { style: "strike-through", label: <GrStrikeThrough /> },
  { style: "link", label: <AiOutlineLink /> },
];
export default CHARACTER_STYLES;
