import React from "react";
import { debounce } from "lodash";
import api from "../Services";

const initialState = {
  time: new Date().toISOString(),
  value: true,
};

const useUserActivityTracking = () => {
  const [state, setState] = React.useState(initialState);

  // All logic to perform state update should be performed here
  const handleUpdateState = ({ value, time }) => {
    setState((prevState) => ({ ...prevState, value, time }));
    return true;
  };

  // api payload logic
  const buildPayloadForApi = async ({ time }) => {
    const token = localStorage.getItem("auth");
    const payload = {
      startDate: state.time,
      endDate: time,
    };
    console.log("start and end", payload);
    const temp = await api.saveTimeStatistics(payload, token);
    console.log("temp", temp);
    return temp;
  };

  // All good responses must be handled here
  const handleGoodResponse = (response, value) => {
    const { createdAt } = response;

    if (!createdAt) {
      throw Error("Invalid response!");
    }

    handleUpdateState({ value, time: createdAt });
  };

  // Side effects and their consumptions are performed here
  const handleSideEffects = (value, time) => {
    buildPayloadForApi({ time })
      .then((el) => {
        if (el.error) {
          console.error("Error in response");
          throw Error("Network Response Error");
        }
        handleGoodResponse(el.data, value);
      })
      .catch((err) => {
        console.error(err);
        throw Error("Network Request Error");
      });
  };

  const updateVisibility = React.useCallback(
    debounce((value, time) => {
      // params are compulsory
      if (typeof value === "undefined" || typeof time === "undefined") {
        throw Error("Incomplete params provided");
      } else {
        // time must be in ISO string format
        if (typeof time !== "string") {
          throw Error(
            "Date must be in String and ISO format. Use _.toISOString() method on Date API"
          );
        }
        // handle side effects. Pass conditions in if params
        if (
          !value &&
          state.value
          // differenceInMinutes(parseJSON(time), parseJSON(state.time)) > 0
        ) {
          console.log("value and time", value, time);
          return handleSideEffects(value, time);
        }

        return handleUpdateState({ value, time });
      }
    }, 500),
    []
  );

  return { state, updateVisibility };
};

export default useUserActivityTracking;
