// import React from "react";

// const parentStyle = {
//   position: "relative",
//   color: "#1d1dc1",
//   textDecoration: "underline",
// };

// const childStyle = {
//   position: "absolute",
//   top: "-110%",
//   cursor: "pointer",
//   right: 0,
//   background: "rgba(226, 48, 172, 1)",
//   color: "#fff",
//   zIndex: 1000,
//   padding: "0.2rem 0.8rem",
//   borderRadius: "5px",
//   textAlign: "center",
// };

// const Link = ({ element, attributes, children }) => {
//   // import useslate from slate react
//   // const editor = useSlate();
//   const [show, setShow] = React.useState(false);
//   // IF WE WANT TO DYNAMICALLY CHANGE LINK POSITION FROM TOP TO BOTTOM TO ADJUST TO OVERFLOW, THEN USE EDITOR.CHILDREN AND PERFORM TESTS ON IT

//   return (
//     <span
//       onMouseEnter={(e) => setShow(true)}
//       onMouseLeave={(e) => setShow(false)}
//       style={parentStyle}
//       {...attributes}
//     >
//       {show && (
//         <span
//           onClick={(e) => window.open(element.url, "_blank")}
//           style={childStyle}
//         >
//           {element.url}
//         </span>
//       )}
//       {children}
//     </span>
//   );
// };

// export default Link;
import Tooltip from "@mui/material/Tooltip";
export default function Link({ element, attributes, children }) {
  return (
    <Tooltip title="Press ctrl (or cmd in mac) and click to visit the link">
      <a
        href={element.url}
        {...attributes}
        onClick={(e) => {
          if (e.metaKey || e.ctrlKey) {
            window.open(element.url, "_blank");
          }
        }}
        className={"link"}
      >
        {children}
      </a>
    </Tooltip>
  );
}
