var createErrorUrl = (code, title, description, main_page) => {
  var url = 'https://aratakileo.github.io/static.pexty.xyz/pages/error.html?';
  url += 'code=' + code;
  url += '&title=' + encodeURI(title);
  url += '&description=' + encodeURI(description);
  url += '&main-page=' + main_page;
  return url;
};
