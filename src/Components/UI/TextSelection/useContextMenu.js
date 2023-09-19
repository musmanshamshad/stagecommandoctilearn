import { useCallback, useEffect, useState } from "react";

const useContextMenu = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setAnchorPoint({ x: event.pageX, y: event.pageY - 20 });
    changeShowHandler(true);
  };

  const changeShowHandler = (value) => {
    setShow(value);
    return true;
  };

  const toggleShowHandler = () => {
    setShow((prevState) => !prevState);
  };

  return {
    anchorPoint,
    show,
    changeShowHandler,
    handleContextMenu,
    toggleShowHandler,
  };
};

export default useContextMenu;
