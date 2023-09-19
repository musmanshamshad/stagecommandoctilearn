import React from "react";

const LearningSvg = ({ color }) => {
  return (
    <div style={{ marginRight: "0.5rem", marginTop: "0.3rem" }}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1844 13.3747V9.5362H11.786L9.52734 7.27752V4.68584H13.1585V0H4.84151V4.68584H8.47266V7.27752L6.21397 9.5362H1.81557V13.3142H1C0.447715 13.3142 0 13.7619 0 14.3142V17C0 17.5523 0.447715 18 1 18H3.68584C4.23812 18 4.68584 17.5523 4.68584 17V14.3142C4.68584 13.7619 4.23812 13.3142 3.68584 13.3142H2.87026V10.5909H6.21397L9 13.3769L11.786 10.5909H15.1297V13.3747C14.0911 13.6147 13.3141 14.5466 13.3141 15.6571C13.3141 16.949 14.3652 18 15.6571 18C16.949 18 18 16.949 18 15.6571C18 14.5466 17.2231 13.6147 16.1844 13.3747Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default LearningSvg;

LearningSvg.defaultProps = {
  color: "#ADB4C5",
};
