const useHtmlReturn = () => {
  const handleGetReturn = (html, delta) => {
    return {
      html,
      delta,
    };
  };

  return { handleGetReturn };
};

export default useHtmlReturn;
