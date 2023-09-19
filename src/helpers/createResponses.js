const createError = (value, message, severity) => ({
  value,
  message,
  severity,
});

const createLoading = (value, id) => ({ value, id });

const initialError = createError(false, "", "");
const initialLoading = createLoading(false, "");

const responseFunctions = () => ({
  createError,
  createLoading,
  initialError,
  initialLoading,
});

export const buildErrorTemplate = (payload) => {
  if (typeof payload !== "string") {
    return console.error("Invalid payload given");
  }
  switch (payload) {
    case "dataNotFound_info_error":
      return createError(true, "Data not Found!", "info");

    case "dataNotFound_error_error":
      return createError(true, "Data not Found!", "error");

    case "dataNotFound_warning_error":
      return createError(true, "Data not Found!", "warning");
    default:
      return null;
  }
};

export const buildLoadingTemplate = () => {
  return createLoading(true, "");
};

export default responseFunctions();
