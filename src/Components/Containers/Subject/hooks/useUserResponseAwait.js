import { useState } from "react";

const useUserResponseAwait = () => {
  const [awaitingUserResponse, setAwaitingUserResponse] = useState({
    loading: false,
  });

  const handleChangeAwaitingUserResponse = (update) => {
    setAwaitingUserResponse((prevState) => ({ ...prevState, ...update }));
  };

  const toggleLoading = (val) => {
    handleChangeAwaitingUserResponse({ loading: val });
  };

  return { awaitingUserResponse, toggleLoading };
};

export default useUserResponseAwait;
