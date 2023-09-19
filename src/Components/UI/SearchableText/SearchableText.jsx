import React from "react";
import TextEditorRenderOutput from "./../TextEditorRenderOutput/TextEditorRenderOutput";
// import { useDispatch } from "react-redux";
// import { myLibraryHighlightActions } from "./../../../redux/reducers/myLibraryHighlight";
// import useSearchTag from './useSearchTags.js';

const SearchableText = ({ searchedTextValue, htmlData, noteId, ref }) => {
  // const dispatch = useDispatch();
  // const searchedText = useSearchTag();
  let pattern = new RegExp(`${searchedTextValue}`, "gi");
  // const { html: _html } = JSON.parse(htmlData);
  // const stringData = _html.toString();
  // const regex = /(<([^>]+)>)/ig;
  // const result = stringData.replace(regex, '');
  // let regexText = htmlData.replaceAll(`[^.[]]`);
  // let finalData = stringData.replace(/^(&nbsp; |<div>; |<sapn>)+/, '')

  let jsonData = htmlData.replace(pattern, `<mark>${searchedTextValue}</mark>`);
  // const jsonData = JSON.stringify({ html });

  // useEffect(() => {
  //   dispatch(myLibraryHighlightActions.jsonDataHandlerState(jsonData));
  //   dispatch(myLibraryHighlightActions.htmlDataHandlerState(htmlData));
  // }, [searchedTextValue]);

  let searchedText = "";

  switch (searchedTextValue) {
    case "!DOCTYPE":
      searchedText = htmlData;
      break;

    case "!DOCTYP":
      searchedText = htmlData;
      break;

    case "!DOCTY":
      searchedText = htmlData;
      break;

    case "!DOCT":
      searchedText = htmlData;
      break;

    case "!DOC":
      searchedText = htmlData;
      break;

    case "!DO":
      searchedText = htmlData;
      break;

    case "abbr":
      searchedText = htmlData;
      break;

    case "...":
      searchedText = htmlData;
      break;

    case "abb":
      searchedText = htmlData;
      break;

    case "acronym":
      searchedText = htmlData;
      break;

    case "acrony":
      searchedText = htmlData;
      break;

    case "acron":
      searchedText = htmlData;
      break;

    case "acro":
      searchedText = htmlData;
      break;

    case "acr":
      searchedText = htmlData;
      break;

    case "address":
      searchedText = htmlData;
      break;

    // case "addres":
    //   searchedText = htmlData;
    //   break;

    // case "addre":
    //   searchedText = htmlData;
    //   break;

    // case "addr":
    //   searchedText = htmlData;
    //   break;

    // case "add":
    //   searchedText = htmlData;
    //   break;

    case "applet":
      searchedText = htmlData;
      break;

    case "apple":
      searchedText = htmlData;
      break;

    case "appl":
      searchedText = htmlData;
      break;

    case "app":
      searchedText = htmlData;
      break;

    // case "area":
    //   searchedText = htmlData;
    //   break;

    // case "are":
    //   searchedText = htmlData;
    //   break;

    // case "article":
    //   searchedText = htmlData;
    //   break;

    // case "articl":
    //   searchedText = htmlData;
    //   break;

    // case "artic":
    //   searchedText = htmlData;
    //   break;

    // case "arti":
    //   searchedText = htmlData;
    //   break;

    // case "art":
    //   searchedText = htmlData;
    //   break;

    // // case "aside":
    // //   searchedText = htmlData;
    // //   break;

    // // case "asid":
    // //   searchedText = htmlData;
    // //   break;

    // // case "asi":
    // //   searchedText = htmlData;
    // //   break;

    // // case "audio":
    // //   searchedText = htmlData;
    // //   break;

    // // case "audi":
    // //   searchedText = htmlData;
    // //   break;

    // case "aud":
    //   searchedText = htmlData;
    //   break;

    case "base":
      searchedText = htmlData;
      break;

    case "bas":
      searchedText = htmlData;
      break;

    case "basefont":
      searchedText = htmlData;
      break;

    case "basefon":
      searchedText = htmlData;
      break;

    case "basefo":
      searchedText = htmlData;
      break;

    case "basef":
      searchedText = htmlData;
      break;

    case "bdi":
      searchedText = htmlData;
      break;

    case "bdo":
      searchedText = htmlData;
      break;

    case "big":
      searchedText = htmlData;
      break;

    case "blockquote":
      searchedText = htmlData;
      break;

    case "blovkquot":
      searchedText = htmlData;
      break;

    case "blockquo":
      searchedText = htmlData;
      break;

    case "blockqu":
      searchedText = htmlData;
      break;

    case "blockq":
      searchedText = htmlData;
      break;

    case "block":
      searchedText = htmlData;
      break;

    case "bloc":
      searchedText = htmlData;
      break;

    case "blo":
      searchedText = htmlData;
      break;

    case "body":
      searchedText = htmlData;
      break;

    case "bod":
      searchedText = htmlData;
      break;

    case "button":
      searchedText = htmlData;
      break;

    case "butto":
      searchedText = htmlData;
      break;
    case "butt":
      searchedText = htmlData;
      break;

    case "but":
      searchedText = htmlData;
      break;

    case "canvas":
      searchedText = htmlData;
      break;

    case "canva":
      searchedText = htmlData;
      break;

    case "canv":
      searchedText = htmlData;
      break;

    case "can":
      searchedText = htmlData;
      break;

    case "caption":
      searchedText = htmlData;
      break;

    case "captio":
      searchedText = htmlData;
      break;

    case "capti":
      searchedText = htmlData;
      break;

    case "capt":
      searchedText = htmlData;
      break;

    case "cap":
      searchedText = htmlData;
      break;

    case "center":
      searchedText = htmlData;
      break;

    case "cente":
      searchedText = htmlData;
      break;

    case "cent":
      searchedText = htmlData;
      break;

    case "cen":
      searchedText = htmlData;
      break;

    case "cite":
      searchedText = htmlData;
      break;

    case "cit":
      searchedText = htmlData;
      break;

    case "code":
      searchedText = htmlData;
      break;

    case "cod":
      searchedText = htmlData;
      break;

    case "col":
      searchedText = htmlData;
      break;

    case "colgroup":
      searchedText = htmlData;
      break;

    case "colgrou":
      searchedText = htmlData;
      break;

    case "colgro":
      searchedText = htmlData;
      break;

    case "colgr":
      searchedText = htmlData;
      break;

    case "colg":
      searchedText = htmlData;
      break;

    case "data":
      searchedText = htmlData;
      break;

    case "dat":
      searchedText = htmlData;
      break;

    case "datalist":
      searchedText = htmlData;
      break;

    case "datalis":
      searchedText = htmlData;
      break;

    case "datali":
      searchedText = htmlData;
      break;

    case "datal":
      searchedText = htmlData;
      break;

    case "del":
      searchedText = htmlData;
      break;

    case "details":
      searchedText = htmlData;
      break;

    case "detail":
      searchedText = htmlData;
      break;

    case "detai":
      searchedText = htmlData;
      break;

    case "deta":
      searchedText = htmlData;
      break;

    case "det":
      searchedText = htmlData;
      break;

    case "dfn":
      searchedText = htmlData;
      break;

    case "dialog":
      searchedText = htmlData;
      break;

    case "dialo":
      searchedText = htmlData;
      break;

    case "dial":
      searchedText = htmlData;
      break;

    case "dia":
      searchedText = htmlData;
      break;

    case "dir":
      searchedText = htmlData;
      break;

    case "div":
      searchedText = htmlData;
      break;

    case "fieldset":
      searchedText = htmlData;
      break;

    case "fieldse":
      searchedText = htmlData;
      break;

    case "fields":
      searchedText = htmlData;
      break;

    case "field":
      searchedText = htmlData;
      break;

    case "fiel":
      searchedText = htmlData;
      break;

    case "fie":
      searchedText = htmlData;
      break;

    case "figcaption":
      searchedText = htmlData;
      break;

    case "figcaptio":
      searchedText = htmlData;
      break;

    case "figcapti":
      searchedText = htmlData;
      break;

    case "figcapt":
      searchedText = htmlData;
      break;

    case "figcap":
      searchedText = htmlData;
      break;

    case "figca":
      searchedText = htmlData;
      break;

    case "figc":
      searchedText = htmlData;
      break;

    case "fig":
      searchedText = htmlData;
      break;

    case "figure":
      searchedText = htmlData;
      break;
    case "....":
      searchedText = htmlData;
      break;
    case ".....":
      searchedText = htmlData;
      break;
    case "......":
      searchedText = htmlData;
      break;
    case ".......":
      searchedText = htmlData;
      break;
    case "........":
      searchedText = htmlData;
      break;
    case ".........":
      searchedText = htmlData;
      break;
    case "..........":
      searchedText = htmlData;
      break;
    case "...........":
      searchedText = htmlData;
      break;
    case "............":
      searchedText = htmlData;
      break;
    case ".............":
      searchedText = htmlData;
      break;
    case "..............":
      searchedText = htmlData;
      break;
    case "...............":
      searchedText = htmlData;
      break;
    case "................":
      searchedText = htmlData;
      break;
    case "[":
      searchedText = htmlData;
      break;

    case "[[[":
      searchedText = htmlData;
      break;

    case "]":
      searchedText = htmlData;
      break;

    case "]]]":
      searchedText = htmlData;
      break;

    case "*\\":
      searchedText = htmlData;
      break;

    case "|":
      searchedText = htmlData;
      break;

    case "[[[":
      searchedText = htmlData;
      break;

    case "figur":
      searchedText = htmlData;
      break;

    case "figu":
      searchedText = htmlData;
      break;

    case "font":
      searchedText = htmlData;
      break;

    case "fon":
      searchedText = htmlData;
      break;

    case "footer":
      searchedText = htmlData;
      break;

    case "foote":
      searchedText = htmlData;
      break;

    case "foot":
      searchedText = htmlData;
      break;

    case "foo":
      searchedText = htmlData;
      break;

    case "form":
      searchedText = htmlData;
      break;

    case "for":
      searchedText = htmlData;
      break;

    case "frame":
      searchedText = htmlData;
      break;

    case "fram":
      searchedText = htmlData;
      break;

    case "fra":
      searchedText = htmlData;
      break;

    case "frameset":
      searchedText = htmlData;
      break;

    case "framese":
      searchedText = htmlData;
      break;

    case "frames":
      searchedText = htmlData;
      break;

    case "head":
      searchedText = htmlData;
      break;

    case "hea":
      searchedText = htmlData;
      break;

    case "header":
      searchedText = htmlData;
      break;

    case "heade":
      searchedText = htmlData;
      break;

    case "html":
      searchedText = htmlData;
      break;

    case "htm":
      searchedText = htmlData;
      break;

    case "iframe":
      searchedText = htmlData;
      break;

    case "ifram":
      searchedText = htmlData;
      break;

    case "ifra":
      searchedText = htmlData;
      break;

    case "ifr":
      searchedText = htmlData;
      break;

    case "input":
      searchedText = htmlData;
      break;

    case "inpu":
      searchedText = htmlData;
      break;

    case "inp":
      searchedText = htmlData;
      break;

    case "ins":
      searchedText = htmlData;
      break;

    case "kbd":
      searchedText = htmlData;
      break;

    case "label":
      searchedText = htmlData;
      break;

    case "labe":
      searchedText = htmlData;
      break;

    case "lab":
      searchedText = htmlData;
      break;

    case "legend":
      searchedText = htmlData;
      break;

    case "legen":
      searchedText = htmlData;
      break;

    case "lege":
      searchedText = htmlData;
      break;

    case "leg":
      searchedText = htmlData;
      break;

    case "link":
      searchedText = htmlData;
      break;

    case "lin":
      searchedText = htmlData;
      break;

    case "main":
      searchedText = htmlData;
      break;

    case "mai":
      searchedText = htmlData;
      break;

    case "map":
      searchedText = htmlData;
      break;

    case "mark":
      searchedText = htmlData;
      break;

    case "meta":
      searchedText = htmlData;
      break;

    case "met":
      searchedText = htmlData;
      break;

    case "meter":
      searchedText = htmlData;
      break;

    case "mete":
      searchedText = htmlData;
      break;

    case "noframes":
      searchedText = htmlData;
      break;

    case "noframe":
      searchedText = htmlData;
      break;

    case "nofram":
      searchedText = htmlData;
      break;
    case "nofra":
      searchedText = htmlData;
      break;

    case "nofr":
      searchedText = htmlData;
      break;

    case "nof":
      searchedText = htmlData;
      break;

    case "noscript":
      searchedText = htmlData;
      break;

    case "noscrip":
      searchedText = htmlData;
      break;

    case "noscri":
      searchedText = htmlData;
      break;

    case "noscr":
      searchedText = htmlData;
      break;

    case "nosc":
      searchedText = htmlData;
      break;

    case "nos":
      searchedText = htmlData;
      break;

    // case "object":
    //   searchedText = htmlData;
    //   break;

    // case "objec":
    //   searchedText = htmlData;
    //   break;

    // case "obje":
    //   searchedText = htmlData;
    //   break;

    // case "obj":
    //   searchedText = htmlData;
    //   break;

    case "optgroup":
      searchedText = htmlData;
      break;

    case "optgrou":
      searchedText = htmlData;
      break;

    case "optgro":
      searchedText = htmlData;
      break;

    case "optgr":
      searchedText = htmlData;
      break;

    case "optg":
      searchedText = htmlData;
      break;

    case "opt":
      searchedText = htmlData;
      break;

    case "option":
      searchedText = htmlData;
      break;

    case "optio":
      searchedText = htmlData;
      break;

    case "opti":
      searchedText = htmlData;
      break;

    case "output":
      searchedText = htmlData;
      break;

    case "outpu":
      searchedText = htmlData;
      break;

    case "outp":
      searchedText = htmlData;
      break;

    case "out":
      searchedText = htmlData;
      break;

    case "param":
      searchedText = htmlData;
      break;

    case "para":
      searchedText = htmlData;
      break;

    case "par":
      searchedText = htmlData;
      break;

    case "picture":
      searchedText = htmlData;
      break;

    case "pictur":
      searchedText = htmlData;
      break;

    case "pictu":
      searchedText = htmlData;
      break;

    case "pict":
      searchedText = htmlData;
      break;

    case "pic":
      searchedText = htmlData;
      break;

    case "pre":
      searchedText = htmlData;
      break;

    case "progress":
      searchedText = htmlData;
      break;

    case "progres":
      searchedText = htmlData;
      break;

    case "progre":
      searchedText = htmlData;
      break;

    case "progr":
      searchedText = htmlData;
      break;

    case "prog":
      searchedText = htmlData;
      break;

    case "pro":
      searchedText = htmlData;
      break;

    case "ruby":
      searchedText = htmlData;
      break;

    case "rub":
      searchedText = htmlData;
      break;

    case "samp":
      searchedText = htmlData;
      break;

    case "sam":
      searchedText = htmlData;
      break;

    case "script":
      searchedText = htmlData;
      break;

    case "scrip":
      searchedText = htmlData;
      break;

    case "scri":
      searchedText = htmlData;
      break;

    case "scr":
      searchedText = htmlData;
      break;

    case "section":
      searchedText = htmlData;
      break;

    case "sectio":
      searchedText = htmlData;
      break;

    case "secti":
      searchedText = htmlData;
      break;

    case "sect":
      searchedText = htmlData;
      break;

    case "sec":
      searchedText = htmlData;
      break;

    case "select":
      searchedText = htmlData;
      break;

    case "selec":
      searchedText = htmlData;
      break;

    case "sele":
      searchedText = htmlData;
      break;

    case "sel":
      searchedText = htmlData;
      break;
    case "small":
      searchedText = htmlData;
      break;

    case "smal":
      searchedText = htmlData;
      break;

    case "sma":
      searchedText = htmlData;
      break;

    case "source":
      searchedText = htmlData;
      break;

    case "sourc":
      searchedText = htmlData;
      break;

    case "sour":
      searchedText = htmlData;
      break;

    case "sou":
      searchedText = htmlData;
      break;

    case "span":
      searchedText = htmlData;
      break;

    case "spa":
      searchedText = htmlData;
      break;

    case "strong":
      searchedText = htmlData;
      break;

    case "stron":
      searchedText = htmlData;
      break;

    case "stro":
      searchedText = htmlData;
      break;

    case "str":
      searchedText = htmlData;
      break;

    case "style":
      searchedText = htmlData;
      break;

    case "styl":
      searchedText = htmlData;
      break;

    case "sty":
      searchedText = htmlData;
      break;

    case "sub":
      searchedText = htmlData;
      break;

    // case "summary":
    //   searchedText = htmlData;
    //   break;

    // case "summar":
    //   searchedText = htmlData;
    //   break;

    // case "summa":
    //   searchedText = htmlData;
    //   break;

    // case "summ":
    //   searchedText = htmlData;
    //   break;

    // case "sum":
    //   searchedText = htmlData;
    //   break;

    case "svg":
      searchedText = htmlData;
      break;

    case "table":
      searchedText = htmlData;
      break;

    case "tabl":
      searchedText = htmlData;
      break;

    case "tab":
      searchedText = htmlData;
      break;

    case "tbody":
      searchedText = htmlData;
      break;

    case "tbod":
      searchedText = htmlData;
      break;

    case "tbo":
      searchedText = htmlData;
      break;

    case "template":
      searchedText = htmlData;
      break;

    case "templat":
      searchedText = htmlData;
      break;

    case "templa":
      searchedText = htmlData;
      break;

    case "templ":
      searchedText = htmlData;
      break;

    case "temp":
      searchedText = htmlData;
      break;

    case "tem":
      searchedText = htmlData;
      break;

    // case "textarea":
    //   searchedText = htmlData;
    //   break;

    // case "textare":
    //   searchedText = htmlData;
    //   break;

    // case "textar":
    //   searchedText = htmlData;
    //   break;

    // case "texta":
    //   searchedText = htmlData;
    //   break;

    // case "text":
    //   searchedText = htmlData;
    //   break;

    // case "tex":
    //   searchedText = htmlData;
    //   break;

    case "tfoot":
      searchedText = htmlData;
      break;

    case "tfoo":
      searchedText = htmlData;
      break;

    case "tfo":
      searchedText = htmlData;
      break;

    case "thead":
      searchedText = htmlData;
      break;

    case "thea":
      searchedText = htmlData;
      break;

    case "the":
      searchedText = htmlData;
      break;

    case "time":
      searchedText = htmlData;
      break;

    case "tim":
      searchedText = htmlData;
      break;

    case "title":
      searchedText = htmlData;
      break;

    case "track":
      searchedText = htmlData;
      break;

    case "trac":
      searchedText = htmlData;
      break;

    case "tra":
      searchedText = htmlData;
      break;

    case "var":
      searchedText = htmlData;
      break;

    case "video":
      searchedText = htmlData;
      break;

    case "vide":
      searchedText = htmlData;
      break;

    case "vid":
      searchedText = htmlData;
      break;

    case "wbr":
      searchedText = htmlData;
      break;

    default:
      searchedText = jsonData;
  }

  return (
    <div>
      <TextEditorRenderOutput
        data={
          searchedTextValue === ""
            ? htmlData
            : searchedTextValue.length <= 2
            ? htmlData
            : searchedText
        }
        noteId={noteId}
        ref={ref}
      />
    </div>
  );
};

export default SearchableText;