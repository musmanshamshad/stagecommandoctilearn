export function hasChildren(item) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}

export function uniqueID() {
  return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}

function getSafeRanges(dangerous) {
  const a = dangerous.commonAncestorContainer;
  const s = new Array(0),
    rs = new Array(0);

  let xm;

  if (dangerous.startContainer !== a)
    for (let i = dangerous.startContainer; i !== a; i = i.parentNode) s.push(i);
  if (0 < s.length)
    for (let i = 0; i < s.length; i++) {
      const xs = document.createRange();
      if (i) {
        xs.setStartAfter(s[i - 1]);
        xs.setEndAfter(s[i].lastChild);
      } else {
        xs.setStart(s[i], dangerous.startOffset);
        xs.setEndAfter(
          s[i].nodeType === Node.TEXT_NODE ? s[i] : s[i].lastChild
        );
      }
      rs.push(xs);
    }

  const e = new Array(0),
    re = new Array(0);
  if (dangerous.endContainer !== a)
    for (let i = dangerous.endContainer; i !== a; i = i.parentNode) e.push(i);
  if (0 < e.length)
    for (let i = 0; i < e.length; i++) {
      const xe = document.createRange();
      if (i) {
        xe.setStartBefore(e[i].firstChild);
        xe.setEndBefore(e[i - 1]);
      } else {
        xe.setStartBefore(
          e[i].nodeType === Node.TEXT_NODE ? e[i] : e[i].firstChild
        );
        xe.setEnd(e[i], dangerous.endOffset);
      }
      re.unshift(xe);
    }

  if (0 < s.length && 0 < e.length) {
    xm = document.createRange();
    xm.setStartAfter(s[s.length - 1]);
    xm.setEndBefore(e[e.length - 1]);
  } else {
    return [dangerous];
  }

  rs.push(xm);
  const response = rs.concat(re);

  return response;
}

function highlightRange(range, i, color) {
  const newNode = document.createElement("span");
  newNode.setAttribute("style", `background-color: ${color}; display: inline;`);
  range.surroundContents(newNode);
}

export function highlightSelection(color) {
  const userSelection = window.getSelection().getRangeAt(0);
  const safeRanges = getSafeRanges(userSelection);
  let index = 0;
  for (let i = 0; i < safeRanges.length; i++) {
    if (safeRanges[i].toString() !== "") {
      highlightRange(safeRanges[i], index, color);
      index = index + 1;
    }
  }
}
