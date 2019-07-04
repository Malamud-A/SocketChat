export default () => {
  const { cookie } = document;
  if (!cookie.includes('UUID')) return null;
  return cookie.substring(cookie.indexOf('UUID') + 5, cookie.indexOf('UUID') + 41);
};
