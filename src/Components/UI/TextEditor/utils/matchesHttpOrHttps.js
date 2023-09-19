const matchesHttpOrHttps = (str) => {
  const checker = new RegExp(/https?:\/\//g);
  const valueIsHttp = checker.test(str);
  return valueIsHttp;
};
export default matchesHttpOrHttps;
