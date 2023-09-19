import React from "react";
import { styled } from "@mui/system";

const Circle = styled("span")(({ theme }) => ({
  position: "absolute",
  color: "#fff",
  background: "#E015A2",
  width: "7.92px",
  height: "7.92px",
  top: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  zIndex: 100000000000,
  fontSize: "5px",
}));

const NotificationRightSvg = ({
  notification,
  circleColor,
  color,
  ...props
}) => {
  return (
    <div style={{ position: "relative" }}>
      <svg
        style={{ position: "relative" }}
        {...props}
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.6957 19C10.1295 19 11.3289 17.9779 11.6043 16.625H5.78711C6.06268 17.9779 7.26206 19 8.6957 19V19Z"
          fill={color}
        />
        <path
          d="M14.2476 9.49792C14.2444 9.49792 14.2412 9.49865 14.238 9.49865C11.183 9.49865 8.69641 7.01276 8.69641 3.95703C8.69641 3.117 8.88964 2.32291 9.22609 1.60885C9.05185 1.59232 8.87529 1.58203 8.69641 1.58203C5.6359 1.58203 3.15479 4.063 3.15479 7.12365V9.33079C3.15479 10.8975 2.46841 12.3764 1.26424 13.3944C0.862851 13.7372 0.684697 14.2834 0.828786 14.8163C0.996648 15.4361 1.60939 15.832 2.25228 15.832H15.1366C15.8111 15.832 16.4469 15.395 16.5837 14.734C16.6899 14.2226 16.5078 13.7119 16.1112 13.3786C14.9601 12.4136 14.2943 10.9956 14.2476 9.49792V9.49792Z"
          fill={color}
        />
      </svg>
      <Circle>{notification}</Circle>
    </div>
  );
};

export default NotificationRightSvg;

NotificationRightSvg.defaultProps = {
  color: "#DCDADF",
  notification: 12,
};
