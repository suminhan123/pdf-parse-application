export const getPdfParseTable = (texts) => {
  const textItems = texts.items.map((t) => t.str);
  const parseRow = [];

  let itemStr = "";

  for (let idx = 0; idx < textItems.length; idx++) {
    if (textItems[idx] === " ") {
      continue;
    }
    if (
      textItems[idx].includes("<신") ||
      /^제\d+조/.test(textItems[idx]) ||
      /^[\u2460-\u2469]/.test(textItems[idx])
    ) {
      if (itemStr && textItems[idx - 1] !== " ") {
        parseRow.push(itemStr.trim());
        itemStr = "";
      }
      itemStr += textItems[idx];
    } else {
      itemStr += textItems[idx];
    }
  }

  parseRow.shift();

  const leftCol = parseRow.slice(0, Math.floor(parseRow.length / 2) - 1);
  const rightCol = parseRow.slice(Math.floor(parseRow.length / 2) - 1);
  let updateTable = [];

  for (let i = 0; i < Math.min(leftCol.length, rightCol.length); i++) {
    updateTable.push([leftCol[i], rightCol[i]]);
  }

  return updateTable;
};
