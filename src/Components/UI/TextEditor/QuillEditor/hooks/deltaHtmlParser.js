import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const useDeltaToHtmlParser = (delta) => {
  let cfg = {};
  let converter = new QuillDeltaToHtmlConverter(delta.ops, cfg);
  let html = converter.convert();
  return html;
};

export default useDeltaToHtmlParser;
