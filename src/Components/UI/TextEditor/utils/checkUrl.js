const checkUrl = (str) => {
  const checker = new RegExp(
    /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&=]*)/gi
  );
  const valueIsURL = checker.test(str);
  return valueIsURL;
};
export default checkUrl;
