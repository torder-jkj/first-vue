function getProductDescription(str:string) {
  const text = str.replace(
    /(\r\n|\r|\n)\/\/(\r\n|\r|\n)|\/\/(\r\n|\r|\n)|(\r\n|\r|\n)\/\/|\/\/|(\r\n|\r|\n)/g,
    '<br />'
  );

  return text;
}
