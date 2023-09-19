import React from "react";
import * as Spinners from "react-loader-spinner";

const CustomLoader = (props) => {
  const buildProps = (props) => ({
    variant: props.variant,
    color: props.color,
    width: props.width,
    height: props.height,
    ...props
  });

  let spinner = null;

  switch (props.variant) {
    case "tail-spin":
      spinner = <Spinners.TailSpin {...buildProps(props)} />;
      break;
    case "audio":
      spinner = <Spinners.Audio {...buildProps(props)} />;
      break;
    case "ball-triangle":
      spinner = <Spinners.BallTriangle {...buildProps(props)} />;
      break;
    case "bars":
      spinner = <Spinners.Bars {...buildProps(props)} />;
      break;
    case "circles":
      spinner = <Spinners.Circles {...buildProps(props)} />;
      break;
    case "grid":
      spinner = <Spinners.Grid {...buildProps(props)} />;
      break;
    case "hearts":
      spinner = <Spinners.Hearts {...buildProps(props)} />;
      break;
    case "oval":
      spinner = <Spinners.Oval {...buildProps(props)} />;
      break;
    case "puff":
      spinner = <Spinners.Puff {...buildProps(props)} />;
      break;
    case "rings":
      spinner = <Spinners.Rings {...buildProps(props)} />;
      break;
    case "three-dots":
      spinner = <Spinners.ThreeDots {...buildProps(props)} />;
      break;
      default: return;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={props.styleProps}>{spinner}</span>
    </div>
  );
};

CustomLoader.defaultProps = {
  height: "60px",
  width: "60px",
  color: "black",
  variant: "tail-spin",
};

export default CustomLoader;
