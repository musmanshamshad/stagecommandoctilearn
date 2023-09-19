import { GoListUnordered, GoListOrdered } from "react-icons/go";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";
const BLOCK_STYLES = [
  { style: "unorderedList", label: <GoListUnordered /> },
  { style: "orderedList", label: <GoListOrdered /> },
  { style: "align-left", label: <AiOutlineAlignLeft /> },
  { style: "align-center", label: <AiOutlineAlignCenter /> },
  { style: "align-right", label: <AiOutlineAlignRight /> },
];
export default BLOCK_STYLES;
